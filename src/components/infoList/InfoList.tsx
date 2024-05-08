import React, { useState } from "react";
import "./InfoList.css";

const InfoList: React.FC = () => {
  const [selectedParagraph, setSelectedParagraph] = useState<string | null>(
    null
  );

  const paragraphClick = (paragraph: string) => {
    if (selectedParagraph === paragraph) {
      setSelectedParagraph(null);
    } else {
      setSelectedParagraph(paragraph);
    }
  };

  return (
    <div className="info-list">
      <ul className="info-list-items">
        <li
          onClick={() => paragraphClick("ParagraphOne")}
          className="info-list-item"
        >
          <span>Lorem ipsum dolor sit amet,</span>
        </li>
        {selectedParagraph === "ParagraphOne" && (
          <div className="info-list-text">
            <p>
              Product Short Description senectus et netus et malesuada <br />
              fames ac turpis egestas.
            </p>
          </div>
        )}

        <li
          onClick={() => paragraphClick("ParagraphTwo")}
          className="info-list-item"
        >
          <span>Lorem ipsum dolor sit amet,</span>
        </li>
        {selectedParagraph === "ParagraphTwo" && (
          <div className="info-list-text">
            <p>
              Product Short Description senectus et netus et malesuada <br />{" "}
              fames ac turpis egestas.
            </p>
          </div>
        )}

        <li
          onClick={() => paragraphClick("ParagraphThree")}
          className="info-list-item"
        >
          <span>Lorem ipsum dolor sit amet,</span>
        </li>
        {selectedParagraph === "ParagraphThree" && (
          <div className="info-list-text">
            <p>
              Product Short Description senectus et netus et malesuada <br />
              fames ac turpis egestas.
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default InfoList;
