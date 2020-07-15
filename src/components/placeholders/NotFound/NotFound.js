import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextHeader from "../../Texts/TextHeader/TextHeader";
import TextParagraph from "../../Texts/TextParagraph/TextParagraph";
import Classes from "../UnderConstruction/UnderConstruction.module.scss";

const NotFound = () => {
  return (
    <Container>
      <Row className={Classes.UnderConstruction}>
        <Col>
          <p className={Classes.Icon} href="#">
            <FontAwesomeIcon icon={"exclamation-triangle"} />
          </p>
          <TextHeader>Content Not Found!</TextHeader>
          <TextParagraph>
            <hr />
            <br />
            something went wrong.
          </TextParagraph>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
