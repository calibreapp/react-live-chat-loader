const requestIdleCallback =
  typeof window !== 'undefined' ? window.requestIdleCallback : null

const waitForLoad = (check: () => boolean, callback: () => void): void => {
  let elapsedTime = 0
  // If the provider fails to load we don't want to keep checking continuously
  // therefore we set a max duration we're willing to wait before executing the callback
  const maxWaitDuration = 10000
  // If the browser does not support requestIdleCallback we'll wait the fallback duration
  // before executing the callback
  const fallbackDuration = 1000

  const scheduleLoad = (deadline: IdleDeadline) => {
    if (check() || elapsedTime >= maxWaitDuration) {
      callback()
      return
    }

    elapsedTime += deadline.timeRemaining()
    requestIdleCallback?.(scheduleLoad)
  }

  if (requestIdleCallback) {
    requestIdleCallback(scheduleLoad)
  } else {
    setTimeout(callback, fallbackDuration)
  }
}

export default waitForLoad
