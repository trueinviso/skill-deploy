import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { findDOMNode } from "react-dom";

function withDropdown(WrappedComponent) {
  return class HocDropDown extends PureComponent {
    static propTypes = {
      name: PropTypes.string.isRequired,
      isOpen: PropTypes.bool,
      defaultSelected: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      }),
      onChange: PropTypes.func
    };

    static defaultProps = {
      defaultSelected: { value: "", label: "" },
      isOpen: false
    };

    state = {
      isOpen: false,
      selected: this.props.defaultSelected
    };

    componentDidMount() {
      window.addEventListener("click", this._onWindowClick);
      window.addEventListener("touchstart", this._onWindowClick);
    }

    componentWillUnmount() {
      window.removeEventListener("click", this._onWindowClick);
      window.removeEventListener("touchstart", this._onWindowClick);
    }

    _onWindowClick = e => {
      const dropdownElement = findDOMNode(this);
      if (
        e.target !== dropdownElement &&
        !dropdownElement.contains(e.target) &&
        this.state.isOpen
      ) {
        this.onClose();
      }
    };

    onClose = () => this.setState({ isOpen: false });

    onTrigger = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };

    onSelect = value => {
      this.setState(
        {
          selected: value,
          isOpen: false
        },
        () => {
          const { onChange, name } = this.props;
          if (onChange) {
            onChange({ name, value: this.state.selected.value });
          }
        }
      );
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onTrigger={this.onTrigger}
          onClose={this.onClose}
          onSelect={this.onSelect}
        />
      );
    }
  };
}

export default withDropdown;
