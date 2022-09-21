import { createContext } from 'react'

import { Provider, State } from './types'

interface Context {
  provider: Provider
  providerKey: Provider
  state: State
  setState: (state: State) => void
  appID?: string
  locale?: string
  idlePeriod?: number
  baseUrl?: string
  beforeInit?: () => void
  onReady?: () => void
}

export const LiveChatLoaderContext = createContext<Context>({} as Context)
