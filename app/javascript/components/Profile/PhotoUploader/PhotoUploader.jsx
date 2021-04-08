import PropTypes from "prop-types"
import { useState } from "react"
import heyfamFetch from "../../../helpers/heyfamFetch"
import styles from "./styles.module.scss"
import classNames from "classnames"

const THUMBNAIL_API = "/api/v1/thumbnail"

const CHANGE_BUTTON_NAME = "Change Your Photo"
const UPLOAD_BUTTON_NAME = "Upload your photo"

const updateNavbarAvatar = thumbnail => {
  const userAvatar = document.getElementById("userAvatar")
  if (userAvatar) {
    userAvatar.src = thumbnail
  }
}

const PhotoUploader = ({ name, thumbnail, record, type }) => {
  const [isProcessing, setProcessing] = useState(false)
  const [preview, setPreview] = useState(thumbnail)

  const fileUpload = file => {
    const options = { method: "PUT" }
    const data = new FormData()
    data.append(name, file)
    data.append(`record_id`, record.id)
    data.append(`model_type`, type)
    return heyfamFetch(THUMBNAIL_API, data, options, "file")
  }

  const onChange = async e => {
    setProcessing(true)
    const file = e.target.files[0]
    e.target.value = null // clear file value
    const { thumbnail } = await fileUpload(file)
    setPreview(thumbnail)
    updateNavbarAvatar(thumbnail)
  }

  const isThumbnail = preview.includes("empty_photo_state_icon")

  const buttonName = isThumbnail ? UPLOAD_BUTTON_NAME : CHANGE_BUTTON_NAME

  return (
    <div className={styles.photoUploader}>
      <div className={styles.thumbnailContainer}>
        <i hidden={!isThumbnail} className={styles.icon} />
        <img
          hidden={isThumbnail}
          src={thumbnail}
          className={styles.thumbnail}
          alt="uploaded image"
        />
      </div>
      <div>
        <label
          role="button"
          className={classNames({
            button: true,
            "-outline": true,
            "-diasabled": isProcessing,
            [styles.button]: true
          })}
        >
          <input
            type="file"
            onChange={onChange}
            className={styles.input}
            name={name}
            id="profileUploadPicker"
            accept="image/x-png,image/gif,image/jpeg"
            disabled={isProcessing}
          />
          {buttonName}
        </label>
      </div>
    </div>
  )
}

PhotoUploader.propTypes = {
  name: PropTypes.string.isRequired,
  record: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  thumbnail: PropTypes.string,
  type: PropTypes.oneOf(["user", "job"]).isRequired,
  upload: PropTypes.bool
}

export default PhotoUploader
