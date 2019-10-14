import PropTypes from "prop-types";
import React, { PureComponent, Fragment } from "react";
import getUniqKey from "./../../../helpers/genUniqKey";
import ExperienceItem from "./ExperienceItem";

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

  onRemove = currentIndex => {
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
          <ExperienceItem
            key={field.key || field.id || index}
            index={index}
            field={field}
            getId={this.getId}
            getName={this.getName}
            onChangeDate={this.onChangeDate}
            onChange={this.onChange}
            onRemove={this.onRemove}
          />
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
