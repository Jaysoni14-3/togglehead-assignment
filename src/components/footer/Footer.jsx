import "./footer.css";

import footerBg from "../../assets/footer-bg.png";

import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import quoraIcon from "../../assets/quora.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";

import clockIcon from "../../assets/clock.png";
import locationIcon from "../../assets/location.png";
import trainIcon from "../../assets/train.png";

const Footer = () => {
  const socialIcons = [
    { icon: facebookIcon },
    { icon: linkedinIcon },
    { icon: instagramIcon },
    { icon: twitterIcon },
    { icon: youtubeIcon },
    { icon: quoraIcon },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="contact-us-details">
              <p>Address: amet, consetetur sadipscing elitr, sed diam </p>
              <p>Email id: eirmod tempor invidunt ut labore et dolore </p>
              <p>Phone no: 123456789 </p>
            </div>
          </div>
          <div className="Follow-us">
            <h2>Follow Us</h2>
            <div className="Follow-us-details">
              {socialIcons.map((socialIcon, id) => (
                <img
                  className="social-icon-image"
                  key={id}
                  src={socialIcon.icon}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="office">
            <h2>Head Office</h2>
            <div className="office-details">
              <div>
                <img src={locationIcon} alt="location icon" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut{" "}
                </p>
              </div>
              <div>
                <img src={clockIcon} alt="clock icon" />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </div>
              <div>
                <img src={clockIcon} alt="clock icon" />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </div>
              <div>
                <img src={trainIcon} alt="train icon" />
                <p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg-image">
          <img src={footerBg} alt="footer bg" />
        </div>
      </footer>
      <div className="copyright">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
