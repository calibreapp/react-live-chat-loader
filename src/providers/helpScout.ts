import { State } from '../types'

const domain = 'https://beacon-v2.helpscout.net'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    Beacon: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    attachEvent: any
  }
}

/* eslint-disable */
const loadScript = (): boolean => {
  if (window.Beacon) return false
  ;(function(e, t, n) {
    function a() {
      const e = t.getElementsByTagName('script')[0],
        n = t.createElement('script')
      ;(n.async = !0), (n.src = domain), e.parentNode?.insertBefore(n, e)
    }
    if (
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
  })(window, document, window.Beacon || function() {})

  return true
}
/* eslint-enable */

const load = ({
  providerKey,
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  providerKey: string
  setState: (state: State) => void
  beforeInit?: () => void
  onReady?: () => void
}): boolean => {
  const loaded = loadScript()

  // Continue as long as helpscout hasn’t already been initialised.
  if (loaded) {
    beforeInit()
    window.Beacon('init', providerKey)
    window.Beacon('once', 'ready', () =>
      // Allow helpscout to complete loading before removing fake widget
      setTimeout(() => {
        setState('complete')
        onReady()
      }, 2000)
    )
  }

  return loaded
}

const open = (): void => window.Beacon('open')

export default {
  domain,
  load,
  open
}
