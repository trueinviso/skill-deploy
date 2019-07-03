import PropTypes from "prop-types";
import React from "react";
import ProfileImage from "./Profile/ProfileImage";
import ImageButtons from "./Profile/ImageButtons";
import heyfamFetch from "../helpers/heyfamFetch";

const THUMBNAIL_API = "/api/v1/thumbnail";

const CHANGE_BUTTON_NAME = "Change Photo";
const UPLOAD_BUTTON_NAME = "Upload a photo";

class FileUpload extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    resource: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
    thumbnail: PropTypes.string,
    type: PropTypes.oneOf(["user", "job"]).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      file: null,
      thumbnail: props.thumbnail,
      isFetching: false,
      buttonName: props.thumbnail.includes("empty_photo_state_icon")
        ? UPLOAD_BUTTON_NAME
        : CHANGE_BUTTON_NAME
    };

    this.onChange = this.onChange.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.emptyPhoto = this.emptyPhoto.bind(this);
  }

  onChange(e) {
    const file = e.target.files[0];
    document.getElementById("profileUploadPicker").value = "";
    this.fileUpload(file).then(this.fetchComplete);
  }

  fetchComplete = resp => {
    this.setState(
      {
        thumbnail: resp.thumbnail,
        isFetching: false,
        buttonName: CHANGE_BUTTON_NAME
      },
      this.updateNavbarAvatar
    );
  };

  fileUpload = file => {
    if (this.state.isFetching) return;

    this.setState({ isFetching: true });
    const options = { method: "PUT" };
    const data = new FormData();
    data.append(this.props.name, file);
    data.append(`record_id`, this.props.resource.id);
    data.append(`model_type`, this.props.type);
    return heyfamFetch(THUMBNAIL_API, data, options, "file");
  };

  emptyPhoto() {
    return this.state.thumbnail.includes("empty_photo_state_icon");
  }

  deleteFile() {
    if (this.state.isFetching || this.emptyPhoto()) return;
    this.setState({ isFetching: true });
    const options = { method: "DELETE" };
    heyfamFetch(API, {}, options).then(resp => this.fetchComplete(resp));
  }

  updateNavbarAvatar = () => {
    const userAvatar = document.getElementById("userAvatar");
    if (this.props.type === "user" && userAvatar) {
      userAvatar.src = this.state.thumbnail;
    }
  };

  render() {
    const { thumbnail, buttonName, isFetching } = this.state;
    return (
      <div id="profile-picture" className="file-upload">
        <ProfileImage thumbnail={thumbnail} emptyPhoto={this.emptyPhoto} />
        <ImageButtons
          onChange={this.onChange}
          deleteFile={this.deleteFile}
          buttonName={buttonName}
          disabled={isFetching}
        />
      </div>
    );
  }
}

export default FileUpload;
