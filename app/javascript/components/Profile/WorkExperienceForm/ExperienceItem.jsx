import React from "react"
import PropTypes from "prop-types"
import DatePicker from "./../../DatePickerDropdown"
import FormField from "./../../shared/FormField"

const ExperienceItem = ({
  index,
  field,
  getId,
  getName,
  onChange,
  onChangeDate,
  onRemove
}) => {
  const ref = React.useRef(null)
  const onRemoveItem = React.useCallback(
    e => {
      e.preventDefault()
      // mark as destroy
      if (field["id"] !== undefined) {
        ref.current.querySelector("input[name*='_destroy']").value = 1
        ref.current.style.display = "none"
      } else {
        // Remove from the page
        onRemove(index)
      }
    },
    [index]
  )

  return (
    <div className="registration-page__work-experiences__section" ref={ref}>
      <input
        type="hidden"
        name={getName(index, "id")}
        defaultValue={field["id"]}
      />
      <input
        type="hidden"
        name={getName(index, "_destroy")}
        className="destroy"
        value="0"
      />

      <FormField
        containerClassName="registration-page__form-field registration-page__form-field--half"
        inputClassName="input input_theme_normal registrations-edit__input"
        labelClassName="label"
        label="Title"
        name={getName(index, "title")}
        id={getId(index, "name")}
        onChange={onChange(index)}
        defaultValue={field["title"]}
      />

      <FormField
        containerClassName="registration-page__form-field registration-page__form-field--half"
        inputClassName="input input_theme_normal registrations-edit__input"
        labelClassName="label"
        label="Company"
        name={getName(index, "company")}
        id={getId(index, "company")}
        onChange={onChange(index)}
        defaultValue={field["company"]}
      />

      <div className="registration-page__work-experiences--inline">
        <DatePicker
          className="registration-page__form-field registration-page__form-field--fourth"
          name={getName(index, "start")}
          label="Start"
          onChange={onChangeDate(index, getName(index, "start"))}
          defaultValue={field["start"]}
        />
        <DatePicker
          className="registration-page__form-field registration-page__form-field--fourth"
          name={getName(index, "end")}
          label="End"
          onChange={onChangeDate(index, getName(index, "end"))}
          defaultValue={field["end"]}
        />

        <div className="registration-page__form-field registration-page__form-field--fourth">
          <input
            className="radio-button"
            type="checkbox"
            value="1"
            name={getName(index, "current_role")}
            onChange={onChange(index)}
            id={getId(index, "current_role")}
            defaultChecked={field["current_role"]}
          />
          <label className="radio-label" htmlFor={getId(index, "current_role")}>
            Current role
          </label>
        </div>
      </div>
      <button
        onClick={onRemoveItem}
        className="button button--danger registrations-edit__input"
      >
        Remove
      </button>
    </div>
  )
}

ExperienceItem.propTypes = {
  getName: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  getId: PropTypes.func,
  onChange: PropTypes.func,
  onChangeDate: PropTypes.func,
  index: PropTypes.number
}

export default React.memo(ExperienceItem)
