import React, { useState } from "react";
import "./ImageOpen.css";

const ImageOpen: React.FC<{ src: string }> = ({ src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img src={src} alt="modal" className="modal-img" onClick={openModal} />
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={src} alt="modal" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default ImageOpen;
