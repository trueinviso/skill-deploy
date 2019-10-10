import PropTypes from "prop-types";
import React, { PureComponent, Fragment } from "react";
import DatePicker from "../DatePickerDropdown";
import FormField from "./../shared/FormField";
import getUniqKey from "./../../helpers/genUniqKey";

const ExperiencePropTypes = {
  company: PropTypes.string,
  created_at: PropTypes.string,
  current_role: PropTypes.bool,
  end: PropTypes.string,
  id: PropTypes.number,
  start: PropTypes.string,
  title: PropTypes.string,
  title: PropTypes.string,
  updated_at: PropTypes.string,
  user_id: PropTypes.number
};

class WorkExperienceForm extends PureComponent {
  static propTypes = {
    formName: PropTypes.string.isRequired,
    initialWorkExperiences: PropTypes.arrayOf(
      PropTypes.shape(ExperiencePropTypes)
    )
  };

  state = {
    fields: this.props.initialWorkExperiences
      ? this.props.initialWorkExperiences
      : [this.createField()]
  };

  onAddNewField = e => {
    e.preventDefault();
    this.setState(prev => ({ fields: [...prev.fields, this.createField()] }));
  };

  onRemove = currentIndex => e => {
    e.preventDefault();

    if(this.recordIsPersisted(currentIndex)) {
      this.markRecordForDestroy(e);
    } else {
      this.removeRecordFromPage(currentIndex);
    }
  };

  recordIsPersisted = currentIndex => this.state.fields[currentIndex]["id"]

  markRecordForDestroy = e => {
    const wrapper = e.target.closest(".registration-page__work-experiences__section");
    wrapper.querySelector("input[name*='_destroy']").value = 1;
    wrapper.style.display = "none";
  }

  removeRecordFromPage = currentIndex => {
    this.setState(prev => ({
      fields: prev.fields.filter((_, index) => index !== currentIndex)
    }));
  }

  onChange = currentIndex => e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prev => ({
      fields: prev.fields.map((field, index) =>
        currentIndex === index ? { ...field, [name]: value } : field
      )
    }));
  };

  onChangeDate = (currentIndex, name) => date =>
    this.setState(prev => ({
      fields: prev.fields.map((field, index) =>
        currentIndex === index
          ? { ...field, [name]: new Date(date).toISOString() }
          : field
      )
    }));

  createField = () => ({
    key: getUniqKey()
  });

  getName = (index, name) => {
    // user[work_experiences_attributes][index][name]
    return `${this.props.formName}[${index}][${name}]`;
  };

  getId = (index, name) => `${name}-${index}`;

  render() {
    const { fields } = this.state;

    return (
      <Fragment>
        {fields.map((field, index) => (
          <div
            className="registration-page__work-experiences__section"
            key={field.key || field.id}
          >
            <input
              type="hidden"
              name={this.getName(index, "id") }
              defaultValue={field["id"]}
            />

            <FormField
              containerClassName="registration-page__form-field registration-page__form-field--half"
              inputClassName="input input_theme_normal registrations-edit__input"
              labelClassName="label"
              label="Title"
              name={this.getName(index, "title")}
              id={this.getId(index, "name")}
              onChange={this.onChange(index)}
              defaultValue={field["title"]}
            />

            <FormField
              containerClassName="registration-page__form-field registration-page__form-field--half"
              inputClassName="input input_theme_normal registrations-edit__input"
              labelClassName="label"
              label="Company"
              name={this.getName(index, "company")}
              id={this.getId(index, "company")}
              onChange={this.onChange(index)}
              defaultValue={field["company"]}
            />

            <div className="registration-page__work-experiences--inline">
              <DatePicker
                className="registration-page__form-field registration-page__form-field--fourth"
                name={this.getName(index, "start")}
                label="Start"
                onChange={this.onChangeDate(
                  index,
                  this.getName(index, "start")
                )}
                defaultValue={field["start"]}
              />
              <DatePicker
                className="registration-page__form-field registration-page__form-field--fourth"
                name={this.getName(index, "end")}
                label="End"
                onChange={this.onChangeDate(index, this.getName(index, "end"))}
                defaultValue={field["end"]}
              />

              <div className="registration-page__form-field registration-page__form-field--fourth">
                <input
                  className="radio-button"
                  type="checkbox"
                  value="1"
                  name={this.getName(index, "current_role")}
                  onChange={this.onChange(index)}
                  id={this.getId(index, "current_role")}
                  defaultChecked={field["current_role"]}
                />
                <label
                  className="radio-label"
                  htmlFor={this.getId(index, "current_role")}
                >
                  Current role
                </label>
              </div>
            </div>
            <div className="registration-page__form-field ">
              <input
                type="hidden"
                name={this.getName(index, "_destroy") }
                className="destroy"
                defaultValue="0"
              />

              <button
                onClick={this.onRemove(index)}
                className="button button--danger registrations-edit__input"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="registration-page__form-field">
          <button
            className="button button_theme_white"
            onClick={this.onAddNewField}
          >
            Add more experience
          </button>
        </div>
      </Fragment>
    );
  }
}

export default WorkExperienceForm;
