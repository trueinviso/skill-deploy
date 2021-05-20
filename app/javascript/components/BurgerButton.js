import attachEvent from "~/helpers/attachEvent";

const TRIGGER_EVENT_BURGER_BUTTON_SELECTOR = "burger-button-trigger-event"

function burgerButton() {
  const burgerButtons = [
    ...document.querySelectorAll(`[data-${TRIGGER_EVENT_BURGER_BUTTON_SELECTOR}]`)
  ].map(burgerButton => {
    const event = burgerButton.getAttribute(`data-${TRIGGER_EVENT_BURGER_BUTTON_SELECTOR}`)

    if (event) {
      return attachEvent(
          event,
          () => {
            const burgerButton = document.getElementById("burger-button")
            const menuCloseButton = document.getElementById("menu-close-button")
            const mobileSidebarContainer = document.getElementById("mobile-sidebar__container")
            const mobileSidebar = document.getElementById("mobile-sidebar")

            if (mobileSidebarContainer) {
              burgerButton.classList.toggle("hidden")
              menuCloseButton.classList.toggle("hidden")
              mobileSidebarContainer.classList.toggle("hidden")
              mobileSidebar.classList.toggle("active")
            }
          },
          burgerButton
      )
    }
    return () => {}
  })

  return function cleanupForm() {
    burgerButtons.forEach(remove => {
      remove()
    })
  }
}

export default burgerButton
