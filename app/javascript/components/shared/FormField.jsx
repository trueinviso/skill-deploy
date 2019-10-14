import PropTypes from "prop-types";
import React from "react";

const FormField = ({
  containerClassName,
  labelClassName,
  label,
  inputClassName,
  type,
  name,
  id,
  children,
  onChange,
  value,
  defaultValue
}) => (
  <div className={containerClassName}>
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
    <input
      id={id}
      className={inputClassName}
      type={type}
      name={name}
      onChange={onChange}
      id={id}
      value={value}
      defaultValue={defaultValue}
    />
    {children}
  </div>
);

FormField.propTypes = {
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};

FormField.defaultProps = {
  type: "text"
};

export default FormField;
