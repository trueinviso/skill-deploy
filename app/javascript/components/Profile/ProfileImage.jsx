import React from 'react'

function ProfileImage({ thumbnail, emptyPhoto }) {
  function Image() {
    const className = emptyPhoto() ? "profile-picture__empty" : "profile-picture"
    return <img src={thumbnail} className={className} />
  }

  return(
    <div className="profile-picture__wrapper">
      <div className="profile-picture__empty-wrapper">
        <Image />
      </div>
    </div>
  );
}

export default ProfileImage
