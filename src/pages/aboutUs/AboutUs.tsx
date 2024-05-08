import {
  Services,
  Catalog,
  Gallery,
  Products,
  Information,
  Video,
  Map,
} from "../../blocks";
import { Footer, Header } from "../../components";
import Button from "../../components/UI/button/Button";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header backgroundColor={"white"} />
      <div className="about-us-wrap">
        <div className="about-us-card">
          <div className="about-us-card-info">
            <h1>About Us</h1>
            <p>
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu <br />
              eleifend aptent dapibus metus maecenas consequat.
              <br /> Elementum interdum a semper. Netus nullam eros nisi <br />
              volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at.
              <br /> Magna nam platea justo.
            </p>
            <Button type="about-us-card-button" destination="/">
              Learn more
            </Button>
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

export default AboutUs;
