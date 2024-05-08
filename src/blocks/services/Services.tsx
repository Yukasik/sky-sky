import { CardsServices } from "../../components/cards";
import { Box, User, Wallet } from "../../img/home/services";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-wrap">
        <CardsServices
          image={Box}
          title="Free Shapping"
          text="No charge for each delivery"
        />
        <CardsServices
          image={Wallet}
          title="Quick Payment"
          text="100% secure payment"
        />
        <CardsServices image={User} title="24/7 Support" text="Quick support" />
      </div>
    </div>
  );
};

export default Services;
