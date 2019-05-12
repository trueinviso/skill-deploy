import PropTypes from "prop-types";
import React, { PureComponent, createRef } from "react";
import DatePicker from "react-datepicker";

const dateFormat = "MMM YYYY";

class DatePickerDropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    placeholder: "Select date",
    className: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };

    this.ref = createRef();
  }

  handleChange = date =>
    this.setState(
      {
        date
      },
      () => {
        this.props.onChange && this.props.onChange(this.state.date);
      }
    );

  render() {
    const { label, name, placeholder, className } = this.props;
    const { date } = this.state;
    return (
      <div className={className} ref={this.ref}>
        <label className="label">{label}</label>
        <DatePicker
          selected={date}
          name={name}
          placeholderText={placeholder}
          onChange={this.handleChange}
          dateFormat={dateFormat}
        />
      </div>
    );
  }
}

export default DatePickerDropdown;
