import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    userlike: {
      userlikeReady: () => void
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
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  providerKey: string
  setState: (state: State) => void
  beforeInit?: () => void
  onReady?: () => void
}): boolean => {
  const loaded = loadScript(providerKey)
  // Continue as long as userlike hasn’t already been initialised.
  if (loaded) {
    beforeInit()
    waitForLoad(
      () => !!window.userlike,
      // Allow userlike to complete loading before removing fake widget
      () =>
        setTimeout(() => {
          setState('complete')
          onReady()
        }, 2000)
    )
  }

  return true
}

const open = (): void => {
  waitForLoad(
    () => !!window.userlike?.userlikeStartChat,
    // userlike is slow to show once it has loaded
    () => setTimeout(window.userlike.userlikeStartChat, 1000)
  )
}

export default {
  domain,
  load,
  open
}
