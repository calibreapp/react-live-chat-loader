import { State } from 'types'

const domain = 'https://widget.intercom.io'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    Intercom: any
    intercomSettings: () => void
  }
}

/* eslint-disable */
const loadScript = () => {
  if (window.Intercom) return
  ;(function() {
    var w = window
    var ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      //eslint-disable-next-line no-undef
      ic('update', window.intercomSettings)
    } else {
      var d = document
      var i: any = function() {
        i.c(arguments)
      }
      i.q = []
      i.c = function(args: any) {
        i.q.push(args)
      }
      w.Intercom = i
      //eslint-disable-next-line no-inner-declarations
      const l = () => {
        var s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = `${domain}/widget/3qmk5gyg`
        var x = d.getElementsByTagName('script')[0]
        x.parentNode?.insertBefore(s, x)
      }
      l()
    }
  })()
}
/* eslint:enable */

const load = ({
  providerKey,
  setState
}: {
  providerKey: string
  setState: (state: State) => void
}) => {
  loadScript()
  window.Intercom('boot', { app_id: providerKey })
  setTimeout(() => setState('complete'), 2000)
}

const open = () => window.Intercom('show')

const close = () => window.Intercom('close')

export default {
  domain,
  load,
  open,
  close
}
