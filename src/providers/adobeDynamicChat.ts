import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://assets.adoberesources.net'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    AdobeDX: any
  }
}

/* eslint-disable */
const loadScript = (srcUrl: string): boolean => {
  if (window.AdobeDX) return false
  ;(function(d, t) {
    var script: HTMLScriptElement = d.createElement('script')
    var firstScript = d.getElementsByTagName('script')[0]
    script.src = srcUrl
    firstScript.parentNode?.insertBefore(script, firstScript)
  })(document)
  return true
}
/* eslint-enable */

const load = ({
  setState,
  baseUrl = domain,
  providerKey,
  instanceId,
  env,
  geo,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  setState: (state: State) => void
  baseUrl?: string
  providerKey?: string
  instanceId?: string
  env?: string
  geo?: string
  beforeInit?: () => void
  onReady?: () => void
}): void => {
  const srcUrl = `${baseUrl}/loader.js?orgId=${providerKey}&instanceId=${instanceId}&env=${env}&&geo=${geo}`
  const loaded = loadScript(srcUrl)

  // Continue as long as Adobe hasn’t already been initialised.
  if (loaded) {
    beforeInit()
    waitForLoad(
      () => window.AdobeDX,
      // Allow Adobe to complete loading before removing fake widget
      () =>
        setTimeout(() => {
          setState('complete')
          onReady()
        }, 2000)
    )
  }
}

const open = (): void =>
  window.addEventListener('adobedx.conversations.ready', () => {
    // There is no way to open the chat programmatically
  });

export default {
  domain,
  load,
  open
}
