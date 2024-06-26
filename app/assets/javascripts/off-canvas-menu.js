;(function (w, d) {
  d.addEventListener("turbolinks:load", () => {
    const menuToggler = d.getElementById("menuToggler")
    const closeMenuBtn = d.getElementById("closeMenu")
    const menu = document.getElementById("offcanvas")

    function handleClickOutside(event) {
      const isOutside = event.target !== menu && !menu.contains(event.target)
      if (isOutside) {
        closeNav()
      }
    }

    function openNav(e) {
      e.stopPropagation()
      e.preventDefault()
      menu.style.width = "250px"
      w.addEventListener("click", handleClickOutside)
    }

    function closeNav() {
      menu.style.width = "0"
      w.removeEventListener("click", handleClickOutside)
    }

    if (menuToggler) {
      menuToggler.addEventListener("click", openNav)
    }

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", closeNav)
    }
  })
})(window, document)
