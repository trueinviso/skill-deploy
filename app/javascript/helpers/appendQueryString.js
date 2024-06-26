function appendQueryString(url, params) {
  if (params && params.constructor === Object) {
    const queryString = Object.keys(params)
      .map(key => {
        if (!params[key]) return
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      })
      .join("&")
    return `${url}?${queryString}`
  }
  return url
}
export default appendQueryString
