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
  const {
    provider,
    providerKey,
    idlePeriod,
    maxIdlePeriod,
    state,
    setState
  } = useContext(LiveChatLoaderContext)

  useEffect(() => {
    // Don't load if idlePeriod is 0, null or undefined
    if (typeof window === 'undefined' || !loadWhenIdle || !idlePeriod) return

    // Don't load if 2g connection or save-data is enabled
    if (
      connection &&
      (connection.saveData || /2g/.test(connection.effectiveType))
    )
      return

    const idleCountThreshold = parseInt(idlePeriod, 10) / 50
    const idleTimeout = parseInt(maxIdlePeriod, 10)
    if (isNaN(idleCountThreshold) || isNaN(idleTimeout)) return

    const options = {}
    if (idleTimeout) options.timeout = idleTimeout

    // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold
    let idleCounts = 0
    const scheduleLoadChat = deadline => {
      if (idleCounts > idleCountThreshold) {
        loadChat({ open: false })
      } else if (deadline.timeRemaining() > 49) {
        // no activity has occurred, increment idle count
        idleCounts++
        requestIdleCallback(scheduleLoadChat, options)
      } else {
        // some activity has occurred, reset idle count
        idleCounts = 0
        requestIdleCallback(scheduleLoadChat, options)
      }
    }

    if (requestIdleCallback) {
      requestIdleCallback(scheduleLoadChat, options)
    } else {
      setTimeout(
        () => loadChat({ open: false }),
        maxIdlePeriod || idleCountThreshold * 50
      )
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
