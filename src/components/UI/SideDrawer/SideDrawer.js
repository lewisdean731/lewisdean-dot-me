import React from "react";
import NavigationItem from "../Navigation/NavigationItems/NavigationItem/NavigationItem";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

/* <Backdrop show={props.open} clicked={props.closed}/> */

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Open];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  } else {
    attachedClasses = [classes.SideDrawer, classes.Close];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
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
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
