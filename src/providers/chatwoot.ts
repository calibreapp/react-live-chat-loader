import { Provider, State } from '../types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://app.chatwoot.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    chatwootSettings: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    $chatwoot: any
    chatwootSDK: {
      run: (options: {
        websiteToken: string
        baseUrl: string
        locale?: string
        type?: 'standard' | 'expanded_bubble'
        position?: 'left' | 'right'
      }) => void
    }
  }
}

/* eslint-disable */
const loadScript = (onload: () => void, baseUrl: string): boolean => {
  if (window.$chatwoot) return false
  ;(function(d, t) {
    var script: HTMLScriptElement = d.createElement('script')
    var fisrtScript = d.getElementsByTagName('script')[0]
    script.src = baseUrl + '/packs/js/sdk.js'
    fisrtScript.parentNode?.insertBefore(script, fisrtScript)
    script.onload = onload
  })(document)
  return true
}
/* eslint-enable */

const load = ({
  providerKey,
  locale = 'en',
  setState,
  baseUrl = domain,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  providerKey: Provider
  locale?: string
  setState: (state: State) => void
  baseUrl?: string
  beforeInit?: () => void
  onReady?: () => void
}): void => {
  const loaded = loadScript(function() {
    beforeInit()

    setTimeout(() => {
      setState('complete')
      onReady()
    }, 1000)

    window.chatwootSDK.run({
      websiteToken: providerKey,
      baseUrl,
      locale
    })
  }, baseUrl)

  // Continue as long as userlike hasn’t already been initialised.
  if (loaded) {
    waitForLoad(
      () => !!window.$chatwoot?.hasLoaded,
      // Allow chatwoot to complete loading before removing fake widget
      () => setTimeout(() => setState('complete'), 2000)
    )
  }
}

const open = (): void => {
  window.chatwootSettings = window.chatwootSettings || {}
  window.chatwootSettings.showPopoutButton = true
  window.addEventListener('chatwoot:ready', function() {
    window.$chatwoot.toggle()
  })
}

export default {
  domain,
  load,
  open
}
