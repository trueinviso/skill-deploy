import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const DropdownItem = ({ isSelected, onClick, value, label }) => (
  <li
    onClick={() => onClick({ value, label })}
    className={classNames([
      "dropdown__item",
      { "dropdown__item--selected": isSelected }
    ])}
  >
    <span>{label}</span>
  </li>
)

DropdownItem.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
}

export default DropdownItem
