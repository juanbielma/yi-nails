import React from "react";

import "./input.css";

const Input = props => (
  <div
    className={
      "form__input" + (props.value === "" ? "" : " form__input--active")
    }
  >
    <input
      className="input"
      type={props.type}
      name={props.name}
      id={props.id}
      autoComplete="off"
      value={props.value}
      onChange={props.onChange}
    />
    <label htmlFor="phone" className="form__label">
      <span className="label__content">{props.label}</span>
    </label>
  </div>
);

export default Input;
