const removeBannerMessage = message => {
  message.parentNode.removeChild(message)
}

const bannerMessage = () => {
  const bannerMessagesContainer = document.getElementById("banner-message")
  const bannerMessage = document.querySelector(".banner-message")

  if (!bannerMessagesContainer)
    return

  const closeMessageButton = bannerMessage.querySelector(".banner-message__close")
  if (closeMessageButton) {
    closeMessageButton.addEventListener("click", () => {
      removeBannerMessage(bannerMessage.parentNode)
    })
  }
}

export default bannerMessage
