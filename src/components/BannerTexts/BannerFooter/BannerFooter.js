import React from "react";
import { Row, Col } from "react-bootstrap";
import Classes from "./BannerFooter.module.scss";

const BannerHeader = props => {
  return (
    <Row className={[Classes.Title, Classes.Box].join(" ")}>
      <p>Copyright 2020 Lewis Dean</p>
    </Row>

  );
};

export default BannerHeader;
