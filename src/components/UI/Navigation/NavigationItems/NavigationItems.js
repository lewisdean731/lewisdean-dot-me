import React from "react";
import { Row, Col } from "react-bootstrap";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.scss";

const NavigationItems = props => {
  return (
    <Row className={classes.NavigationItems}>
      <Col md />
      <NavigationItem clicked={props.clicked} active={props.active}>
        About
      </NavigationItem>
      <NavigationItem clicked={props.clicked} active={props.active}>
        Experience
      </NavigationItem>
      <NavigationItem clicked={props.clicked} active={props.active}>
        Workshop
      </NavigationItem>
      <NavigationItem clicked={props.clicked} active={props.active}>
        Statistics
      </NavigationItem>
      <NavigationItem clicked={props.clicked} active={props.active}>
        Contact
      </NavigationItem>
      <Col md />
    </Row>
  );
};

export default NavigationItems;
