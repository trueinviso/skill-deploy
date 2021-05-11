import PropTypes from "prop-types"
import React, { PureComponent, createRef } from "react"
import DatePicker from "react-datepicker"

const dateFormat = "MMM yyyy"

class DatePickerDropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string
  }

  static defaultProps = {
    placeholder: "Select date",
    className: ""
  }

  constructor(props) {
    super(props)

    this.ref = createRef()
  }

  handleChange = date => {
    this.props.onChange && this.props.onChange(date)
  }

  render() {
    const {
      label,
      name,
      placeholder,
      className,
      labelClassName,
      errorClassName,
      value,
      error
    } = this.props

    const date = new Date(value)

    return (
      <div className={className} ref={this.ref}>
        <label className={labelClassName}>{label}</label>
        <DatePicker
          selected={value? date.setDate(date.getDate() + 2) : ""}
          name={name}
          placeholderText={placeholder}
          onChange={this.handleChange}
          dateFormat={dateFormat}
        />
        {
          error && <div className={errorClassName}>{error}</div>
        }
      </div>
    )
  }
}

export default DatePickerDropdown
