import "./styles/SettingsOption.scss";

export default function SettingsOption(props) {
  let inputType = "";
  if (props.option.type === "bool") {
    inputType = "checkbox";
  }

  function onChange(event) {
    if (props.option.type === "bool") {
      if (sessionStorage.getItem(props.option.name) === "off") {
        sessionStorage.setItem(props.option.name, "on");
        return null;
      }

      sessionStorage.setItem(props.option.name, "off");
      return null;
    }
  }

  return (
    <span className="SettingsOption">
      <label htmlFor={`settingsOption${props.option.name}`}>
        {props.option.label}
      </label>
      <input
        id={`settingsOption${props.option.name}`}
        type={inputType}
        checked={sessionStorage.getItem(props.option.name) === "on"}
        onChange={onChange}
      />

      <p>{props.option.desc}</p>
    </span>
  );
}
