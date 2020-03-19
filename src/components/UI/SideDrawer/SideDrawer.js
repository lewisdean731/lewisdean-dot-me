import React from 'react';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';
import classes from './SideDrawer.module.scss';
import Aux from '../../../hoc/Aux';

/* <Backdrop show={props.open} clicked={props.closed}/> */

const sideDrawer = (props) => {
    let attachedClasses= [classes.SideDrawer, classes.Open]
    if (props.open) {
        attachedClasses= [classes.SideDrawer, classes.Open]
    }
    return (
        <div className={attachedClasses.join (' ')}>
            <nav>
            <NavigationItem clicked={props.clicked} link="#" active={props.active}>
        About
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="#" active={props.active}>
        two
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="#" active={props.active}>
        Workshop
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="#" active={props.active}>
        four
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="#" active={props.active}>
        Contact
      </NavigationItem>
            </nav>
        </div>

    );
};

export default sideDrawer;