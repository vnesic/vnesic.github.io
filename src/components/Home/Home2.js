import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageRow from "../PageElements/ImageRow";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <ImageRow/>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
