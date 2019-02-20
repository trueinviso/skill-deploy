import React from 'react'

function ImageButtons({ onChange, deleteFile }) {
  return(
    <div>
      <label
        className="image-file-picker-label create-listing-page__image-file-picker-label"
      >
        <input
          type="file"
          onChange={onChange}
          className="file-picker-input"
          name="file"
          id="profileUploadPicker"
        />
        Upload a photo
      </label>
      <div className="instruction-text create-listing-page__instruction-text">
          Upload your company logo. This photo will
          be publicly visible to all Heyfam users.
       </div>
    </div>
  );
}
/*
      TODO: Conditional delete button, allow for passing of custom css classes
      <div
        className=""
        onClick={deleteFile}
      >
        <label>Delete</label>
      </div> */


export default ImageButtons
