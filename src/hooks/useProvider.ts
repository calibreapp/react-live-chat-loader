import { useContext } from 'react'
import { LiveChatLoaderContext, Provider } from 'types'

const useProvider = (): {
  provider: Provider
  providerKey: string
} => {
  const { provider, providerKey } = useContext(LiveChatLoaderContext)

  return { provider, providerKey }
}

export default useProvider
