import React from "react";

export default function TextInput({ title, state, setState }) {
  return (
    <React.Fragment>
      <span className="title">{title}</span>
      <input
        type="number"
        value={state && Math.max(0, state)}
        onChange={(e) => setState(e.target.value)}
        placeholder={title}
      ></input>
    </React.Fragment>
  );
}
