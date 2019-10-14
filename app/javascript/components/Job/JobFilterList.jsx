import React, { Fragment } from "react";
import Dropdown from "../Dropdown";

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
];

const roleFilters = [
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
  { label: "Marketing", value: "marketing" },
  { label: "Photography", value: "photography" }
];

const JobFilterList = ({ activeFilters, updateFilters }) => {
  const onChangeFilter = ({ name, value }) => {
    const filter = `job_${name}_name`

    filterEnabled(filter, value) ?
      removeFilter(filter, value) : appendFilter(filter, value)
  }

  const filterEnabled = (filter, value) => {
    if (!Object.keys(activeFilters).includes(filter)) return false;
    return activeFilters[filter].includes(value);
  }

  const removeCallback = (filter, newState) => (prev) => {
    const key = prev.activeFilters[filter];
    return { key: newState };
  }

  const removeFilter = (filter, value) => {
    const index = activeFilters[filter].indexOf(value);
    const newState = activeFilters[filter].splice(index, 1);
    updateFilters(removeCallback.bind(this, filter, newState));
  }


  const appendFilter = (filter, value) => {
    // Only job type (i.e. Full Time) is a multi filter on the job page
    let values = filter === `job_type_name` && activeFilters[filter] ?
      activeFilters[filter].concat([value]) :
      [value]

    const callback = (filter, values) => (prev) => {
      Object.assign(prev.activeFilters, { [filter]: values })
    }

    updateFilters(callback.bind(this, filter, values));
  }

  return (
    <Fragment>
      <Dropdown
        name="role"
        onChange={onChangeFilter}
        placeholder="All Role Types"
        options={roleFilters}
      />
      <Dropdown
        name="type"
        onChange={onChangeFilter}
        buttonClassName="dropdown__button--hidden"
        contentClassName="dropdown__content--inline"
        placeholder="All Creative Types"
        options={typeFilters}
      />
    </Fragment>
  );
};

export default JobFilterList;
