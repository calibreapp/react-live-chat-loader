import { useContext, useCallback } from 'react'

import { ChatBeaconLoaderContext } from '../'
import STATES from '../utils/states'
import Providers from '../providers'

const useBeacon = () => {
  const { provider, apiKey, state, setState } = useContext(
    ChatBeaconLoaderContext
  )
  const loadBeacon = useCallback(({ toggle = false }) => {
    if (!apiKey) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-chat-beacon-loader')
      return
    }

    const beaconProvider = Providers[provider]
    if (!provider) {
      //eslint-disable-next-line no-console
      console.error('No api key given to react-chat-beacon-loader')
      return
    }

    if (state === STATES.LOADING) return
    if (state === STATES.LOADED && toggle) return beaconProvider.close()

    if (state === STATES.INITIAL) {
      setState(STATES.LOADING)
      beaconProvider.load({ apiKey, state, setState })
      setState(STATES.LOADED)
      setTimeout(() => setState(STATES.COMPLETE), 2000)
    } else {
      beaconProvider.open()
    }
  })

  return [state, loadBeacon]
}

export default useBeacon
