import {
  Tesla,
  DocuSign,
  Maze,
  Uber,
  Miro,
  Discord,
  User,
} from "../../img/home/information";
import "./Information.css";

const Information = () => {
  return (
    <div className="information">
      <div className="information-wrap">
        <div className="information-companies">
          <img src={Tesla} alt="Tesla" />
          <img src={DocuSign} alt="DocuSign" />
          <img src={Maze} alt="Maze" />
          <img src={Uber} alt="Uber" />
          <img src={Miro} alt="Miro" />
          <img src={Discord} alt="Discord" />
        </div>
        <div className="information-blocks">
          <div className="information-block-left">
            <img src={User} alt="User" />
          </div>
          <div className="information-block-right">
            <h1>Why choose Us?</h1>
            <p>
              Amet minim mollit non deserunt ullamco <br /> est sit aliqua dolor
              do amet sint. Velit <br /> officia consequat duis enim velit
              mollit.
            </p>
            <h3>Read more</h3>
          </div>
        </div>
        <div className="information-cards">
          <div className="information-card">
            <h1>Service Repiar</h1>
            <p>
              Amet minim mollit non <br /> deserunt ullamco est sit <br />
              aliqua dolor do amet sint <br /> Velit officia.
            </p>
          </div>
          <div className="information-card">
            <h1>Board Accessories</h1>
            <p>
              Amet minim mollit non <br /> deserunt ullamco est sit <br />
              aliqua dolor do amet sint <br /> Velit officia.
            </p>
          </div>
          <div className="information-card">
            <h1>Warraty & Guarantee</h1>
            <p>
              Amet minim mollit non <br /> deserunt ullamco est sit <br />
              aliqua dolor do amet sint <br /> Velit officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
