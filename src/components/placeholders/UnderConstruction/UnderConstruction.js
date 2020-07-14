import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextHeader from "../../Texts/TextHeader/TextHeader";
import TextParagraph from "../../Texts/TextParagraph/TextParagraph";
import Classes from "./UnderConstruction.module.scss";

const UnderConstruction = () => {
  return (
    <Container>
      <Row className={Classes.UnderConstruction}>
        <Col>
          <p className={Classes.Icon} href="#">
            <FontAwesomeIcon icon={"tools"} />
          </p>
          <TextHeader>Under Construction</TextHeader>
          <TextParagraph>
            <hr />
            <br />
            <br />
            Check back soon to see what's here.
          </TextParagraph>
        </Col>
      </Row>
    </Container>
  );
};

export default UnderConstruction;
