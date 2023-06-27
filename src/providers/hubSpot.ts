import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

export const domain = 'js.hs-scripts.com'
declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    HubSpotConversations: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    hsConversationsSettings: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    hsConversationsOnReady: any
  }
}

const isWidgetDefined = () => window.HubSpotConversations && window.HubSpotConversations.widget;

const loadScript = (hsId: string) => {
  // Detect the provider is already loaded and return early
  if (window.HubSpotConversations) {
    return false
  }
  (function loadHubSpotSDK(d, s, id) {
    // fetch customerchat.js
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const js = d.createElement(s) as any
    js.id = id
    js.src = `https://${domain}/${hsId}.js`
    js.type = 'text/javascript'
    js.async = 1
    js.defer = 1
    if (fjs) {
      fjs.parentNode?.insertBefore(js, fjs)
    } else {
      d.body.appendChild(js)
    }
  })(window.document, 'script', 'hs-script-loader')

  return true
}

const load = ({
  providerKey,
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined,
}: {
  providerKey: string
  setState: (state: State) => void
  beforeInit?: () => void
  onReady?: () => void
}): boolean => {
  window.hsConversationsOnReady = [
    () => {
      isWidgetDefined() && window.HubSpotConversations.widget.load()
    }
  ]
  const loaded = loadScript(providerKey)
  if (loaded) {
    beforeInit()

    waitForLoad(
      () => {
        return Boolean(
          isWidgetDefined() &&
            window.HubSpotConversations.widget.status().loaded
        )
      },
      // Allow hubspot to complete loading before removing fake widget
      () => {
        isWidgetDefined() && window.HubSpotConversations.widget.open()
        setState('complete')
        onReady()
      }
    )
  }
  return loaded
}

const open = (): unknown => {
  isWidgetDefined() && 
    !window.HubSpotConversations.widget.status().loaded &&
    window.HubSpotConversations.widget.load()

  return (
    isWidgetDefined() && 
    window.HubSpotConversations.widget.open()
  )
} // Open provider
const close = (): unknown => isWidgetDefined() && window.HubSpotConversations.widget.close() // Close provider

export default {
  load,
  open,
  close,
  domain
}
