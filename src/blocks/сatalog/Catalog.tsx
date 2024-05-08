import "./Catalog.css";
import { useState } from "react";
import { All, Sky, Ski, Boards, Other } from "./blocksCatalog";
import { ButtonDubbed } from "../../components/UI";

const Catalog = () => {
  const [category, setCategory] = useState<string>("All");

  const CategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <div className="catalog">
      <div className="catalog-wrap">
        <div className="catalog-top">
          <div className="catalog-title">
            <div className="underline-text">
              <p>Catalog</p>
            </div>
            <h1>
              Our Most Popular Board <br /> category
            </h1>
          </div>
          <div className="catalog-block-navigation">
            <nav>
              <div className="catalog-navigation">
                <ul className="catalog-navigation-items">
                  <li
                    className={
                      category === "All" ? "active" : "catalog-navigation-item"
                    }
                    onClick={() => CategoryChange("All")}
                  >
                    All
                  </li>
                  <li
                    className={
                      category === "Sky" ? "active" : "catalog-navigation-item"
                    }
                    onClick={() => CategoryChange("Sky")}
                  >
                    Sky
                  </li>
                  <li
                    className={
                      category === "Ski" ? "active" : "catalog-navigation-item"
                    }
                    onClick={() => CategoryChange("Ski")}
                  >
                    Ski
                  </li>
                  <li
                    className={
                      category === "Boards"
                        ? "active"
                        : "catalog-navigation-item"
                    }
                    onClick={() => CategoryChange("Boards")}
                  >
                    Boards
                  </li>
                  <li
                    className={
                      category === "Other"
                        ? "active"
                        : "catalog-navigation-item"
                    }
                    onClick={() => CategoryChange("Other")}
                  >
                    Other
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div>
          {category === "All" && <All />}
          {category === "Sky" && <Sky />}
          {category === "Ski" && <Ski />}
          {category === "Boards" && <Boards />}
          {category === "Other" && <Other />}
        </div>
        <div className="catalog-button">
          <ButtonDubbed />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
