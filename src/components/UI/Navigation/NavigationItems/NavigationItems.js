import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';


class NavigationItems extends Component {


    render() {
        return (
            <Row className={classes.NavigationItems}>
                <Col md/>
                <NavigationItem link="/" active>one</NavigationItem>
                <NavigationItem link="/">two</NavigationItem>
                <NavigationItem link="/">three</NavigationItem>
                <NavigationItem link="/">four</NavigationItem>
                <Col md/>
            </Row>
        );
    }
}

export default NavigationItems;