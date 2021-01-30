import STATES from '../utils/states'

const domain = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com'
const maxLoadAttempts = 10
let currentLoadAttempt = 0

const loadScript = (providerKey) => {
  if (window.userlike) return

  var d = document
  function l() {
    var s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `${domain}/${providerKey}.js`
    var x = d.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)
  }
  l()
}

const attemptLoad = (setState) => {
  if (currentLoadAttempt === maxLoadAttempts) {
    return
  }
  if (!window.userlike) {
    currentLoadAttempt += 1
    setTimeout(() => attemptLoad(setState), 1000) // Try every second
    return
  }
  
  setState(STATES.OPEN)
  setTimeout(() => setState(STATES.COMPLETE), 2000)
}

const load = ({ providerKey, setState }) => {
  loadScript(providerKey)
  attemptLoad(setState)
}

const open = () => window.userlike && window.userlike.userlikeStartChat()

const close = () => window.userlike && window.userlike.userlikeQuitChat()

export default {
  domain,
  load,
  open,
  close
}
