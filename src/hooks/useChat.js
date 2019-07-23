import { useContext, useCallback } from 'react'

import { LiveChatLoaderContext } from '../'
import STATES from '../utils/states'
import Providers from '../providers'

const useChat = () => {
  const { provider, providerKey, state, setState } = useContext(
    LiveChatLoaderContext
  )
  const loadChat = useCallback(({ toggle = false }) => {
    if (!providerKey) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-live-chat-loader')
      return
    }

    const chatProvider = Providers[provider]
    if (!provider) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-live-chat-loader')
      return
    }

    if (state === STATES.LOADING) return
    if (state === STATES.LOADED && toggle) return chatProvider.close()

    if (state === STATES.INITIAL) {
      setState(STATES.LOADING)
      chatProvider.load({ providerKey, state, setState })
      setState(STATES.LOADED)
      setTimeout(() => setState(STATES.COMPLETE), 2000)
    } else {
      chatProvider.open()
    }
  })

  return [state, loadChat]
}

export default useChat
