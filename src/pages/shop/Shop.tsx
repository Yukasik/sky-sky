import {
  Catalog,
  Gallery,
  Information,
  Products,
  Services,
  Video,
  Map,
} from "../../blocks";
import { Counter, Footer, Header, InfoList } from "../../components";
import { Button, HeartButton } from "../../components/UI";
import { SardiniaWhite, SardiniaWhiteMini } from "../../img/catalog";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <Header backgroundColor={"white"} />
      <div className="shop-wrap">
        <div className="shop-block-left">
          <div className="shop-block-left-card-img">
            <img src={SardiniaWhite} alt="Sardinia White" />
            <div className="shop-block-left-card-img-mini">
              <img src={SardiniaWhiteMini} alt="Sardinia White" />
              <img src={SardiniaWhiteMini} alt="Sardinia White" />
              <img src={SardiniaWhiteMini} alt="Sardinia White" />
            </div>
          </div>
        </div>
        <div className="shop-block-right">
          <div className="shop-block-right-text">
            <h1>Sardinia White</h1>
            <h2>199,50</h2>
            <p>
              Product Short Description senectus et netus et malesuada <br />
              fames ac turpis egestas. Vesitbulum tortor quam, feugiat <br />
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              <br />
              amet quam egestas semper. Aenean ultricies mi vitae est. <br />
              Mauris placerat eleifend
            </p>
          </div>
          <div className="shop-block-right-btn">
            <Counter />
            <Button type="shop-block-right-button" destination="/">
              Add to cart
            </Button>
            <HeartButton />
          </div>
          <div className="shop-block-right-points">
            <InfoList />
          </div>
        </div>
      </div>
      <Services />
      <Catalog />
      <Gallery />
      <Products />
      <Information />
      <Video />
      <Map />
      <Footer />
    </div>
  );
};

export default Shop;
