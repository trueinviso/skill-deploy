const removeFlashMessage = message => {
  message.parentNode.removeChild(message)
}

const flashMessages = () => {
  const flashMessagesContainer = document.getElementById("flash-messages")
  const flashMessages = document.querySelectorAll(".flash-message")

  if (!flashMessagesContainer) return
  ;[...flashMessages].map(message => {
    const closeMessageButton = message.querySelector(".flash-message__close")
    if (closeMessageButton) {
      closeMessageButton.addEventListener("click", () => {
        removeFlashMessage(message)
      })
    }
  })
}

export default flashMessages
