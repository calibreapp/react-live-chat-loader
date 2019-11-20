import { useContext, useCallback, useEffect } from 'react'

import { LiveChatLoaderContext } from '../'
import STATES from '../utils/states'
import Providers from '../providers'

const requestIdleCallback =
  typeof window !== 'undefined' ? window.requestIdleCallback : null

const useChat = () => {
  const { provider, providerKey, idlePeriod, state, setState } = useContext(
    LiveChatLoaderContext
  )

  let scriptLoaded = false

  useEffect(() => {
    // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold

    if (!idlePeriod) return
    const idleCountThreshold = parseInt(idlePeriod, 10) / 50
    if (isNaN(idleCountThreshold)) return

    let idleCounts = 0

    const loadWhenIdle = deadline => {
      if (idleCounts > idleCountThreshold) {
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
