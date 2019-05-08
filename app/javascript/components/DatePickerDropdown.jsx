import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import DatePicker from "react-datepicker";

const dateFormat = "MMM YYYY";

class DatePickerDropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    placeholder: "Select date",
    className: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  handleChange = date =>
    this.setState({
      date
    });

  render() {
    const { label, name, placeholder, className } = this.props;
    const { date } = this.state;
    return (
      <div className={className}>
        <label className="label">{label}</label>
        <DatePicker
          selected={date}
          placeholderText={placeholder}
          onChange={this.handleChange}
          dateFormat={dateFormat}
        />
        <input type="hidden" name={name} value={date} />
      </div>
    );
  }
}

export default DatePickerDropdown;
