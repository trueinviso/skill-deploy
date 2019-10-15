const sideNav = (function() {
  function setActiveLink() {
    const links = document.querySelectorAll(".side-nav__link");
    for (let i in links) {
      removeActiveClass(links[i]);
      if (links[i].href === window.location.href) {
        addActiveClass(links[i]);
      }
    }
  }

  function removeActiveClass(link) {
    if (link.classList) {
      link.classList.remove("side-nav__link_active");
    }
  }

  function addActiveClass(link) {
    link.classList.add("side-nav__link_active");
  }

  return {
    setActiveLink: setActiveLink
  };
})();

document.addEventListener("turbolinks:load", function() {
  if (document.getElementsByClassName("side-nav").length > 0) {
    sideNav.setActiveLink();
  }
});
