import attachEvent from "~/helpers/attachEvent";

function burgerButton() {
  const burgerButton = document.getElementById('burger-button')

  const toggleBurgerMenu = () => {
    const mobileSidebarContainer = document.getElementById("mobile-sidebar__container")
    const mobileSidebar = document.getElementById("mobile-sidebar")

    if (mobileSidebarContainer) {
      mobileSidebarContainer.classList.toggle("hidden")
      mobileSidebar.classList.toggle("active")
      burgerButton.classList.toggle('burger-button')
      burgerButton.classList.toggle('burger-button__close')
    }
  }

  const removeBurgerButtonEvent =  attachEvent(
    'click',
    toggleBurgerMenu,
    burgerButton
  )
  
  return function cleanup() {
    removeBurgerButtonEvent()
  }
}

export default burgerButton
