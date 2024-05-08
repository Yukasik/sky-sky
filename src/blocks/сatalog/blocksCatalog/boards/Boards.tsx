import { CardsCatalog } from "../../../../components/cards";
import { boards } from "../../../../components/data";
import "./Boards.css";

const Boards = () => {
  return (
    <div className="boards">
      <div className="boards-wrap">
        <div className="boards-cards">
          <div className="boards-card">
            {boards.map((catalog) => (
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

export default Boards;
