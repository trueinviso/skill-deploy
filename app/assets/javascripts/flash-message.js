const removeFlashMessage = message => {
  message.parentNode.removeChild(message)
}

const flashMessage = () => {
  const flashMessagesContainer = document.getElementById("flash-messages")
  const flashMessage = document.querySelector(".flash-message")

  if (!flashMessagesContainer)
    return

  const closeMessageButton = flashMessage.querySelector(".flash-message__close")
  if (closeMessageButton) {
    closeMessageButton.addEventListener("click", () => {
      removeFlashMessage(flashMessage.parentNode)
    })
  }
}

flashMessage()

console.log('sldksdffjskdlfj')