import PropTypes from "prop-types"
import { useState } from "react"
import Uploader from "~/components/shared/Uploader"


const LOGO_FILE_SIZE_LIMIT = 1024 * 1024

const JobLogoUploader = ({ name, thumbnail }) => {
  const [isProcessing, setProcessing] = useState(false)
  const [preview, setPreview] = useState(thumbnail)
  const [isOverLimit, setIsOverLimit] = useState(false)
  const [filePath, setFilePath] = useState('')

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
    if (file.size > LOGO_FILE_SIZE_LIMIT) {
      setIsOverLimit(true)
      setFilePath('')
    }
    else {
      setIsOverLimit(false)
      setFilePath(e.target.value)
      const { thumbnail } = await createPreview(file)
      setPreview(thumbnail)
    }
    setProcessing(false)
  }

  return (
    <>
      <Uploader
        preview={preview}
        changeButtonText="Change your logo"
        uploadButtonText="Upload your logo"
        thumbnail={thumbnail}
        onChange={onChange}
        isProcessing={isProcessing}
        name={name}
        filePath={filePath}
      />
      {
        isOverLimit && <div class="error-message">The file size must be less than 1MB.</div>
      }
    </>
  )
}

JobLogoUploader.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string
}

export default JobLogoUploader
