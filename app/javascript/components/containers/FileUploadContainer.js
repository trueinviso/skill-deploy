import { FileUpload } from '../Profile/FileUpload'
import { connect } from 'react-redux'
import { uploadThumbnail, deleteThumbnail } from '../actions/thumbnailActions'

const mapStateToProps = (state, ownProps) => {
  return {
    thumbnail: state.user.data.thumbnail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uploadPhoto: (e) => dispatch(uploadThumbnail(e)),
    deletePhoto: () => dispatch(deleteThumbnail()),
  }
}

const FileUploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload)

export default FileUploadContainer
