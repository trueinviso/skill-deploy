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
  const [startDateError, setStartDateError] = React.useState(null)
  const [endDateError, setEndDateError] = React.useState(null)

  React.useEffect(() => {
    const checkDates = () => {
      if (field.start && field.end && !field.current_role) {
        if (field.start > field.end) {
          setStartDateError('*The start date must be before the end date.')
          return;
        }
      }
      setStartDateError(null)
    }

    checkDates();
  }, [field])

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
        name={"id"}
        value={field["id"]}
      />
      <input
        type="hidden"
        name={"_destroy"}
        className="destroy"
        value="0"
      />

      <FormField
        containerClassName="registration-page__form-field registration-page__form-field--half"
        inputClassName="form--input"
        labelClassName="form--label -black"
        label="Title"
        name={"title"}
        id={getId(index, "name")}
        onChange={onChange(index)}
        value={field["title"]}
      />

      <FormField
        containerClassName="registration-page__form-field registration-page__form-field--half"
        inputClassName="form--input"
        labelClassName="form--label -black"
        label="Company"
        name={"company"}
        id={getId(index, "company")}
        onChange={onChange(index)}
        value={field["company"]}
      />

      <div className="registration-page__work-experiences--inline">
        <DatePicker
          labelClassName="form--label -black"
          errorClassName="date-picker__error"
          className="registration-page__form-field registration-page__form-field--fourth relative"
          name={"start"}
          label="Start"
          onChange={onChangeDate(index, 'start')}
          value={field["start"]}
          error={startDateError}
        />
        <DatePicker
          labelClassName="form--label -black"
          errorClassName="date-picker__error"
          className={`registration-page__form-field registration-page__form-field--fourth relative ${field.current_role ? 'invisible' : ''}`}
          name={"end"}
          label="End"
          onChange={onChangeDate(index, 'end')}
          value={field["end"]}
          error={endDateError}
        />

        <div className="registration-page__form-field registration-page__form-field--fourth">
          <input type="hidden" value="0" name={getName(index, "current_role")} />
          <input
            className="radio-button"
            type="checkbox"
            value="1"
            name={"current_role"}
            onChange={onChange(index)}
            id={getId(index, "current_role")}
            checked={field["current_role"]}
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
