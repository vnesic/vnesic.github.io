import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function TextImageElem(prop){

    return(

        <Container>
            <Row>
            <h1>
                {prop.text}
            </h1>
            <img
                src={prop.logo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Row>
        </Container>
    );

}

export default TextImageElem