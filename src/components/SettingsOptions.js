import SettingsOption from "./SettingsOption";

const options = [
  {
    type: "bool",
    name: "playRain",
    label: "Enable rain",
    desc: "Play rain sounds in the background.",
  },
];

export default function SettingsOptions() {
  return (
    <div className="SettingsOptions">
      {options.map((option) => (
        <SettingsOption key={option.name} option={option} />
      ))}
    </div>
  );
}
