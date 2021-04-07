import { createContext } from 'react'

interface IProviderProps {
  providerKey: Provider | undefined
  idlePeriod?: number
  appID: string
}

export interface Context extends IProviderProps {
  provider: Provider
  state: State
  setState: (state: State) => void
  locale?: string
}

interface IHelpScoutProviderProps extends IProviderProps {
  provider: 'helpScout'
}

interface IIntercomProviderProps extends IProviderProps {
  provider: 'intercom'
}

interface IMessengerProviderProps extends IProviderProps {
  provider: 'messenger'
  appID: string
  locale: string
}

interface IDriftProviderProps extends IProviderProps {
  provider: 'drift'
}

interface IUserlikeProviderProps extends IProviderProps {
  provider: 'userlike'
}

export interface IMessengerProps {
  themeColor?: string
  loggedInGreeting?: string
  loggedOutGreeting?: string
  show?: string
  hide?: string
  fade?: string
  greetingDialogDelay?: string
  greetingDialogDisplay?: string
  color?: string
}

export type HelpScoutIcon =
  | 'message'
  | 'antenna'
  | 'search'
  | 'question'
  | 'beacon'
  | 'close'

export interface IHelpScoutProps {
  color?: string
  icon?: HelpScoutIcon
  zIndex: string
  horizontalPosition: 'left' | 'right'
}

export interface IIntercomProps {
  color?: string
}

export interface IUserLikeProps {
  color?: string
  backgroundColor?: string
  position?: string
  vOffset?: string
  hOffset?: string
  style?: string
}

export interface IDriftProps {
  color?: string
  icon?: 'A' | 'B' | 'C' | 'D'
}

export type State = 'initial' | 'opening' | 'open' | 'complete'
export type Provider =
  | 'helpScout'
  | 'intercom'
  | 'messenger'
  | 'drift'
  | 'userlike'

export interface IMessengerLoader {
  appID: string
  locale?: string
  setState: (state: State) => void
}

export interface IDriftLoader {
  providerKey: string
  setState: (state: State) => void
}

export interface IIntercomLoader {
  providerKey: string
  setState: (state: State) => void
}

export interface IHelpScoutLoader {
  providerKey: string
  setState: (state: State) => void
}

export interface IUserLikeLoader {
  providerKey: string
  setState: (state: State) => void
}

export type ProviderProps =
  | IHelpScoutProviderProps
  | IIntercomProviderProps
  | IDriftProviderProps
  | IMessengerProviderProps
  | IUserlikeProviderProps

export const LiveChatLoaderContext = createContext<Context>({} as Context)
