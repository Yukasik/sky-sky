import React, { useState } from "react";
import "./HeartButton.css";
import { Heart } from "../../../../img/catalog";

const HeartButton: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const сlickButton = () => {
    setLiked(!liked);
  };

  return (
    <div className="heart-button">
      <button
        onClick={сlickButton}
        style={{ background: liked ? "#eb4c56" : "white" }}
      >
        <img src={Heart} alt="Heart" />
      </button>
    </div>
  );
};

export default HeartButton;
