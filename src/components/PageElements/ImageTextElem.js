import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function ImageElem(prop){

    return(

        <Container>
            <Row>
            <img
                src={prop.logo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <h1>
                {prop.text}
              </h1>
            </Row>
        </Container>
    );

}

export default ImageElem