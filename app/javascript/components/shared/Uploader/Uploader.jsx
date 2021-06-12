import PropTypes from "prop-types"
import styles from "./styles.module.scss"
import classNames from "classnames"

const CHANGE_BUTTON_NAME = "Change Your Photo"
const UPLOAD_BUTTON_NAME = "Upload your photo"

const Uploader = ({
  name,
  isProcessing,
  onChange,
  changeButtonText,
  uploadButtonText,
  preview,
  filePath
}) => {
  const isThumbnail = preview.includes("empty_photo_state_icon")

  const buttonName = isThumbnail ? uploadButtonText : changeButtonText

  return (
    <div className={styles.uploader}>
      <div className={styles.thumbnailContainer}>
        <i hidden={!isThumbnail} className={styles.icon} />
        <img
          hidden={isThumbnail}
          src={preview}
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
            "-disabled": isProcessing,
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
            value={filePath}
          />
          {buttonName}
        </label>
      </div>
    </div>
  )
}

Uploader.defaultProps = {
  changeButtonText: CHANGE_BUTTON_NAME,
  uploadButtonText: UPLOAD_BUTTON_NAME
}

Uploader.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  upload: PropTypes.bool,
  changeButtonText: PropTypes.string,
  uploadButtonText: PropTypes.string,
  preview: PropTypes.string
}

export default Uploader
