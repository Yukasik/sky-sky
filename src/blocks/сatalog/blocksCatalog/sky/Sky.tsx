import { CardsCatalog } from "../../../../components/cards";
import { sky } from "../../../../components/data";
import "./Sky.css";

const Sky = () => {
  return (
    <div className="sky">
      <div className="sky-wrap">
        <div className="sky-cards">
          <div className="sky-card">
            {sky.map((catalog) => (
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

export default Sky;
