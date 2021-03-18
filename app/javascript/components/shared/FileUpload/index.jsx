import PropTypes from "prop-types"
import React from "react"
import ImagePreview from "./ImagePreview"
import ImageButtons from "./ImageButtons"
import heyfamFetch from "../../../helpers/heyfamFetch"

const THUMBNAIL_API = "/api/v1/thumbnail"

const CHANGE_BUTTON_NAME = "Change Photo"
const UPLOAD_BUTTON_NAME = "Upload a photo"

class FileUpload extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    resource: PropTypes.shape({
      id: PropTypes.number
    }).isRequired,
    thumbnail: PropTypes.string,
    type: PropTypes.oneOf(["user", "job"]).isRequired,
    upload: PropTypes.bool
  }

  static defaultProps = {
    upload: true
  }

  constructor(props) {
    super(props)
    console.log("Props", props)

    this.state = {
      file: null,
      thumbnail: props.thumbnail,
      isFetching: false,
      buttonName: props.thumbnail.includes("empty_photo_state_icon")
        ? UPLOAD_BUTTON_NAME
        : CHANGE_BUTTON_NAME
    }
  }

  onChange = e => {
    const file = e.target.files[0]
    if (this.props.upload) {
      e.target.value = null // clear file value
      this.fileUpload(file).then(this.fetchComplete)
    } else {
      this.createPreview(file).then(this.fetchComplete)
    }
  }

  fetchComplete = resp => {
    this.setState(
      {
        thumbnail: resp.thumbnail,
        isFetching: false,
        buttonName: CHANGE_BUTTON_NAME
      },
      this.updateNavbarAvatar
    )
  }

  fileUpload = file => {
    if (this.state.isFetching) return

    this.setState({ isFetching: true })
    const options = { method: "PUT" }
    const data = new FormData()
    data.append(this.props.name, file)
    data.append(`record_id`, this.props.resource.id)
    data.append(`model_type`, this.props.type)
    return heyfamFetch(THUMBNAIL_API, data, options, "file")
  }

  deleteFile = () => {
    if (this.state.isFetching || this.emptyPhoto()) return
    this.setState({ isFetching: true })
    const options = { method: "DELETE" }
    heyfamFetch(API, {}, options).then(resp => this.fetchComplete(resp))
  }

  updateNavbarAvatar = () => {
    const userAvatar = document.getElementById("userAvatar")
    if (this.props.type === "user" && userAvatar) {
      userAvatar.src = this.state.thumbnail
    }
  }

  createPreview = file =>
    new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = e => {
        resolve({
          thumbnail: e.target.result
        })
      }
      reader.readAsDataURL(file)
    })

  render() {
    const { thumbnail, buttonName, isFetching } = this.state
    const { name } = this.props
    return (
      <div className="file-upload">
        <ImagePreview
          thumbnail={thumbnail}
          isEmpty={this.state.thumbnail.includes("empty_photo_state_icon")}
          name={name}
        />
        <ImageButtons
          onChange={this.onChange}
          deleteFile={this.deleteFile}
          buttonName={buttonName}
          disabled={isFetching}
          fileName={this.props.name}
        />
      </div>
    )
  }
}

export default FileUpload
