import attachEvent from "~/helpers/attachEvent";

function backButton() {
  const backButton = document.getElementById('back-button')

  const handleBackButton = () => {
    const pageMainArea = document.getElementsByClassName("page__main")[0]
    const sidebar = document.getElementById("sidebar")
    const navRight = document.getElementsByClassName("nav__right")[0]
    const navLogo = document.getElementsByClassName("nav__logo")[0]

    if (pageMainArea) {
      navLogo.classList.toggle('home')
      navRight.classList.toggle('home')
      sidebar.classList.toggle('active')
      pageMainArea.classList.toggle('disabled')
    }
  }

  const removeBackButtonEvent =  attachEvent(
    'click',
    handleBackButton,
    backButton
  )
  
  return function cleanup() {
    removeBackButtonEvent()
  }
}

export default backButton
