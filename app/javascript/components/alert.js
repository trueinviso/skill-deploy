const ALERT_CONTAINER_CLASSNAME = ".alert"
const BANNER_MESSAGE_CONTAINER_CLASSNAME = ".banner-message"
import { fadeOut } from "~/helpers/animation"
import attachEvent from "~/helpers/attachEvent"

const alert = () => {
  function onClick(event) {
    const alertEl = event.currentTarget.parentElement
    fadeOut(alertEl)
  }

  const listeners = [
    ...document.querySelectorAll(`${ALERT_CONTAINER_CLASSNAME} .close`),
    ...document.querySelectorAll(`${BANNER_MESSAGE_CONTAINER_CLASSNAME} .close`),
  ].map(alert => attachEvent("click", onClick, alert))

  return () => {
    listeners.forEach(unListen => unListen())
  }
}

export default alert
