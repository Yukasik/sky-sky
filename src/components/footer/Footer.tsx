import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-block-left">
          <input
            type="text"
            placeholder="Your email address"
            className="footer-block-left-input"
          ></input>
        </div>
        <div className="footer-block-right">
          <div className="footer-navigation-company">
            <h1>Company</h1>
            <ul className="footer-items">
              <li className="footer-item">
                <Link to="/about us" className="footer-item-link">
                  About us
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-item-link">
                  Blog
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-item-link">
                  Contact us
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-item-link">
                  Pricing
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-item-link">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-navigation-support">
            <h1>Support</h1>
            <ul className="footer-items">
              <li className="footer-item">Help center</li>
              <li className="footer-item">Terms of service</li>
              <li className="footer-item">Legal</li>
              <li className="footer-item">Privacy policy</li>
              <li className="footer-item">Status</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
