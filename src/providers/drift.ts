import { State } from 'types'

const domain = 'https://js.driftt.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    drift: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    driftt: any
  }
}

/* eslint-disable */
const loadScript = (): boolean => {
  if (window.drift) return false

  !(function() {
    const t = (window.driftt = window.drift = window.driftt || [])
    if (!t.init) {
      if (t.invoked) {
        return void (
          window.console &&
          console.error &&
          console.error('Drift snippet included twice.')
        )
      }
      //eslint-disable-next-line  @typescript-eslint/no-extra-semi
      ;(t.invoked = !0),
        (t.methods = [
          'identify',
          'config',
          'track',
          'reset',
          'debug',
          'show',
          'ping',
          'page',
          'hide',
          'off',
          'on'
        ]),
        (t.factory = function(e: any) {
          return function() {
            const n = Array.prototype.slice.call(arguments)
            return n.unshift(e), t.push(n), t
          }
        }),
        t.methods.forEach(function(e: any) {
          t[e] = t.factory(e)
        }),
        (t.load = function(t: any) {
          const e = 3e5,
            n = Math.ceil((new Date() as any) / e) * e,
            o = document.createElement('script')
          ;(o.type = 'text/javascript'),
            (o.async = !0),
            (o.crossOrigin = 'anonymous'),
            (o.src = 'https://js.driftt.com/include/' + n + '/' + t + '.js')
          const i = document.getElementsByTagName('script')[0]
          i.parentNode?.insertBefore(o, i)
        })
    }
  })()

  return true
}
/* eslint-enable */

const load = ({
  providerKey,
  setState
}: {
  providerKey: string
  setState: (state: State) => void
}): boolean => {
  const loaded = loadScript()

  if (loaded) {
    window.drift.load(providerKey)
    window.drift.SNIPPET_VERSION = '0.3.1'
    window.drift.on('ready', () => {
      setState('complete')
    })
  }

  return loaded
}

const open = (): void =>
  window.drift.on('ready', (api: { showWelcomeMessage: () => void }) =>
    api.showWelcomeMessage()
  )

const close = (): void =>
  window.drift.on('ready', (api: { hideWelcomeMessage: () => void }) =>
    api.hideWelcomeMessage()
  )

export default {
  domain,
  load,
  open,
  close
}
