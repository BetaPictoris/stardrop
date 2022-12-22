import React from "react";
import "./styles/Settings.scss";

export default function Settings() {
  const [open, setOpen] = React.useState(false);

  function toggleSettings() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      {open && (
        <div className="SettingsDialog">
          <div className="SettingsDialogInner">
            <h2>Settings</h2>
          </div>
        </div>
      )}

      <button className="ImageButton" onClick={toggleSettings}>
        <img width="48px" src="//cdn.ozx.me/sdv/options.png" alt="Options" />
      </button>
    </>
  );
}
