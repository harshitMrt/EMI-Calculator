import React from "react";

export default function TextInput({ title, state, setState, setDP }) {
  return (
    <React.Fragment>
      <span className="title">{title}</span>
      <input
        type="number"
        value={state && Math.max(0, state)}
        onChange={(e) => {
          const dp = Number(e.target.value);
          setState(e.target.value);
          setDP(dp);
        }}
        placeholder={title}
      ></input>
    </React.Fragment>
  );
}
