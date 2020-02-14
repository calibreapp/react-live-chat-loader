import React, { createContext, useState } from 'react'

import STATES from './utils/states'
import Providers from './providers'

export const LiveChatLoaderContext = createContext()

export const LiveChatLoaderProvider = props => {
  const [state, setState] = useState(STATES.INITIAL)
  const { provider, children } = props;
  const value = {state, setState, ...props }

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

LiveChatLoaderProvider.defaultProps = {
  idlePeriod: 5000
}

export { default as useChat } from './hooks/useChat'
export { default as HelpScout } from './components/HelpScout'
export { default as Intercom } from './components/Intercom'
export { default as Messenger } from './components/Messenger'
