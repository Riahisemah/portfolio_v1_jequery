import { Image, Row, Col } from "react-bootstrap";
import { BsDiscord } from "react-icons/bs";
import { FaYoutube, FaCcPaypal, FaGithub, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useDarkMode } from "../Body/DarkModeContext.js";

const Header = () => {
  const isDarkMode = useDarkMode();

  return (
    <div className="info">
      <Image
        src="/logo512.png"
        className={`animate__animated animate__backInDown logo ${
          isDarkMode ? "" : "logo-light"
        }`}
        alt="Image"
      />
      <Row className="social-icons">
        <Col
          className="first-social-icons-xs"
          lg={6}
          sm={6}
          xs={12}
          style={{ textAlign: "right" }}
        >
          <a
            href="https://twitter.com/"
            rel="noreferrer"
            target="_blank"
            className="social-button"
          >
            <FaSquareXTwitter
              className={`animate__animated animate__backInLeft social-logo ${
                isDarkMode ? "" : "social-logo-light"
              } `}
            />
          </a>
          <a
            href="https://www.tiktok.com/"
            rel="noreferrer"
            target="_blank"
            className="social-button"
          >
            <FaTiktok
              className={`animate__animated animate__backInLeft social-logo ${
                isDarkMode ? "" : "social-logo-light"
              } `}
            />
          </a>
          <a
            href="https://discord.gg/"
            rel="noreferrer"
            target="_blank"
            className="social-button"
          >
            <BsDiscord
              className={`animate__animated animate__backInUp social-logo ${
                isDarkMode ? "" : "social-logo-light"
              } `}
            />
          </a>
        </Col>
        <Col
          className="second-social-icons-xs"
          lg={6}
          sm={6}
          xs={12}
          style={{ textAlign: "left" }}
        >
          <a
            href="https://www.youtube.com/"
            rel="noreferrer"
            target="_blank"
            className="social-button"
          >
            <FaYoutube
              className={`animate__animated animate__backInRight social-logo ${
                isDarkMode ? "" : "social-logo-light"
              } `}
            />
          </a>
          <a
            href="https://www.paypal.com/"
            rel="noreferrer"
            target="_blank"
            className="social-button"
          >
            <FaCcPaypal
              className={`animate__animated animate__backInRight social-logo ${
                isDarkMode ? "" : "social-logo-light"
              } `}
            />
          </a>
          <a
            href="https://github.com/Riahisemah"
            rel="noreferrer"
            target="_blank"
            className="social-button"
          >
            <FaGithub
              className={`animate__animated animate__backInRight social-logo ${
                isDarkMode ? "" : "social-logo-light"
              } `}
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
