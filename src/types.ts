export enum ClassNames {
  container = 'live-chat-loader-placeholder'
}
export interface ProviderProps {
  containerClass?: string
}

export type State = 'initial' | 'open' | 'complete'

export type Provider =
  | 'helpScout'
  | 'intercom'
  | 'messenger'
  | 'drift'
  | 'userlike'
  | 'chatwoot'
  | 'front'
  | 'hubSpot'
  | 'adobeDynamicChat'
