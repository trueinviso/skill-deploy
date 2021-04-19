import React, { Fragment } from "react"
import Dropdown from "../Dropdown"

const typeFilters = [
  {
    label: "Full Time",
    value: "full_time"
  },
  {
    label: "Part Time",
    value: "part_time"
  },
  {
    label: "Contract",
    value: "contract"
  },
  {
    label: "Freelance",
    value: "freelance"
  }
]

const roleFilters = [
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
  { label: "Video", value: "video" },
  { label: "Photography", value: "photography" }
]

const JobFilterList = ({ activeFilters, updateFilters }) => {
  const onChangeFilter = ({ name, value }) => {
    const filter = `job_${name}_name`

    filterEnabled(filter, value)
      ? removeFilter(filter, value)
      : appendFilter(filter, value)
  }

  const filterEnabled = (filter, value) => {
    const keyPresent = Object.keys(activeFilters).includes(filter)
    if (!keyPresent) return false
    return activeFilters[filter].includes(value)
  }

  const removeCallback = (filter, newState) => prev => {
    const key = prev.activeFilters[filter]
    return { key: newState }
  }

  const removeFilter = (filter, value) => {
    const index = activeFilters[filter].indexOf(value)
    const newState = activeFilters[filter].splice(index, 1)
    updateFilters(removeCallback.bind(this, filter, newState))
  }

  const appendFilter = (filter, value) => {
    // Only job type (i.e. Full Time) is a multi filter on the job page
    let values =
      filter === `job_type_name` && activeFilters[filter]
        ? activeFilters[filter].concat([value])
        : [value]

    const callback = (filter, values) => prev => {
      Object.assign(prev.activeFilters, { [filter]: values })
    }

    updateFilters(callback.bind(this, filter, values))
  }

  const isSelected = (filter, selected) => {
    return (
      activeFilters.job_type_name &&
      activeFilters.job_type_name.includes(filter.value)
    )
  }

  return (
    <Fragment>
      <Dropdown
        name="role"
        onChange={onChangeFilter}
        placeholder="All Role Types"
        options={roleFilters}
        isSelected={(filter, selected) => filter.value === selected.value}
      />
      <Dropdown
        name="type"
        onChange={onChangeFilter}
        buttonClassName="dropdown__button--hidden"
        contentClassName="dropdown__content--inline"
        placeholder="All Creative Types"
        activeFilters={activeFilters.job_type_name}
        options={typeFilters}
        isSelected={isSelected}
      />
    </Fragment>
  )
}

export default JobFilterList
