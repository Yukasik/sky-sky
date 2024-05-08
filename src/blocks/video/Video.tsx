import "./Video.css";

const Video = () => {
  return (
    <div className="video">
      <div className="video-wrap">
        <div className="video-text">
          <h1>
            Video about <br /> us
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco <br /> est sit aliqua dolor
            do amet sint. Velit officia <br /> consequat duis enim velit mollit.
          </p>
        </div>
        <div className="video-media-wrap">
          <div className="video-media">
            <iframe
              title="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/d4FzQe6gBp4?modestbranding=1&rel=0&controls=0"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
