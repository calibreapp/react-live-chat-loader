import { State } from 'types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://widget.intercom.io'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    Intercom: any
    intercomSettings: () => void
  }
}

/* eslint-disable */
const loadScript = (): boolean => {
  if (window.Intercom) return false
  ;(function() {
    var w = window
    var ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
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

  // Continue as long as userlike hasn’t already been initialised.
  if (loaded) {
    window.Intercom('boot', { app_id: providerKey })
    waitForLoad(
      () => window.Intercom.booted,
      // Allow intercom to complete loading before removing fake widget
      () => setTimeout(() => setState('complete'), 2000)
    )
  }

  return loaded
}

const open = (): void => window.Intercom('show')

export default {
  domain,
  load,
  open
}
