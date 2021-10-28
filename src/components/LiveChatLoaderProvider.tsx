import React, { useState } from 'react'
import * as Providers from '../providers'
import { State, Provider } from '../types'
import { LiveChatLoaderContext } from '../context'

interface LiveChatLoaderProps {
  provider: Provider
  children: JSX.Element
  idlePeriod?: number
  providerKey: string
  appID?: string
  baseUrl?: string
  beforeInit?: () => void
  onReady?: () => void
}

export const LiveChatLoaderProvider = ({
  provider,
  children,
  idlePeriod = 5000,
  baseUrl,
  ...props
}: LiveChatLoaderProps): JSX.Element | null => {
  const chatProvider = Providers[provider]
  const [state, setState] = useState<State>(chatProvider.isOpen() ? 'open' : 'initial')
  const value = {
    provider,
    idlePeriod,
    state,
    setState,
    baseUrl,
    ...props
  }


  if (!chatProvider) {
    //eslint-disable-next-line no-console
    console.error(
      `Unkown provider given to react-live-chat-loader: ${provider}`
    )
    return null
  }

  return (
    <LiveChatLoaderContext.Provider value={value}>
      <link
        href={baseUrl || chatProvider.domain}
        rel="preconnect"
        crossOrigin=""
      />
      {children}
    </LiveChatLoaderContext.Provider>
  )
}

export default LiveChatLoaderProvider
