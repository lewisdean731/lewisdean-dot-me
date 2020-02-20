import React from "react";
import classes from "./NavigationItem.module.scss";
import { Col } from "react-bootstrap";

const navigationItem = props => (
  <Col sm={1} className={classes.NavigationItem}>
    <a
      href={props.link}
      onClick={() => props.clicked(props.children)}
      className={props.active === props.children ? classes.active : null}
    >
      {props.children}
    </a>
  </Col>
);

export default navigationItem;
