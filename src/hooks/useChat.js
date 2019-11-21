import { useContext, useCallback, useEffect } from 'react'

import { LiveChatLoaderContext } from '../'
import STATES from '../utils/states'
import Providers from '../providers'

const requestIdleCallback =
  typeof window !== 'undefined' ? window.requestIdleCallback : null
const connection =
  typeof window !== 'undefined'
    ? window.navigator && window.navigator.connection
    : null

let scriptLoaded = false

const useChat = ({ loadWhenIdle } = {}) => {
  const { provider, providerKey, idlePeriod, state, setState } = useContext(
    LiveChatLoaderContext
  )

  useEffect(() => {
    // Don't load if idlePeriod is 0, null or undefined
    if (typeof window === 'undefined' || !loadWhenIdle || !idlePeriod) return

    // Don't load if 2g connection or save-data is enabled
    if (
      connection &&
      (connection.saveData || /2g/.test(connection.effectiveType))
    )
      return

    const idleThreshold = parseInt(idlePeriod, 10)
    if (isNaN(idleThreshold)) return

    // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold
    let elapsedIdlePeriod = 0
    const scheduleLoadChat = deadline => {
      if (elapsedIdlePeriod > idleThreshold) return loadChat({ open: false })

      const timeRemaining = deadline.timeRemaining()
      if (timeRemaining > 49) elapsedIdlePeriod += timeRemaining

      requestIdleCallback(scheduleLoadChat)
    }

    if (requestIdleCallback) {
      requestIdleCallback(scheduleLoadChat)
    } else {
      setTimeout(() => loadChat({ open: false }), idleThreshold * 2)
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

    if (state === STATES.OPENING) return
    if (state === STATES.OPEN) return chatProvider.close()
    if (state === STATES.COMPLETE) return chatProvider.open()

    if (!scriptLoaded) {
      scriptLoaded = true
      chatProvider.load({ providerKey, state, setState })
      setTimeout(() => setState(STATES.COMPLETE), 2000)
    }

    if (open) {
      setState(STATES.OPENING)
      chatProvider.open()
      setState(STATES.OPEN)
    }
  })

  return [state, loadChat]
}

export default useChat
