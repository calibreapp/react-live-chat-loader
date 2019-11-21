import React, { createContext, useState } from 'react'

import STATES from './utils/states'
import Providers from './providers'

export const LiveChatLoaderContext = createContext()

export const LiveChatLoaderProvider = ({
  providerKey,
  provider,
  idlePeriod = 3000,
  children
}) => {
  const [state, setState] = useState(STATES.INITIAL)
  const value = {
    provider,
    providerKey,
    idlePeriod,
    state,
    setState
  }

  const chatProvider = Providers[provider]

  if (!chatProvider) {
    //eslint-disable-next-line no-console
    console.error(
      `Unkown provider given to react-live-chat-loader: ${provider}`
    )
    return
  }

  return (
    <LiveChatLoaderContext.Provider value={value}>
      <link href={chatProvider.domain} rel="preconnect" crossOrigin="" />
      {children}
    </LiveChatLoaderContext.Provider>
  )
}

export { default as useChat } from './hooks/useChat'
export { default as HelpScout } from './components/HelpScout'
export { default as Intercom } from './components/Intercom'
