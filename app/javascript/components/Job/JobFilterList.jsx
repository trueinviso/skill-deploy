import React, { Fragment } from "react";
import Dropdown from "../Dropdown";

const roleFilters = [
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

const filterOptions = [
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
  { label: "Marketing", value: "marketing" },
  { label: "Photography", value: "photography" }
];

const JobFilterList = ({ onChange }) => {
  return (
    <Fragment>
      <Dropdown
        name="type"
        onChange={onChange}
        placeholder="All Creative Types"
        options={filterOptions}
      />
      <Dropdown
        name="role"
        onChange={onChange}
        buttonClassName="dropdown__button--hidden"
        contentClassName="dropdown__content--inline"
        placeholder="All Role Types"
        options={roleFilters}
      />
    </Fragment>
  );
};

export default JobFilterList;
