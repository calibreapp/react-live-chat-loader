import { State } from 'types'

const domain = 'https://app.chatwoot.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    chatwootSettings: any
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    setTimeout(() => setState('complete'), 1000)
    window.chatwootSDK.run({
      websiteToken: providerKey,
      baseUrl: domain
    })
  })
}

const open = () => window.$chatwoot && window.$chatwoot.toggle()

const close = () => window.$chatwoot && window.$chatwoot.toggle()

export default {
  domain,
  load,
  open,
  close
}
