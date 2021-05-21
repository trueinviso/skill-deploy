import attachEvent from "~/helpers/attachEvent"

const removeBannerMessage = message => {
  message.parentNode.removeChild(message)
}

const bannerMessage = () => {
  const bannerMessagesContainer = document.getElementById("banner-message")
  const bannerMessage = document.getElementById("banner-message")

  if (!bannerMessagesContainer || !bannerMessage)
    return

  const closeMessageButton = document.getElementById("banner-message__close")

  if (!closeMessageButton)
    return

  return attachEvent('click', () => {
      removeBannerMessage(bannerMessage)
    },
    closeMessageButton)
}

export default bannerMessage
