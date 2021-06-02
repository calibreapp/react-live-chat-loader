import { State } from 'types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    userlike: {
      userlikeStartChat: () => void
      userlikeQuitChat: () => void
    }
  }
}

/* eslint-disable */
const loadScript = (providerKey: string): boolean => {
  if (window.userlike) return false

  var d = document
  function l() {
    var s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `${domain}/${providerKey}.js`
    var x = d.getElementsByTagName('script')[0]
    x.parentNode?.insertBefore(s, x)
  }
  l()

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
  const loaded = loadScript(providerKey)

  if (loaded) {
    waitForLoad(
      () => (window.userlike ? true : false),
      // Allow userlike to complete loading before removing fake widget
      () => setTimeout(() => setState('complete'), 2000)
    )
  }

  return true
}

const open = (): void => {
  waitForLoad(
    () => (window.userlike ? true : false),
    // Allow userlike to complete loading before removing fake widget
    () => window.userlike && window.userlike.userlikeStartChat()
  )
}

const close = (): void => window.userlike && window.userlike.userlikeQuitChat()

export default {
  domain,
  load,
  open,
  close
}
