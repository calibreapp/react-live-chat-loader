const loadScript = () => {
  if (window.Beacon) return

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

const load = ({ providerKey }) => {
  loadScript()
  window.Beacon('init', providerKey)
}

const open = () => window.Beacon('open')
const close = () => window.Beacon('close')

export default {
  load,
  open,
  close
}
