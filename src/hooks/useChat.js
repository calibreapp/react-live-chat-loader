import { useContext, useCallback, useEffect } from 'react'

import { LiveChatLoaderContext } from '../'
import STATES from '../utils/states'
import STRATEGIES from '../utils/strategies'
import Providers from '../providers'

const IDLE_COUNT_THRESHOLD = 4
const requestIdleCallback =
  typeof window !== 'undefined' ? window.requestIdleCallback : null

const useChat = () => {
  const { provider, providerKey, strategy, state, setState } = useContext(
    LiveChatLoaderContext
  )

  let scriptLoaded = false
  let idleCounts = 0

  const loadWhenIdle = deadline => {
    // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold
    if (idleCounts > IDLE_COUNT_THRESHOLD) {
      loadChat({ open: false })
    } else if (deadline.timeRemaining() > 49) {
      // no activity has occurred, increment idle count
      idleCounts++
      requestIdleCallback(loadWhenIdle)
    } else {
      // some activity has occurred, reset idle count
      idleCounts = 0
      requestIdleCallback(loadWhenIdle)
    }
  }

  useEffect(() => {
    if (strategy !== STRATEGIES.IDLE) return

    if (requestIdleCallback) {
      requestIdleCallback(loadWhenIdle)
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
