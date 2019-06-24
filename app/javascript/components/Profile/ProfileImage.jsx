import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const basePropTypes = {
  thumbnail: PropTypes.string,
  emptyPhoto: PropTypes.func
};

function Image({ thumbnail, emptyPhoto }) {
  return (
    <img
      src={thumbnail}
      className={classNames([emptyPhoto() ? "image_empty" : "image__present"])}
    />
  );
}

function ProfileImage(props) {
  return (
    <div
      className={classNames("image create-listing-page__image", {
        "image--no-border": props.emptyPhoto() === false
      })}
    >
      <Image {...props} />
    </div>
  );
}

Image.propTypes = basePropTypes;
ProfileImage.propTypes = basePropTypes;

export default ProfileImage;
