import STATES from './states'

const loadScript = () => {
  !(function(e, t, n) {
    function a() {
      var e = t.getElementsByTagName('script')[0],
        n = t.createElement('script')
      ;(n.async = !0),
        (n.src = 'https://beacon-v2.helpscout.net'),
        e.parentNode.insertBefore(n, e)
    }
    if (
      ((e.Beacon = n = function(t, n, a) {
        e.Beacon.readyQueue.push({ method: t, options: n, data: a })
      }),
      (n.readyQueue = []),
      'complete' === t.readyState)
    )
      return a()
    e.attachEvent
      ? e.attachEvent('onload', a)
      : e.addEventListener('load', a, !1)
  })(window, document, window.Beacon || function() {})
}

const loadHelpScout = ({ apiKey, state, setState }) => {
  if (state === STATES.LOADING) return
  if (state === STATES.LOADED) return window.Beacon('close')

  if (state === STATES.INITIAL) {
    setState(STATES.LOADING)
    loadScript()
    window.Beacon('init', apiKey)
    window.Beacon('open')
    setState(STATES.LOADED)
    setTimeout(() => setState(STATES.COMPLETE), 2000)
  } else {
    window.Beacon('open')
  }
}

export default loadHelpScout
