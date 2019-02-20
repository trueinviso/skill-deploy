import React from 'react'

function ProfileImage({ thumbnail, emptyPhoto }) {
  function Image() {
    const className = emptyPhoto() ? "image_empty" : "image_present"
    return <img src={thumbnail} className={className} />
  }

  return(
    <div className="image create-listing-page__image">
      <Image />
    </div>
  );
}

export default ProfileImage
