import { ImageOpen } from "../../components";
import { GalleryOne, GalleryThree, GalleryTwo } from "../../img/home/gallery";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-wrap">
        <div className="gallery-block-left">
          <h1>Our Gallery</h1>
          <ImageOpen src={GalleryOne} />
        </div>
        <div className="gallery-block-right">
          <div className="gallery-block-right-img">
            <ImageOpen src={GalleryTwo} />
          </div>
          <div className="gallery-block-right-img">
            <ImageOpen src={GalleryThree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
