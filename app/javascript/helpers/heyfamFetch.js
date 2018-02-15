
function csrfTokenHeader() {
  const csrfMetaTag = document.querySelector("meta[name=csrf-token]")

  if (csrfMetaTag) {
    return { "X-CSRF-Token": csrfMetaTag.getAttribute("content") }
  }

  return {}
}

function headers() {
  return new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    ...csrfTokenHeader(),
    "X-User-Token": document
      .getElementsByName("user-token")[0]
      .getAttribute("content"),
    "X-User-Email": document
      .getElementsByName("user-email")[0]
      .getAttribute("content"),
  })
}

// caller needs to define promise to deal with
// data returned from server
const heyfamFetch = (url, data, options = {}) => {
  options.credentials = "same-origin"
  options.headers = headers()

  return fetch(url, options)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
}

export default heyfamFetch
