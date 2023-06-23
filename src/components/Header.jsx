import React, { useContext } from "react";
import { Context } from "./Context";
function Header(props) {
  const { darkmode, handleDarkmode } = useContext(Context);
  return (
    <div className={darkmode ? 'darkmode header' : "header"}>
      <div className="title">
        <strong>Where is the world?</strong>
        <button
          className={darkmode ? "darkModeBtn btn darkmode" : "darkModeBtn btn"}
          onClick={handleDarkmode}
        >
          {darkmode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <hr />
      </div>
    </div>
  );
}

export default Header;
