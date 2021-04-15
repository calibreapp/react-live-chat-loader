import React, { useState } from 'react'
import Providers from 'providers'
import { State, LiveChatLoaderContext, Provider } from 'types'

export const LiveChatLoaderProvider = ({
  provider,
  children,
  idlePeriod = 5000,
  ...props
}: {
  provider: Provider
  children: JSX.Element
  idlePeriod?: number
  providerKey: string
  appID: string
}): JSX.Element | null => {
  const [state, setState] = useState<State>('initial')
  const value = {
    provider,
    idlePeriod,
    state,
    setState,
    ...props
  }

  const chatProvider = Providers[provider]

  if (!chatProvider) {
    //eslint-disable-next-line no-console
    console.error(
      `Unkown provider given to react-live-chat-loader: ${provider}`
    )
    return null
  }

  return (
    <LiveChatLoaderContext.Provider value={value}>
      <link href={chatProvider.domain} rel="preconnect" crossOrigin="" />
      {children}
    </LiveChatLoaderContext.Provider>
  )
}

export default LiveChatLoaderProvider
