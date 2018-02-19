import { Links } from '../Nav/Links'
import { connect } from 'react-redux'
import { setActiveNavLink } from '../actions/navLinkActions'

const mapStateToProps = (state) => {
  return {
    activeLink: state.activeNavLink
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActiveNavLink: (e) => {
      dispatch(setActiveNavLink(e.target.name))
    }
  }
}

const NavLinksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Links)

export default NavLinksContainer

