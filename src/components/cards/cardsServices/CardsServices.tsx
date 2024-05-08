import React from "react";
import "./CardsServices.css";

export interface CardsServicesProps {
  image: string;
  title: string;
  text: string;
}
const CardsServices: React.FC<CardsServicesProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <div className="cards-services">
      <div className="card-services">
        <div className="card-services-img">
          <img src={image} alt={image} />
        </div>
        <div className="card-services-title">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsServices;
