import { Image, Row, Col } from "react-bootstrap";
import ScrollTriggeredSection from "../Body/ScrollSection";
import { useDarkMode } from "../Body/DarkModeContext.js";

const Works = (prop) => {
  const isDarkMode = useDarkMode();

  return (
    <ScrollTriggeredSection sectionId={"third-section"}>
      <div>
        <h1 className={`works-title ${isDarkMode ? "" : "light-text"}`}>
          Works
        </h1>
        <Row>
          <Col lg={6}>
            <Image
              width={"90%"}
              src="https://semahriahi.netlify.app/MyCaat.32d27d39.png"
              className="web-image"
              alt="download"
              layout="responsive"
            />
          </Col>
          <Col lg={6}>
            <Image
              width={"90%"}
              src="https://semahriahi.netlify.app/gestionstudint.9f87969f.png"
              className="web-image"
              alt="coffee"
              layout="responsive"
            />
          </Col>
          <Col lg={6}>
            <Image
              width={"90%"}
              src="https://semahriahi.netlify.app/challangeCom.28db15e2.png"
              className="web-image mt-5 third-image"
              alt="PDPL-image"
              layout="responsive"
            />
          </Col>{" "}
          <Col lg={6}>
            <Image
              width={"90%"}
              src="https://semahriahi.netlify.app/chatBot.5db289ef.png"
              className="web-image mt-5 third-image"
              alt="PDPL-image"
              layout="responsive"
            />
          </Col>{" "}
          <Col lg={6}>
            <Image
              width={"90%"}
              src="https://semahriahi.netlify.app/communFr.ae9eda4b.png"
              className="web-image mt-5 third-image"
              alt="PDPL-image"
              layout="responsive"
            />
          </Col>{" "}
          <Col lg={6}>
            <Image
              width={"90%"}
              src="https://semahriahi.netlify.app/tuntechStor.cf8d857e.png"
              className="web-image mt-5 third-image"
              alt="PDPL-image"
              layout="responsive"
            />
          </Col>
        </Row>
      </div>
    </ScrollTriggeredSection>
  );
};

export default Works;
