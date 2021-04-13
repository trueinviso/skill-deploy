export function fadeOut(el) {
  el.style.opacity = 1

  ;(function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none"
      el.remove()
    } else {
      requestAnimationFrame(fade)
    }
  })()
}

export function fadeIn(el, display = "block") {
  el.style.opacity = 0
  el.style.display = display

  ;(function fade() {
    var val = parseFloat(el.style.opacity)
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val
      requestAnimationFrame(fade)
    }
  })()
}
