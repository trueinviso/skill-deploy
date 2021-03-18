import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const ImagePreview = ({ thumbnail, isEmpty }) => {
  return (
    <div
      className={classNames("image create-listing-page__image", {
        "image--no-border": isEmpty === false
      })}
    >
      <img
        src={thumbnail}
        className={classNames([isEmpty ? "image_empty" : "image__present"])}
        alt="uploaded image"
      />
    </div>
  )
}

ImagePreview.propTypes = {
  thumbnail: PropTypes.string,
  isEmpty: PropTypes.bool
}

export default ImagePreview
