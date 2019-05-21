import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const noop = () => {};

class Toggle extends React.PureComponent {
  static propTypes = {
    defaultValue: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    defaultValue: false,
    disabled: false,
    onChange: noop
  };

  state = {
    on: this.props.defaultValue
  };

  onToggle = () =>
    this.setState(
      prev => ({ on: !prev.on }),
      () => {
        this.props.onChange(this.state.on);
      }
    );

  render() {
    const { disabled, name } = this.props;
    const { on } = this.state;

    return (
      <div
        role="switch"
        aria-checked={on}
        onClick={!disabled ? this.onToggle : noop}
        className={classnames(["toggle", disabled && "toggle--disabled"])}
      >
        <div
          className={classnames([
            "toggle__pointer",
            on && "toggle__pointer--active"
          ])}
        />
        <input type="hidden" name={name} value={on} />
      </div>
    );
  }
}

export default Toggle;
