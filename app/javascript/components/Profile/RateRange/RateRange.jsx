import PropTypes from "prop-types"
import { useState, useRef, useEffect, useLayoutEffect } from "react"
import Select from "react-select"
import styles from "./styles.module.scss"
import Indicator from "./Indicator"

const customStyles = {
  indicatorSeparator: () => ({
    display: "none"
  }),
  control: provided => ({
    ...provided,
    minHeight: 44,
    fontSize: 12,
    color: "var(--quaternary-color)"
  }),
  container: provided => ({
    ...provided,
    cursor: "pointer"
  }),
  placeholder: provided => ({
    ...provided,
    color: "var(--quaternary-color)",
    fontWeight: "var(--font-medium)"
  }),
  menu: provided => ({
    ...provided,
    fontSize: 12,
    fontWeight: "var(--font-medium)"
  }),
  singleValue: provided => ({
    ...provided,
    fontWeight: "var(--font-medium)"
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: "var(--quaternary-color)",
    width: 30
  })
}

const baseProps = {
  isSearchable: false,
  isMulti: false,
  styles: customStyles,
  getOptionValue: o => o.id,
  id: "rate-range"
}

const RateRange = ({ options, name, defaultValue, ...props }) => {
  const ref = useRef()
  const [value, setValue] = useState(options?.find(o => o.id === defaultValue))
  const onChange = option => {
    setValue(option)
  }

  useLayoutEffect(() => {
    const hiddenInput = document
      .getElementById(baseProps.id)
      ?.querySelector("[type=hidden]")

    Object.keys(props).map(key => {
      if (key.includes("data")) {
        hiddenInput.setAttribute(key, props[key])
      }
    })
  }, [])

  return (
    <div className={styles.rateRange}>
      <Select
        ref={ref}
        className={styles.select}
        name={name}
        {...baseProps}
        value={value}
        onChange={onChange}
        options={options}
      />
      <Indicator value={value?.from} />
    </div>
  )
}

RateRange.propTypes = {
  defaultValue: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      from: PropTypes.number,
      to: PropTypes.number,
      label: PropTypes.string
    })
  ),
  name: PropTypes.string
}

export default RateRange
