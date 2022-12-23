import React from "react";
import "./styles/SettingsOption.scss";

export default function SettingsOption(props) {
  const [value, setValue] = React.useState(
    sessionStorage.getItem(props.option.name)
  );

  let inputType = "";
  if (props.option.type === "bool") {
    inputType = "checkbox";
  }

  function onChange() {
    if (props.option.type === "bool") {
      if (sessionStorage.getItem(props.option.name) === "off") {
        sessionStorage.setItem(props.option.name, "on");
      } else {
        sessionStorage.setItem(props.option.name, "off");
      }
    }

    setValue(sessionStorage.getItem(props.option.name));
  }

  return (
    <span className="SettingsOption">
      <label htmlFor={`settingsOption${props.option.name}`}>
        {props.option.label}
      </label>
      <input
        id={`settingsOption${props.option.name}`}
        type={inputType}
        checked={value === "on"}
        onChange={onChange}
      />

      <p>{props.option.desc}</p>
    </span>
  );
}
