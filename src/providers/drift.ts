import { IDriftLoader } from 'types'

const domain = 'https://js.driftt.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    drift: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    driftt: any
  }
}

const loadScript = () => {
  if (window.drift) return

  !(function() {
    const t = (window.driftt = window.drift = window.driftt || [])
    if (!t.init) {
      if (t.invoked) {
        return void (
          window.console &&
          //eslint-disable-next-line no-console
          console.error &&
          //eslint-disable-next-line no-console
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
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        (t.factory = function(e: any) {
          return function() {
            //eslint-disable-next-line prefer-rest-params
            const n = Array.prototype.slice.call(arguments)
            return n.unshift(e), t.push(n), t
          }
        }),
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        t.methods.forEach(function(e: any) {
          t[e] = t.factory(e)
        }),
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        (t.load = function(t: any) {
          const e = 3e5,
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
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
}
/* eslint:enable */

const load = ({ providerKey, setState }: IDriftLoader): void => {
  loadScript()
  window.drift.load(providerKey)
  window.drift.SNIPPET_VERSION = '0.3.1'
  window.drift.on('ready', () => {
    setState('open')
    setTimeout(() => setState('complete'), 2000)
  })
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
