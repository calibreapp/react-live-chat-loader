import STATES from '../utils/states'

const domain = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com'

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

const load = ({ providerKey, setState }) => {
  loadScript(providerKey)
  if (window.userlike) {
    window.userlike.userlikeReady = () => {
      setState(STATES.OPEN)
      setTimeout(() => setState(STATES.COMPLETE), 2000)
    };
  }
}

const open = () => window.userlike && window.userlike.userlikeStartChat()

const close = () => window.userlike && window.userlike.userlikeQuitChat()

export default {
  domain,
  load,
  open,
  close
}
