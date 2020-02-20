import React from "react";
import { Row, Col } from "react-bootstrap";
import TextSubheader from "../../Texts/TextParagraph/TextParagraph";
import TextParagraph from "../../Texts/TextParagraph/TextParagraph";
import Aux from "../../../hoc/Aux";
import classes from "./WorkshopItem.module.scss";

const WorkshopItem = props => {
  return (
    <Aux>
      <Row>
        <Col>
          <TextSubheader>{props.title}</TextSubheader>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="sketchfab-embed-wrapper">
            <iframe
              title={props.title}
              width="100%"
              height="600"
              src={props.sketchfab_link}
              frameBorder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextParagraph>
            {props.description}
            <a href={props.steam_link}>{props.steam_link_description}</a>
          </TextParagraph>
        </Col>
      </Row>
    </Aux>
  );
};

export default WorkshopItem;
