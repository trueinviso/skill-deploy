import React from 'react'

function ProfileImage({ thumbnail, emptyPhoto }) {
  function Image() {
    const className = emptyPhoto() ? "empty-photo-svg" : "profile-picture"
    return <img src={thumbnail} className={className} />
  }

  return(
    <div className="small-2 columns profile-picture__wrapper">
      <div className="profile-picture__empty-wrapper align-center align-vertical">
        <Image />
      </div>
    </div>
  );
}

export default ProfileImage
