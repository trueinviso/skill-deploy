import PropTypes from "prop-types"
import { useState } from "react"
import heyfamFetch from "../../../helpers/heyfamFetch"
import Uploader from "~/components/shared/Uploader"

const THUMBNAIL_API = "/api/v1/thumbnail"

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

  return (
    <Uploader
      name={name}
      onChange={onChange}
      preview={preview}
      isProcessing={isProcessing}
    />
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
