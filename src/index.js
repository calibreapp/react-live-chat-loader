import React, { createContext, useState } from 'react'

import STATES from './utils/states'

export const ChatBeaconLoaderContext = createContext()

export const ChatBeaconLoaderProvider = ({
  providerKey,
  provider,
  children
}) => {
  const [state, setState] = useState(STATES.INITIAL)
  const value = {
    provider,
    providerKey,
    state,
    setState
  }

  return (
    <ChatBeaconLoaderContext.Provider value={value}>
      {children}
    </ChatBeaconLoaderContext.Provider>
  )
}

export { default as useBeacon } from './hooks/useBeacon'
export { default as HelpScout } from './components/HelpScout'
export { default as Intercom } from './components/Intercom'
