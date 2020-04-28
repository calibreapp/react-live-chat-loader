import STATES from '../utils/states'

const domain = 'https://connect.facebook.net'

const loadScript = ({ locale }) => {
  if (window.FB) return

  !(function loadFacebookSDK(d, s, id) {
    // fetch customerchat.js
    var fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    var js = d.createElement(s)
    js.id = id
    js.src = `${domain}/${locale}/sdk/xfbml.customerchat.js`
    if (fjs) {
      fjs.parentNode.insertBefore(js, fjs)
    } else {
      d.body.appendChild(js)
    }
  })(window.document, 'script', 'facebook-jssdk')
}

const load = ({ appID, locale = 'en_US', setState }) => {
  loadScript({ locale })
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
  setTimeout(() => setState(STATES.COMPLETE), 2000)
}

const open = () => {
  if (window.FB) {
    window.FB.CustomerChat.show(true)
  }
}
const close = () => {
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
