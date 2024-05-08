import { CardsCatalog } from "../../../../components/cards";
import { catalogs } from "../../../../components/data";
import "./All.css";

const All = () => {
  return (
    <div className="all">
      <div className="all-wrap">
        <div className="all-cards">
          <div className="all-card">
            {catalogs.map((catalog) => (
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

export default All;
