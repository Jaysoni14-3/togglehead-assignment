import "./subscribe.css";

import rightArrow from "../../assets/hero-button-icon.png";
import subscribeImage from "../../assets/subscribe-bg.png";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="text-container">
        <h2>Subscribe</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <div className="input-container">
          <input type="text" placeholder="Enter your Email Address" />
          <button className="button subscribe-button">
            Subscribe Now{" "}
            <img width={13} height={15} src={rightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
      <div className="img-container">
        <img
          src={subscribeImage}
          alt="image that represents an email being sent"
        />
      </div>
    </section>
  );
};

export default Subscribe;
