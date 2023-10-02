import React from "react";
import "../styles/form-content-style.css";

/**
 *
 * @param {
 * label: string,
 * onChange: function,
 * type: string,
 * placeholder: string,
 * value: string,
 * defaultValue: string,
 * maxLength: number
 * } props Props for Component
 * @returns
 */

function Input(props) {
  const { label, onChange, type, placeholder, value, defaultValue, maxLength } =
    props;

  return (
    <div className="mb-3">
      <label className="form-label"> {label} </label>
      <input
        className="form-control"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
}

/**
 *
 * @param {
 * label: string,
 * placeholder: string,
 * value: string,
 * onChange: function,
 * options: array
 * } props Props for Component
 * @returns
 */

function Select(props) {
  const { label, placeholder, value, onChange, options = [] } = props;

  return (
    <div className="mb-3">
      <label> {label} </label>
      <select className="form-select" value={value} onChange={onChange}>
        <option disabled> {placeholder} </option>
        {options.map((option) => (
          <option key={option} name={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 *
 * @param {
 * label: string
 * } props Props for Component
 * @returns
 */

function Label(props) {
  const { label } = props;
  return <label>{label}</label>;
}

/**
 *
 * @param {
 * label: string,
 * forLabel: string
 * } props Props for Component
 * @returns
 */

function Radio(props) {
  const { label, name, value, onChange } = props;

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        name={name}
        value={value}
        type="radio"
        onChange={onchange}
        id="freshness"
      />
      {label}
    </div>
  );
}

function TextArea() {
  return <textarea className="form-control" />;
}

export { Input, Select, TextArea, Radio, Label };
