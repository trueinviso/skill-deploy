let dropdown = (function() {
  function toggle() {
    const menu = event
      .target
      .parentElement
      .getElementsByClassName("dropdown__content")[0];

    const selectBox = event.target.parentElement;

    if(shouldToggleDropdown(menu)) {
      selectBox.classList.toggle("dropdown_active");
      menu.classList.toggle("dropdown__content_active");
    }
  }

  function shouldToggleDropdown(menu) {
    return !menu
      .classList
      .value
      .includes("dropdown__content_inline-buttons") ||
      window.matchMedia("(max-width: 736px)").matches;
  }

  return {
    toggle: toggle
  };
}());
