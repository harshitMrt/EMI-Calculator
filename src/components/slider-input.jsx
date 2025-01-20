import React from "react";

export default function SliderInput({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle,
}) {
  return (
    <React.Fragment>
      <span className="title">{title}</span>

      {state && (
        <span className="title" style={{ textDecoration: "underline" }}>
          {" "}
          {underlineTitle}
        </span>
      )}

      <span>
        <input
          type="range"
          min={min}
          max={max}
          className="slider"
          value={state}
          onChange={onChange}
        ></input>

        <span className="lables">
          <label>{labelMin ?? min}</label>
          <b>{state}</b>
          <label>{labelMax ?? max}</label>
        </span>
      </span>
    </React.Fragment>
  );
}
