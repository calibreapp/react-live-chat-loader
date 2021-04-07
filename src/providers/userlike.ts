import { IUserLikeLoader, State } from 'types'

const domain = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com'
const maxAttempts = 10
let currentLoadAttempt = 0
let currentOpenAttempt = 0

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    userlike: {
      userlikeStartChat: () => void
      userlikeQuitChat: () => void
    }
  }
}

/* eslint-disable */
const loadScript = (providerKey: string) => {
  if (window.userlike) return

  var d = document
  function l() {
    var s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `${domain}/${providerKey}.js`
    var x = d.getElementsByTagName('script')[0]
    x.parentNode?.insertBefore(s, x)
  }
  l()
}
/* eslint-enable */

const attemptLoad = (setState: (state: State) => void) => {
  if (currentLoadAttempt === maxAttempts) {
    return
  }

  if (!window.userlike) {
    currentLoadAttempt += 1
    setTimeout(() => attemptLoad(setState), 1000) // Try every second
    return
  }

  setTimeout(() => setState('complete'), 2000)
}

const load = ({ providerKey, setState }: IUserLikeLoader): void => {
  loadScript(providerKey)
  attemptLoad(setState)
}

const open = (): void => {
  if (currentOpenAttempt === maxAttempts) {
    return
  }

  if (!window.userlike) {
    currentOpenAttempt += 1
    setTimeout(open, 1000) // Try every second
    return
  }

  window.userlike.userlikeStartChat()
}

const close = (): void => window.userlike && window.userlike.userlikeQuitChat()

export default {
  domain,
  load,
  open,
  close
}
