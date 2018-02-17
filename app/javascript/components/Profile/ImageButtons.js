import React from 'react'

function ImageButtons({ onChange, deleteFile }) {
  return(
    <div className="profile-picture__buttons-wrapper">
      <div className="small-3 columns profile-picture__upload-button">
        <input type="file" onChange={onChange} className="inputfile" name="file" />
        <label>Upload photo</label>
      </div>
      <div
        className="small-2 columns profile-picture__delete-button left"
        onClick={deleteFile}
      >
        <label>Delete</label>
      </div>
    </div>
  );
}


export default ImageButtons
