const attachEvent = (event, callback, node = window) => {
    node.addEventListener(event, callback)
    return () => node.removeEventListener(event, callback)
  }
  
  export const attachEventWithMultipleCallback = (
    event,
    arrayOfCallback,
    node = window
  ) => {
    const listeners = arrayOfCallback.map(callback =>
      attachEvent(event, callback, node)
    )
  
    return () => {
      listeners.forEach(remove => remove())
    }
  }
  
  export default attachEvent
  