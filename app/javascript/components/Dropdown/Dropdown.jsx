import { Component } from "react"
import { arrayOf, string, shape } from "prop-types"
import classNames from "classnames"
import withDropdown from "./withDropdown"
import DropdownItem from "./DropdownItem"

const Dropdown = ({
  options,
  selected,
  isOpen,
  isSelected,
  onTrigger,
  onSelect,
  containerClassName,
  contentClassName,
  buttonClassName,
  placeholder
}) => (
  <div className={classNames("dropdown", [containerClassName])}>
    <button
      onClick={onTrigger}
      className={classNames([
        "dropdown__button",
        { "dropdown--open": isOpen },
        buttonClassName
      ])}
    >
      {selected.label || placeholder}
    </button>
    <ul
      className={classNames([
        "dropdown__content",
        isOpen && "dropdown__content--open",
        contentClassName
      ])}
    >
      {options.map((filter, key) => (
        <DropdownItem
          key={key}
          isSelected={isSelected(filter, selected)}
          {...filter}
          onClick={onSelect}
        />
      ))}
    </ul>
  </div>
)

Dropdown.propTypes = {
  options: arrayOf(
    shape({
      value: string,
      label: string
    })
  ).isRequired,
  placeholder: string,
  containerClassName: string,
  buttonClassName: string,
  contentClassName: string
}

Dropdown.defaultProps = {
  placeholder: "Open dropdown"
}

export default withDropdown(Dropdown)
