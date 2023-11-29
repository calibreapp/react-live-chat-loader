// Website: https://front.com/product/live-chat
// Documentation: https://help.front.com/

import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    FrontChat: any
  }
}

const domain = 'https://chat-assets.frontapp.com'
/* eslint-disable */
const loadScript = (onload: () => void) => {
  if (window.FrontChat) return false

  const script = () => {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.id = 'front-chat-script'
    s.src = `${domain}/v1/chat.bundle.js`
    var x = document.getElementsByTagName('script')[0]
    x.parentNode?.insertBefore(s, x)
    s.onload = onload
  }
  script()

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
  const loaded = loadScript(() => {
    beforeInit()

    window.FrontChat('init', {
      chatId: providerKey,
      useDefaultLauncher: false // optional. Read more: https://dev.frontapp.com/docs/chat-sdk-reference#frontchatinit-options
    })
  })

  // Continue as long as frontchat hasn’t already been initialised.
  if (loaded) {
    waitForLoad(
      () => window.FrontChat,
      // Allow frontchat to complete loading before removing fake widget
      () =>
        setTimeout(() => {
          setState('complete')
          onReady()
        }, 2000)
    )
  }
  return loaded
}
const open = () => window.FrontChat('show')
export default {
  domain,
  load,
  open
}
