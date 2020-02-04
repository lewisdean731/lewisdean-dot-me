import React from 'react';
import {Row, Col} from 'react-bootstrap';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';


const NavigationItems = (props) => {

    return (
        <Row className={classes.NavigationItems}>
            <Col md/>
            <NavigationItem clicked={props.clicked} link="#" active={props.active}>About</NavigationItem>
            <NavigationItem clicked={props.clicked} link="#" active={props.active}>two</NavigationItem>
            <NavigationItem clicked={props.clicked} link="#" active={props.active}>Workshop</NavigationItem>
            <NavigationItem clicked={props.clicked} link="#" active={props.active}>four</NavigationItem>
            <Col md/>
        </Row>
    );
}

export default NavigationItems;