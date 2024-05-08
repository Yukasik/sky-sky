import { CardsCatalog } from "../../../../components/cards";
import { ski } from "../../../../components/data";
import "./Ski.css";

const Ski = () => {
  return (
    <div className="ski">
      <div className="ski-wrap">
        <div className="ski-cards">
          <div className="ski-card">
            {ski.map((catalog) => (
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

export default Ski;
