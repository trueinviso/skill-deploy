import React from 'react'
import ProfileImage from './Profile/ProfileImage'
import ImageButtons from './Profile/ImageButtons'
import heyfamFetch from '../helpers/heyfamFetch'

const API = "/api/v1/thumbnail"

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      file: null,
      thumbnail: props.thumbnail
    }
    this.onChange = this.onChange.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
    this.emptyPhoto = this.emptyPhoto.bind(this)
  }

  onChange(e) {
    const file = e.target.files[0]
    this.fileUpload(file)
      .then(resp => this.fetchComplete(resp))
  }

  fetchComplete(resp) {
    this.setState({ thumbnail: resp.thumbnail })
  }

  fileUpload(file){
    const options = { method: "PUT" }
    const url = `${API}`
    const data = new FormData()
    data.append('user[thumbnail_attributes][file]', file)
    return heyfamFetch(url, data, options, "file")
  }

  emptyPhoto() {
    return this.state.thumbnail.includes("empty_photo_state_icon")
  }

  deleteFile() {
    if(this.emptyPhoto()) return
    const options = { method: "DELETE" }
    heyfamFetch(API, {}, options)
      .then(resp => this.fetchComplete(resp))
  }

  render() {
    return (
      <div id="profile-picture__uploader" className="row">
        <div id="profile-picture">
          <ProfileImage
            thumbnail={this.state.thumbnail}
            emptyPhoto={this.emptyPhoto}
          />
          <ImageButtons
            onChange={this.onChange}
            deleteFile={this.deleteFile}
          />
        </div>
      </div>
    )
  }
}

export default FileUpload
