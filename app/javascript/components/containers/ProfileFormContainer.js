import { Form } from '../Profile/Form'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    sectionName: ownProps.sectionName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUser())
  }
}

const ProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default ProfileFormContainer
