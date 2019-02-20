function toggleDropdown() {
  let menu = event.target.parentElement.getElementsByClassName("dropdown__content")[0];

  menu.style.display = menu.style.display !== "block" ? "block" : "none";
}
