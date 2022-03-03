import { Container, Col, Row } from "react-bootstrap";
import scarabLogo from "./scarab-logo.png";

const styles = {
  container: {
    height: "900px",
    paddingBottom: "0px",
  },
  logoBoxPadding: {
    paddingTop: "50px",
  },
};

export default function Landing() {
  return (
    <div style={{ display: "flex" }}>
      <Container style={styles.container}>
        <div className="main-logo-box" style={styles.logoBoxPadding}>
          <Row>
            <Col className="vertical-center logo-text">Sacred</Col>
            <Col>
              <div className="logobox">
                <div className="logoHelper">
                  <img
                    src={scarabLogo}
                    className="scarab-logo"
                    alt="scarab-logo"
                  />
                </div>
              </div>
            </Col>
            <Col className="vertical-center logo-text">Scarabs</Col>
          </Row>
        </div>
        <Row>
          <Col className="headingText">
            <p>
              The mission of the Sacred Scarabs NFT community and decentralized
              application is to provide crowd-funding to members who are
              actively working towards planetary healing.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="subHeadingText">
            <p>
              {" "}
              View available NFTs available on{" "}
              <a href="https://opensea.io/collection/sacred-scarabs">
                Opensea.io
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
