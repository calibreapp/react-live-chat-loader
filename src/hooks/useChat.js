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
    if (!loadWhenIdle || !idlePeriod) return

    // Don't load if 2g connection or save-data is enabled
    if (
      connection &&
      (connection.saveData || /2g/.test(connection.effectiveType))
    )
      return

    const idleCountThreshold = parseInt(idlePeriod, 10) / 50
    if (isNaN(idleCountThreshold)) return

    // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold
    let idleCounts = 0
    const scheduleLoad = deadline => {
      if (idleCounts > idleCountThreshold) {
        loadChat({ open: false })
      } else if (deadline.timeRemaining() > 49) {
        // no activity has occurred, increment idle count
        idleCounts++
        requestIdleCallback(scheduleLoad)
      } else {
        // some activity has occurred, reset idle count
        idleCounts = 0
        requestIdleCallback(scheduleLoad)
      }
    }

    if (requestIdleCallback) {
      requestIdleCallback(scheduleLoad)
    } else {
      setTimeout(() => loadChat({ open: false }), idleCountThreshold)
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
    if (state === STATES.COMPLETE) return chatProvider.open()

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
