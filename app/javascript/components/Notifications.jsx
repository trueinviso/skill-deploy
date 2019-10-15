import React from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";

class Notifications extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.bool.isRequired
  }

  onChange = (on) => {
    document
      .getElementsByClassName("edit_user_profile")[0]
      .submit();
  }

  render() {
    return (
      <Toggle
        onChange={this.onChange}
        name={this.props.name}
        defaultValue={this.props.defaultValue}
      />
    );
  }
}

export default Notifications;
