import { Header } from "../../components";
import { Button } from "../../components/UI";
import "./Initial.css";

const Initial = () => {
  return (
    <div className="initial">
      <Header backgroundColor={"black"} />
      <div className="initial-wrap">
        <div className="initial-title">
          <p>We build only the best, customized to your exacting demands</p>
          <h1>SKY & SKI</h1>
          <Button type="initial-title-btn" destination="/shop">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Initial;
