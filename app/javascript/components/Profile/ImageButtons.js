import PropTypes from "prop-types";
import React from "react";

function ImageButtons({ onChange, deleteFile, buttonName }) {
  return (
    <div>
      <label className="image-file-picker-label create-listing-page__image-file-picker-label">
        <input
          type="file"
          onChange={onChange}
          className="file-picker-input"
          name="file"
          id="profileUploadPicker"
        />
        {buttonName}
      </label>
      <div className="instruction-text create-listing-page__instruction-text">
        Upload your company logo. This photo will be publicly visible to all
        Heyfam users.
      </div>
    </div>
  );
}

ImageButtons.propTypes = {
  buttonName: PropTypes.string
};

ImageButtons.defaultProps = {
  buttonName: "Upload a photo"
};

export default ImageButtons;
