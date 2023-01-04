import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://wchat.freshchat.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    chatwootSettings: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    $freshchat: any
    freshchatSDK: {
      run: (options: {
        token: string
        host: string
        widgetUuid: string
      }) => void
    }
  }
}

/* eslint-disable */
const loadScript = (onload: () => void): boolean => {
  if (window.$freshchat) return false
  ;(function(d, t) {
    var script: HTMLScriptElement = d.createElement('script')
    var fisrtScript = d.getElementsByTagName('script')[0]
    script.src = 'https://wchat.freshchat.com/js/widget.js'
    fisrtScript.parentNode?.insertBefore(script, fisrtScript)
    script.onload = onload
  })(document)
  return true
}
/* eslint-enable */

const load = ({
  providerKey,
  appID,
  setState,
  baseUrl,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  providerKey: string
  appID?: string
  setState: (state: State) => void
  baseUrl?: string
  beforeInit?: () => void
  onReady?: () => void
}): void => {
    baseUrl = baseUrl || domain
    const loaded = loadScript(function() {
        beforeInit()

        setTimeout(() => {
            setState('complete')
            onReady()
        }, 1000)

        console.log('INIT FRESHCHAT SDK')

        window.freshchatSDK.run({
            token: providerKey,
            host: baseUrl as string,
            widgetUuid: appID as string
        })
    })

  // Continue as long as userlike hasn’t already been initialised.
    if (loaded) {
    waitForLoad(
        () => !!window.$freshchat?.hasLoaded,
        // Allow chatwoot to complete loading before removing fake widget
        () => setTimeout(() => {
            console.log('COMPLETE')
            setState('complete')
        }, 2000)
    )
    }
}

const open = (): void => {
  console.log("INIT OPEN---------------------------------------")
}

export default {
  domain,
  load,
  open
}
