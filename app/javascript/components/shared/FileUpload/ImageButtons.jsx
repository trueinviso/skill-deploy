import PropTypes from "prop-types"
import React from "react"

function ImageButtons({
  onChange,
  buttonName,
  isFetching,
  metaText,
  fileName
}) {
  return (
    <div>
      <label className="image-file-picker-label create-listing-page__image-file-picker-label">
        <input
          type="file"
          onChange={onChange}
          className="file-picker-input"
          name={fileName}
          id="profileUploadPicker"
          accept="image/x-png,image/gif,image/jpeg"
          disabled={isFetching}
        />
        {buttonName}
      </label>
      <div className="instruction-text create-listing-page__instruction-text">
        {metaText}
      </div>
    </div>
  )
}

ImageButtons.propTypes = {
  buttonName: PropTypes.string,
  metaText: PropTypes.string,
  fileName: PropTypes.string.isRequired
}

ImageButtons.defaultProps = {
  buttonName: "Upload a photo",
  metaText: `Upload your company logo. This photo will be publicly visible to all
  Heyfam users.`
}

export default ImageButtons
