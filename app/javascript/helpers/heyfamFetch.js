function csrfTokenHeader() {
  const csrfMetaTag = document.querySelector("meta[name=csrf-token]")

  if (csrfMetaTag) {
    return { "X-CSRF-Token": csrfMetaTag.getAttribute("content") }
  }

  return {}
}

function appendJsonHeader(headers) {
    headers.append("Accept", "application/json")
    headers.append("Content-Type", "application/json")
    return headers
}

function headers() {
  return new Headers({
    ...csrfTokenHeader(),
    "X-User-Token": document
      .getElementsByName("user-token")[0]
      .getAttribute("content"),
    "X-User-Email": document
      .getElementsByName("user-email")[0]
      .getAttribute("content"),
  })
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0 &&
    obj.constructor === Object
}

// caller needs to define promise to deal with
// data returned from server
const heyfamFetch = (url, data, options = {}, type="json") => {
  options.credentials = "same-origin"
  options.headers = headers()
  if(type === "json") appendJsonHeader(options.headers)
  if(!isEmpty(data)) options.body = data

  return fetch(url, options)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
}

export default heyfamFetch
