import "./styles/SettingsOption.scss";

export default function SettingsOption(props) {
  let inputType = "";
  if (props.option.type === "bool") {
    inputType = "checkbox";
  }

  return (
    <span className="SettingsOption">
      <label for={`settingsOption${props.option.name}`}>
        {props.option.label}
      </label>
      <input
        id={`settingsOption${props.option.name}`}
        type={inputType}
        value={props.option.name}
        checked={props.option.name}
      />

      <p>{props.option.desc}</p>
    </span>
  );
}
