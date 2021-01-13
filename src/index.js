import React, { createContext, useEffect, useState } from 'react'

import STATES from './utils/states'
import Providers from './providers'

export const LiveChatLoaderContext = createContext()

export const LiveChatLoaderProvider = ({ provider, children, ...props }) => {
  const [state, setState] = useState(STATES.INITIAL)
  const value = {
    provider,
    state,
    setState,
    ...props,
  }
  const chatProvider = Providers[provider]

  if (!chatProvider) {
    //eslint-disable-next-line no-console
    console.error(
      `Unkown provider given to react-live-chat-loader: ${provider}`
    )
    return
  }
  useEffect(() => {
    // remove chat beacon if there is a new initial state
    if (state !== STATES.INITIAL) {
      setState(STATES.INITIAL);
      chatProvider.destroy();
    }
  }, [value.providerKey]);

  return (
    <LiveChatLoaderContext.Provider value={value}>
      <link href={chatProvider.domain} rel="preconnect" crossOrigin="" />
      {children}
    </LiveChatLoaderContext.Provider>
  )
}

LiveChatLoaderProvider.defaultProps = {
  idlePeriod: 5000,
}

export { default as useChat } from './hooks/useChat'
export { default as useProvider } from './hooks/useProvider'
export { default as Drift } from './components/Drift'
export { default as HelpScout } from './components/HelpScout'
export { default as Intercom } from './components/Intercom'
export { default as Messenger } from './components/Messenger'
