import PropTypes from "prop-types";
import React, { PureComponent, Fragment } from "react";
import DatePicker from "../DatePickerDropdown";
import FormField from "./../shared/FormField";
import getUniqKey from "./../../helpers/genUniqKey";

class WorkExperienceForm extends PureComponent {
  static propTypes = {
    formName: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    console.log("hello", props);

    this.state = {
      fields: [this.createField()]
    };
  }

  onAddNewField = e => {
    e.preventDefault();
    this.setState(prev => ({ fields: [...prev.fields, this.createField()] }));
  };

  onRemove = currentIndex => e => {
    e.preventDefault();
    this.setState(prev => ({
      fields: prev.fields.filter((_, index) => index !== currentIndex)
    }));
  };

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
            key={field.key}
          >
            <FormField
              containerClassName="registration-page__form-field registration-page__form-field--half"
              inputClassName="input input_theme_normal registrations-edit__input"
              labelClassName="label"
              label="Title"
              name={this.getName(index, "title")}
              id={this.getId(index, "name")}
              onChange={this.onChange(index)}
            />

            <FormField
              containerClassName="registration-page__form-field registration-page__form-field--half"
              inputClassName="input input_theme_normal registrations-edit__input"
              labelClassName="label"
              label="Company"
              name={this.getName(index, "company")}
              id={this.getId(index, "company")}
              onChange={this.onChange(index)}
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
              />
              <DatePicker
                className="registration-page__form-field registration-page__form-field--fourth"
                name={this.getName(index, "end")}
                label="End"
                onChange={this.onChangeDate(index, this.getName(index, "end"))}
              />

              <div className="registration-page__form-field registration-page__form-field--fourth">
                <input
                  className="radio-button"
                  type="checkbox"
                  value="1"
                  name={this.getName(index, "current_role")}
                  onChange={this.onChange(index)}
                  id={this.getId(index, "current_role")}
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
