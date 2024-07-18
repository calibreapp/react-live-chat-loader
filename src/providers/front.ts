// Website: https://front.com/product/live-chat
// Documentation: https://help.front.com/

import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

declare global {
  interface Window {
    FrontChat?: {
      (
        command: string,
        params?: Record<string, string | boolean | unknown>
      ): void
      // This isn't part of the FrontChat API; we add it to track when Front is fully initialized
      hasInitialized: boolean
    }
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

    window.FrontChat?.('init', {
      chatId: providerKey,
      onInitCompleted: () => {
        setState('complete')
        onReady()
        if (window.FrontChat) window.FrontChat.hasInitialized = true
      }
      //Read more: https://dev.frontapp.com/docs/chat-sdk-reference
    })
  })
  return loaded
}

const open = (): void => {
  waitForLoad(
    () => !!window.FrontChat?.hasInitialized,
    () => window.FrontChat?.('show')
  )
}

export default {
  domain,
  load,
  open
}
