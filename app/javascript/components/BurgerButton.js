import attachEvent from "~/helpers/attachEvent";

function burgerButton() {
  const burgerButton = document.getElementById('burger-button')
  const menuCloseButton = document.getElementById("menu-close-button")

  const toggleBurgerMenu = () => {
    const mobileSidebarContainer = document.getElementById("mobile-sidebar__container")
    const mobileSidebar = document.getElementById("mobile-sidebar")

    if (mobileSidebarContainer) {
      burgerButton.classList.toggle("hidden")
      menuCloseButton.classList.toggle("hidden")
      mobileSidebarContainer.classList.toggle("hidden")
      mobileSidebar.classList.toggle("active")
    }
  }

  const removeBurgerButtonEvent =  attachEvent(
    'click',
    toggleBurgerMenu,
    burgerButton
  )

  const removeCloseButtonEvent =  attachEvent(
      'click',
      toggleBurgerMenu,
      menuCloseButton
  )
  
  return function cleanup() {
    removeBurgerButtonEvent();
    removeCloseButtonEvent();
  }
}

export default burgerButton
