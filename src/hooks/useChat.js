import { useContext, useCallback, useEffect } from 'react'

import { LiveChatLoaderContext } from '../'
import STATES from '../utils/states'
import STRATEGIES from '../utils/strategies'
import Providers from '../providers'

const requestIdleCallback =
  typeof window !== 'undefined' ? window.requestIdleCallback : null

const useChat = () => {
  const { provider, providerKey, strategy, state, setState } = useContext(
    LiveChatLoaderContext
  )

  let scriptLoaded = false

  useEffect(() => {
    if (strategy !== STRATEGIES.IDLE) return

    if (requestIdleCallback) {
      requestIdleCallback(() => loadChat({ open: false }))
    } else {
      loadChat({ open: false })
    }
  }, [])

  const chatProvider = Providers[provider]

  const loadChat = useCallback(({ open = true }) => {
    if (!providerKey) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-live-chat-loader')
      return
    }

    if (!provider) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-live-chat-loader')
      return
    }

    if (state === STATES.LOADING) return
    if (state === STATES.LOADED) return chatProvider.close()

    if (!scriptLoaded) {
      scriptLoaded = true
      chatProvider.load({ providerKey, state, setState })
      setTimeout(() => setState(STATES.COMPLETE), 2000)
    }

    if (open) {
      setState(STATES.LOADING)
      chatProvider.open()
      setState(STATES.LOADED)
    }
  })

  return [state, loadChat]
}

export default useChat
