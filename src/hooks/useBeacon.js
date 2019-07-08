import { useContext, useCallback } from 'react'

import { ChatBeaconLoaderContext } from '../'
import loadHelpScout from './helpScout'

const useBeacon = () => {
  const { provider, apiKey, state, setState } = useContext(
    ChatBeaconLoaderContext
  )
  const loadBeacon = useCallback(() => {
    if (!apiKey) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-chat-beacon-loader')
      return
    }

    switch (provider) {
      case 'helpScout':
        loadHelpScout({ apiKey, state, setState })
        break
      default:
        //eslint-disable-next-line no-console
        console.error('Unknown provider given to react-chat-beacon-loader')
        break
    }
  })

  return [state, loadBeacon]
}

export default useBeacon
