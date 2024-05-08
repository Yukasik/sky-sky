import { CardsCatalog } from "../../../../components/cards";
import { other } from "../../../../components/data";
import "./Other.css";

const Other = () => {
  return (
    <div className="other">
      <div className="other-wrap">
        <div className="other-cards">
          <div className="other-card">
            {other.map((catalog) => (
              <CardsCatalog
                key={catalog.title}
                image={catalog.image}
                title={catalog.title}
                content={catalog.content}
                additionalContent={catalog.additionalContent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
