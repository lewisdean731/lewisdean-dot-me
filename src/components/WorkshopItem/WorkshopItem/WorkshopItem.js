import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import TextHeader from "../../Texts/TextHeader/TextHeader";
import TextParagraph from "../../Texts/TextParagraph/TextParagraph";
import Aux from "../../../hoc/Aux";
import Classes from "./WorkshopItem.module.scss";
import TextSubheader from "../../Texts/TextParagraph/TextParagraph";

const WorkshopItem = props => {
  return (
    <div className={Classes.WorkshopItem}>
      <Row>
        <Col className={Classes.SketchfabEmbed}>
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
        <Col>
          <TextHeader>{props.title}</TextHeader>
          <TextParagraph>
            {props.description}
            <hr />

          </TextParagraph>
          <Button className={Classes.Button} href={props.steam_link}>
            {props.steam_link_description}
          </Button>
        </Col>
      </Row>
      <Row>

      </Row>
    </div>
  );
};

export default WorkshopItem;
