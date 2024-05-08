import {
  Catalog,
  Gallery,
  Information,
  Initial,
  Map,
  Products,
  Services,
  Video,
} from "../../blocks";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Initial />
      <Services />
      <Catalog />
      <Gallery />
      <Products />
      <Information />
      <Video />
      <Map />
    </div>
  );
};

export default Home;
