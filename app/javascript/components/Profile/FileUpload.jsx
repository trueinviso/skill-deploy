import React from 'react'
import ProfileImage from './ProfileImage'
import ImageButtons from './ImageButtons'
import heyfamFetch from '../../helpers/heyfamFetch'

function FileUpload({ emptyPhoto, uploadPhoto, thumbnail, deletePhoto }) {
  return (
    <div id="profile-picture__uploader" className="row">
      <div id="profile-picture">
        <ProfileImage
          thumbnail={thumbnail}
          emptyPhoto={emptyPhoto}
        />
        <ImageButtons
          onChange={uploadPhoto}
          deleteFile={deletePhoto}
        />
      </div>
    </div>
  )
}

export { FileUpload }
