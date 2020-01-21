import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';


class NavigationItems extends Component {


    render() {
        return (
            <Row>
                <ul className={classes.NavigationItems}>
                    <NavigationItem link="/" active>one</NavigationItem>
                    <NavigationItem link="/">two</NavigationItem>
                    <NavigationItem link="/">three</NavigationItem>
                    <NavigationItem link="/">four</NavigationItem>
                </ul>
            </Row>
        );
    }
}

export default NavigationItems;