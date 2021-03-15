import { IMessengerLoader } from 'types'

const domain = 'https://connect.facebook.net'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    FB: any
    fbAsyncInit: () => void
  }
}

/* eslint:disable */
const loadScript = (locale: string) => {
  if (window.FB) return
  ;(function loadFacebookSDK(d, s, id) {
    // fetch customerchat.js
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const js = d.createElement(s) as any
    js.id = id
    js.src = `${domain}/${locale}/sdk/xfbml.customerchat.js`
    if (fjs) {
      fjs.parentNode?.insertBefore(js, fjs)
    } else {
      d.body.appendChild(js)
    }
  })(window.document, 'script', 'facebook-jssdk')
}
/* eslint:enable */

const load = ({
  appID,
  locale = 'en_US',
  setState
}: IMessengerLoader): void => {
  loadScript(locale)
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
  }
  setTimeout(() => setState('complete'), 2000)
}

const open = (): void => {
  if (window.FB) {
    window.FB.CustomerChat.show(true)
  }
}
const close = (): void => {
  if (window.FB) {
    window.FB.CustomerChat.hide()
  }
}

export default {
  domain,
  load,
  open,
  close
}
