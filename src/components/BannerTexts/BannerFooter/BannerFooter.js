import React from "react";
import { Row, Col } from "react-bootstrap";
import Classes from "./BannerFooter.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BannerFooter = props => {
  return (

<footer className={[Classes.Footer, Classes.Box].join(" ")}>
  <Row>
   <Col>
      <a className={Classes.Icon}>
        <FontAwesomeIcon icon={['fab', 'github']}/>
      </a>
      <a className={Classes.Icon}>
        <FontAwesomeIcon icon={['fab', 'steam']}/>
      </a>
      <a className={Classes.Icon}>
        <FontAwesomeIcon icon={['fab', 'discord']}/>
      </a>
      <a className={Classes.Icon}>
        <FontAwesomeIcon icon={'cube'}/>
      </a>
    </Col>
  </Row>
  <div class="footer-copyright text-center py-3">
    <p>© 2020 Copyright</p>
    <p>Lewis Dean</p>
  </div>
</footer>
  );
};

export default BannerFooter;
