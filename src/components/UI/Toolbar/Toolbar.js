import React from "react";
import classes from "./Toolbar.module.scss";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const toolbar = props => (
  <nav className={[classes.DesktopOnly, classes.Toolbar].join(" ")}>
    <NavigationItems
      active={props.active}
      clicked={props.clicked}
    ></NavigationItems>
  </nav>
);

export default toolbar;
