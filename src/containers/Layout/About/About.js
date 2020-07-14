import React from "react";
import { Row, Col } from "react-bootstrap";
import TextSubheader from "../../../components/Texts/TextSubheader/TextSubheader";
import TextHeader from "../../../components/Texts/TextHeader/TextHeader";
import TextParagraph from "../../../components/Texts/TextParagraph/TextParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Classes from "./About.module.scss";
import Aux from "../../../hoc/Aux";

const about = () => {
  return (
    <div>
      <Row>
        <Col>
          <TextHeader>About</TextHeader>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextSubheader>Personal Profile</TextSubheader>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={8}>
          <TextParagraph FullWidth>
            Originally from Cornwall, I moved to Bournemouth to study Software
            Engineering in 2017. I'm currently working as part of an agile
            development team at UKCloud for my industrial placement year, and
            thoroughly enjoying it! I am passionate about the work I do, as well
            as the technologies we all use to drive change in the industry.
          </TextParagraph>
          <TextParagraph FullWidth>
            Through university, work, and personal development time I have
            gained experience using a variety of different languages, tools and
            technologies, as varied as TypeScript and React to Bash / Shell
            scripting with Jenkins pipelines and Red Hat SSO. I also have
            experience with the atlassian suite of tools (Bitbucket, Bamboo,
            Confluence, and Jira).
          </TextParagraph>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default about;
