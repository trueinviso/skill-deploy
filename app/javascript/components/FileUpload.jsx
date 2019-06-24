import PropTypes from "prop-types";
import React from "react";
import ProfileImage from "./Profile/ProfileImage";
import ImageButtons from "./Profile/ImageButtons";
import heyfamFetch from "../helpers/heyfamFetch";

const USER_API = "/api/v1/thumbnail";
const JOB_API = "/api/v1/jobs";

const CHANGE_BUTTON_NAME = "Change Photo";
const UPLOAD_BUTTON_NAME = "Upload a photo";
class FileUpload extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    type: PropTypes.oneOf(["user", "job"])
  };
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      thumbnail: props.thumbnail,
      isFetching: false,
      buttonName: props.thumbnail.includes("empty_photo_state_icon")
        ? CHANGE_BUTTON_NAME
        : UPLOAD_BUTTON_NAME
    };
    this.onChange = this.onChange.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.emptyPhoto = this.emptyPhoto.bind(this);
  }

  onChange(e) {
    const file = e.target.files[0];
    document.getElementById("profileUploadPicker").value = "";
    this.fileUpload(file).then(resp => this.fetchComplete(resp));
  }

  fetchComplete(resp) {
    this.setState({
      thumbnail: resp.thumbnail,
      isFetching: false,
      buttonName: CHANGE_BUTTON_NAME
    });
  }

  fileUpload = file => {
    if (this.state.isFetching) return;

    this.setState({ isFetching: true });
    const options = { method: "PUT" };
    const data = new FormData();
    data.append(this.props.name, file);
    const apiUrl = this.props.type === "user" ? USER_API : JOB_API;
    return heyfamFetch(apiUrl, data, options, "file");
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

  render() {
    const { thumbnail, buttonName } = this.state;
    return (
      <div id="profile-picture" className="file-upload">
        <ProfileImage thumbnail={thumbnail} emptyPhoto={this.emptyPhoto} />
        <ImageButtons
          onChange={this.onChange}
          deleteFile={this.deleteFile}
          buttonName={buttonName}
        />
      </div>
    );
  }
}

export default FileUpload;
