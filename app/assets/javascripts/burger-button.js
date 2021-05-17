function toggleBurgerButton() {
  const burgerButton = document.getElementById("burger-button")
  const menuCloseButton = document.getElementById("menu-close-button")
  const mobileSidebarContainer = document.getElementById("mobile-sidebar__container")

  if (mobileSidebarContainer) {
    burgerButton.classList.toggle("hidden")
    menuCloseButton.classList.toggle("hidden")
    mobileSidebarContainer.classList.toggle("hidden")
  }
}