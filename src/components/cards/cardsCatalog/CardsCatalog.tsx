import React from "react";
import "./CardsCatalog.css";

interface CardsCatalogProps {
  image: string;
  title: string;
  content: string;
  additionalContent: string;
}

const CardsCatalog: React.FC<CardsCatalogProps> = ({
  image,
  title,
  content,
  additionalContent,
}) => {
  return (
    <div className="cards-catalog">
      <img src={image} alt={image} />
      <div className="cards-catalog-info">
        <h2>{title}</h2>
        <div className="cards-catalog-info-text">
          <p className="cards-catalog-info-text-crossed-out">
            {additionalContent}
          </p>
          <p className="cards-catalog-info-text-content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsCatalog;
