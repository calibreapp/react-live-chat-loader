import { useContext, useCallback, useEffect } from 'react'
import { State } from 'types'
import { LiveChatLoaderContext } from 'context'
import Providers from 'providers'

const requestIdleCallback =
  typeof window !== 'undefined' ? window.requestIdleCallback : null
const connection =
  typeof window !== 'undefined'
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.navigator && (window.navigator as any).connection
    : null

let scriptLoaded = false

const useChat = (
  {
    loadWhenIdle
  }: {
    loadWhenIdle: boolean
  } = { loadWhenIdle: false }
): [State, ({ open }: { open: boolean }) => void] => {
  const {
    provider,
    providerKey,
    idlePeriod,
    state,
    setState,
    appID,
    locale
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

    if (isNaN(idlePeriod)) return

    // deadline.timeRemaining() has an upper limit of 50 milliseconds
    // We want to ensure the page has been idle for a significant period of time
    // Therefore we count consecutive maximum timeRemaining counts and load chat when we reach our threshold
    let elapsedIdlePeriod = 0
    let previousTimeRemaining = 0
    const scheduleLoadChat = (deadline: IdleDeadline) => {
      if (elapsedIdlePeriod > idlePeriod) return loadChat({ open: false })

      const timeRemaining = deadline.timeRemaining()
      // To ensure browser is idle, only accumalte elapsedIdlePeriod when
      // two consecutive maximum timeRemaining's have been observed
      if (previousTimeRemaining > 49 && timeRemaining > 49)
        elapsedIdlePeriod += timeRemaining

      previousTimeRemaining = timeRemaining
      requestIdleCallback?.(scheduleLoadChat)
    }

    if (requestIdleCallback) {
      requestIdleCallback(scheduleLoadChat)
    } else {
      setTimeout(() => loadChat({ open: false }), idlePeriod)
    }
  }, [])

  const chatProvider = Providers[provider]

  const loadChat = useCallback<(args: { open: boolean }) => void>(
    ({ open = true }) => {
      if (!providerKey) {
        //eslint-disable-next-line no-console
        console.error('No api key given to react-live-chat-loader')
        return
      }

      if (!provider) {
        //eslint-disable-next-line no-console
        console.error('No provider given to react-live-chat-loader')
        return
      }

      if (state === 'opening') return
      if (state === 'open') return chatProvider.close()
      if (state === 'complete') return chatProvider.open()

      if (!scriptLoaded) {
        scriptLoaded = true
        chatProvider.load({ providerKey, setState, appID, locale })
      }

      if (open) {
        setState('opening')
        chatProvider.open()
        setState('open')
      }
    },
    []
  )

  return [state, loadChat]
}

export default useChat
