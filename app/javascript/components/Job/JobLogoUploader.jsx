import PropTypes from "prop-types"
import { useState } from "react"
import Uploader from "~/components/shared/Uploader"

const JobLogoUploader = ({ name, thumbnail }) => {
  const [isProcessing, setProcessing] = useState(false)
  const [preview, setPreview] = useState(thumbnail)

  const createPreview = file =>
    new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = e => {
        resolve({
          thumbnail: e.target.result
        })
      }
      reader.readAsDataURL(file)
    })

  const onChange = async e => {
    setProcessing(true)
    const file = e.target.files[0]
    const { thumbnail } = await createPreview(file)
    setPreview(thumbnail)
    setProcessing(false)
  }

  return (
    <Uploader
      preview={preview}
      changeButtonText="Change your logo"
      uploadButtonText="Upload your logo"
      thumbnail={thumbnail}
      onChange={onChange}
      isProcessing={isProcessing}
      name={name}
    />
  )
}

JobLogoUploader.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string
}

export default JobLogoUploader
