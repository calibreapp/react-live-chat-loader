import { State } from 'types'

const domain = 'https://app.chatwoot.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    chatwootSettings: any
    $chatwoot: any
    chatwootSDK: {
      run: (options: { websiteToken: string; baseUrl: string }) => void
    }
  }
}

/* eslint-disable */
const loadScript = (onload: () => void) => {
  if (window.$chatwoot) return
  ;(function(d, t) {
    var script: HTMLScriptElement = d.createElement('script')
    var fisrtScript = d.getElementsByTagName('script')[0]
    script.src = domain + '/packs/js/sdk.js'
    fisrtScript.parentNode?.insertBefore(script, fisrtScript)
    script.onload = onload
  })(document)
}
/* eslint:enable */

const load = ({
  providerKey,
  setState
}: {
  providerKey: string
  setState: (state: State) => void
}) => {
  loadScript(function() {
    window.chatwootSDK.run({
      websiteToken: providerKey,
      baseUrl: domain
    })
  })
  setTimeout(() => setState('complete'), 2000)
}

const open = () => window.$chatwoot.toggle()

const close = () => window.$chatwoot.toggle()

export default {
  domain,
  load,
  open,
  close
}
