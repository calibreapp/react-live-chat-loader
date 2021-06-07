import { createContext } from 'react'
import { Provider, State } from 'types'

interface Context {
  provider: Provider
  providerKey: string
  state: State
  setState: (state: State) => void
  appID?: string
  locale?: string
  idlePeriod?: number
  baseUrl?: string
}

export const LiveChatLoaderContext = createContext<Context>({} as Context)
