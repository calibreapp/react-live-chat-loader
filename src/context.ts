import { createContext } from 'react'
import { Provider, State } from 'types'

interface Context {
  provider: Provider
  providerKey: string
  appID: string
  state: State
  setState: (state: State) => void
  locale?: string
  idlePeriod?: number
}

export const LiveChatLoaderContext = createContext<Context>({} as Context)
