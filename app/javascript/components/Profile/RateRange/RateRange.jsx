import PropTypes from "prop-types"
import { useState } from "react"
import Select from "react-select"
import styles from "./styles.module.scss"
import Indicator from "./Indicator"

const options = [
  { value: 100, label: "$75-$100/hr  or  $750-$1000/day" },
  { value: 50, label: "$10-$20/hr  or  $150-$200/day" },
  { value: 70, label: "$35-$40/hr  or  $300-$400/day" },
  { value: 5, label: "$5-$10/hr  or  $100-$150/day" }
]

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
  styles: customStyles
}

const RateRange = () => {
  const [value, setValue] = useState(null)
  const onChange = option => {
    setValue(option)
  }

  return (
    <div className={styles.rateRange}>
      <Select
        {...baseProps}
        value={value}
        onChange={onChange}
        options={options}
      />
      <Indicator value={value?.value} />
    </div>
  )
}

RateRange.propTypes = {
  name: PropTypes.string
}

export default RateRange
