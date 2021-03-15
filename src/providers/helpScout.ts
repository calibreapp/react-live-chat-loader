import { IHelpScoutLoader } from 'types'

const domain = 'https://beacon-v2.helpscout.net'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    Beacon: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    attachEvent: any
  }
}

/* eslint:disable */
const loadScript = () => {
  if (window.Beacon) return
  ;(function(e, t, n) {
    function a() {
      const e = t.getElementsByTagName('script')[0],
        n = t.createElement('script')
      ;(n.async = !0), (n.src = domain), e.parentNode?.insertBefore(n, e)
    }
    if (
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((e.Beacon = n = function(t: any, n: any, a: any) {
        e.Beacon.readyQueue.push({ method: t, options: n, data: a })
      }),
      (n.readyQueue = []),
      'complete' === t.readyState)
    )
      return a()
    e.attachEvent
      ? e.attachEvent('onload', a)
      : e.addEventListener('load', a, !1)
    //eslint-disable-next-line @typescript-eslint/no-empty-function
  })(window, document, window.Beacon || function() {})
}
/* eslint:enable */

const load = ({ providerKey, setState }: IHelpScoutLoader): void => {
  loadScript()
  window.Beacon('init', providerKey)
  setTimeout(() => setState('complete'), 2000)
}

const open = (): void => window.Beacon('open')
const close = (): void => window.Beacon('close')

export default {
  domain,
  load,
  open,
  close
}
