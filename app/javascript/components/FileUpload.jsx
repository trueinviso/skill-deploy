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
      thumbnail: props.thumbnail,
      isFetching: false
    }
    this.onChange = this.onChange.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
    this.emptyPhoto = this.emptyPhoto.bind(this)
  }

  onChange(e) {
    const file = e.target.files[0]
    document.getElementById("profileUploadPicker").value = ""
    this.fileUpload(file)
      .then(resp => this.fetchComplete(resp))
  }

  fetchComplete(resp) {
    this.setState({
      thumbnail: resp.thumbnail,
      isFetching: false
    })
  }

  fileUpload(file){
    if(this.state.isFetching) return

    this.setState({ isFetching: true })
    const options = { method: "PUT" }
    const data = new FormData()
    data.append('user[thumbnail_attributes][file]', file)
    return heyfamFetch(API, data, options, "file")
  }

  emptyPhoto() {
    return this.state.thumbnail.includes("empty_photo_state_icon")
  }

  deleteFile() {
    if(this.state.isFetching || this.emptyPhoto()) return
    this.setState({ isFetching: true })
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
