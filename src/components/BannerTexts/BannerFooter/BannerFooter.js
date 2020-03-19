import React from "react";
import Classes from "./BannerFooter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

const BannerFooter = props => {
  return (
    <Col>
      <footer className={[Classes.Footer, Classes.Box].join(" ")}>
        <a className={Classes.Icon} href="#">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a className={Classes.Icon} href="#">
          <FontAwesomeIcon icon={["fab", "steam"]} />
        </a>
        <a className={Classes.Icon} href="#">
          <FontAwesomeIcon icon={["fab", "discord"]} />
        </a>
        <a className={Classes.Icon} href="#">
          <FontAwesomeIcon icon={"cube"} />
        </a>
        <div>
          <p>© 2020 Copyright</p>
          <p>Lewis Dean</p>
        </div>
      </footer>
    </Col>
  );
};

export default BannerFooter;
