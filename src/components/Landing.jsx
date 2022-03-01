import { Container, Col, Row } from "react-bootstrap";
import scarabLogo from "./scarab-logo.png";

export default function Landing() {
  return (
    <div>
      <Container fluid>
        <div className="main-logo-box">
          <Row>
            <Col className="vertical-center">Sacred</Col>
            <Col>
              <div className="logobox">
                <img
                  src={scarabLogo}
                  className="scarab-logo"
                  alt="scarab-logo"
                />
              </div>
            </Col>
            <Col className="vertical-center">Scarabs</Col>
          </Row>
        </div>
        <Col>
          <p className="main-paragraph">
            he mission of the Sacred Scarabs NFT community and decentralized
            application is to provide crowd-funding to members who are actively
            working towards planetary healing.
          </p>
          <p>
            {" "}
            View available NFTs available on{" "}
            <a href="https://opensea.io/collection/sacred-scarabs">
              Opensea.io
            </a>
          </p>
        </Col>
      </Container>
    </div>
  );
}
