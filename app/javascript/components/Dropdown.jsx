import { Component } from "react"
//import DropdownMenu from "./dropdownMenu"
import { arrayOf, string, number, func } from "prop-types"
//import classNames from "classnames"

class Dropdown extends Component {
  //static propTypes = {
  //  items: arrayOf(string),
  //  selectedPlaylistIndex: number.isRequired,
  //  handlePlaylistSwitch: func.isRequired,
  //}

  state = {
    showDropdownMenu: false,
    //selectedTitle: this.props.items[this.props.selectedPlaylistIndex],
  }

  //canUseDropdown = () => this.props.items.length > 1
  canUseDropdown = () => true

  render() {
    const { showDropdown } = this.state
    const dropdownIcon = <div className="dropdown__icon" />

    return (
      <div className="dropdown">
        <a href="#" onClick={this.handleClick}>
          <h2>Manage listings</h2>
          {this.canUseDropdown() ? dropdownIcon : null}
        </a>
      </div>
    )
  }
}

export default Dropdown
