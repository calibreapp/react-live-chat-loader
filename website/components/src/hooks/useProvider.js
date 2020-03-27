import { useContext } from 'react'

import { LiveChatLoaderContext } from '../'

const useProvider = () => {
  const { provider, providerKey } = useContext(LiveChatLoaderContext)

  return { provider, providerKey }
}

export default useProvider
