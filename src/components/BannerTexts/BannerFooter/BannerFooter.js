import React from "react";
import Classes from "./BannerFooter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

const BannerFooter = props => {
  return (
    <Col>
      <footer className={[Classes.Footer, Classes.Box].join(" ")}>
        <a className={Classes.Icon} href="https://github.com/lewisdean731">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          className={Classes.Icon}
          href="https://steamcommunity.com/id/flafarflafarflafar"
        >
          <FontAwesomeIcon icon={["fab", "steam"]} />
        </a>
        <a
          className={Classes.Icon}
          href="https://www.linkedin.com/in/lewisdean731/"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a className={Classes.Icon} href="https://sketchfab.com/yung_lenin">
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
