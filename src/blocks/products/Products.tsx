import { Button } from "../../components/UI";
import { Arrow } from "../../img/home/products";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="products-wrap">
        <div className="products-block-left">
          <h1>
            Explore Our
            <br /> Product
          </h1>
          <div className="products-block-left-cards">
            <div className="products-block-left-card-mask">
              <div>
                <div className="products-block-left-card-mask-img">
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className="products-block-left-card-arrow"
                  />
                </div>
                <div className="products-block-left-card-mask-text">
                  <p className="products-price">$60</p>
                  <p>Road helmet</p>
                </div>
              </div>
            </div>
            <div className="products-block-left-card-boards">
              <div className="products-block-left-card-boards-img">
                <img
                  src={Arrow}
                  alt="Arrow"
                  className="products-block-card-boards-arrow"
                />
              </div>
              <div className="products-block-left-card-boards-text">
                <p>Tire repair kit</p>
                <p className="products-price-boards">$120</p>
              </div>
            </div>
          </div>
        </div>
        <div className="products-block-right">
          <p className="products-block-right-title">
            Amet minim mollit non deserunt ullamco <br /> est sit aliqua dolor
            do amet sint. Velit officia <br />
            consequat duis enim velit mollit.
          </p>
          <div className="products-block-right-cards">
            <div className="products-block-right-card-bottle">
              <div className="products-block-right-card-bottle-img">
                <img
                  src={Arrow}
                  alt="Arrow"
                  className="products-block-card-bottle-arrow"
                />
              </div>
              <div className="products-block-right-card-bottle-text">
                <p className="products-price-bottle">$60</p>
                <p>Bike water bottle</p>
              </div>
            </div>
          </div>
          <div className="products-block-right-button">
            <Button type="products-btn" destination="/shop">
              MORE PRODUCTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
