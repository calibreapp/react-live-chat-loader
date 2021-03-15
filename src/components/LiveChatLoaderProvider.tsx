import React, { useState } from 'react'
import Providers from 'providers'
import { ProviderProps, State, LiveChatLoaderContext } from 'types'

export const LiveChatLoaderProvider: React.FC<ProviderProps> = ({
  provider,
  children,
  idlePeriod = 5000,
  ...props
}) => {
  const [state, setState] = useState<State>('initial')
  const value = {
    provider,
    state,
    setState,
    idlePeriod,
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
