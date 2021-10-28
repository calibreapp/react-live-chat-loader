import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://connect.facebook.net'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    FB: any
    fbAsyncInit: () => void
  }
}

/* eslint-disable */
const loadScript = (locale: string): boolean => {
  if (window.FB) return false
  ;(function loadFacebookSDK(d, s, id) {
    // fetch customerchat.js
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    const js = d.createElement(s) as any
    js.id = id
    js.src = `${domain}/${locale}/sdk/xfbml.customerchat.js`
    if (fjs) {
      fjs.parentNode?.insertBefore(js, fjs)
    } else {
      d.body.appendChild(js)
    }
  })(window.document, 'script', 'facebook-jssdk')
  return true
}
/* eslint-enable */

const load = ({
  appID,
  locale = 'en_US',
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  appID?: string
  locale?: string
  setState: (state: State) => void
  beforeInit?: () => void
  onReady?: () => void
}): boolean => {
  const loaded = loadScript(locale)
  // Continue as long as messenger hasn’t already been initialised.
  if (loaded) {
    beforeInit()
    window.fbAsyncInit = function() {
      window.FB.init(
        Object.assign(
          {
            cookie: true,
            xfbml: true,
            version: 'v6.0'
          },
          appID ? { appId: appID } : {}
        )
      )
      window.FB.Event.subscribe('customerchat.load', () =>
        // Allow messenger to complete loading before removing fake widget
        setTimeout(() => {
          setState('complete')
          onReady()
        }, 3000)
      )
    }
  }

  return loaded
}

const open = (): void => {
  waitForLoad(
    () => !!window.FB?.CustomerChat?.show,
    // messenger is slow to show once it has loaded
    () => setTimeout(() => window.FB.CustomerChat.show(true), 2000)
  )
}

const isOpen = () => false

export default {
  domain,
  load,
  open,
  isOpen
}
