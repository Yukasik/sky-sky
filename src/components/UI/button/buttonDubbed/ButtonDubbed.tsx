import React, { useState } from "react";
import { All } from "../../../../blocks/сatalog/blocksCatalog";
import "./ButtonDubbed.css";

const ButtonDubbed: React.FC = () => {
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);

  const handleButtonDubbed = () => {
    const newBlocks = [...blocks, <All />];
    setBlocks(newBlocks);
  };

  return (
    <div className="button-dubbed">
      {blocks.map((block) => block)}
      <button onClick={handleButtonDubbed}>MORE PRODUCTS</button>
    </div>
  );
};

export default ButtonDubbed;
