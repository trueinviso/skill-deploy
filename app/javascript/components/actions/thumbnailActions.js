import { constants } from './constants'
import heyfamFetch from '../../helpers/heyfamFetch'
import { fetchUser } from './userActions'

const API = "/api/v1/thumbnail"

function uploadThumbnail(event) {
  return (dispatch, getState) => {
    if(!fetching(getState())) {
      return dispatch(upload(getState(), event))
    }
  }
}

function deleteThumbnail() {
  return (dispatch, getState) => {
    if(!fetching(getState())) {
      return dispatch(destroyThumbnail(getState()))
    }
  }
}

function fetching(state) {
  if(state.thumbnail.isFetching) {
    return true
  } else {
    return false
  }
}

function destroyThumbnail(state) {
  return function(dispatch) {
    dispatch(destroyingThumbnail())
    const options = { method: "DELETE" }

    return heyfamFetch(API, {}, options)
      .then(json => dispatch(receiveThumbnail(json)))
      .then(json => dispatch(fetchUser()))

  }
}

function upload(state, event) {
  return function(dispatch) {
    dispatch(uploadingThumbnail())
    const file = event.target.files[0]
    document.getElementById("profileUploadPicker").value = ""

    const options = { method: "PUT" }
    const data = new FormData()

    data.append('user[thumbnail_attributes][file]', file)

    return heyfamFetch(API, data, options, "file")
      .then(json => dispatch(receiveThumbnail(json)))
      .then(json => dispatch(fetchUser()))
  }
}

function uploadingThumbnail() {
  return {
    type: constants.UPLOADING_THUMBNAIL
  }
}

function destroyingThumbnail() {
  return {
    type: constants.DESTROYING_THUMBNAIL
  }
}

function receiveThumbnail(json) {
  return {
    type: constants.RECEIVE_THUMBNAIL,
    thumbnail: json.thumbnail,
    receivedAt: Date.now()
  }
}

export {
  uploadThumbnail,
  deleteThumbnail
}
