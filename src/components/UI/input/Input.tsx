import React, { useState } from "react";
import { MagnifyingGlass } from "../../../img/header";
import "./Input.css";

const Input: React.FC<{ backgroundColor: string }> = ({ backgroundColor }) => {
  const [showInput, setShowInput] = useState(false);

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  let colorIcon = "black";

  if (backgroundColor === "black") {
    colorIcon = "brightness(10)";
  } else if (backgroundColor === "white") {
    colorIcon = "brightness(100%)";
  }

  return (
    <div className="input">
      {showInput && <input type="text" />}
      <img
        src={MagnifyingGlass}
        alt="Magnifying Glass"
        onClick={handleToggleInput}
        style={{ filter: colorIcon }}
      />
    </div>
  );
};

export default Input;
