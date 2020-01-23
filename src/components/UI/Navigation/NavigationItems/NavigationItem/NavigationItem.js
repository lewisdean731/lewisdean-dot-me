import React from 'react';
import classes from './NavigationItem.module.scss';
import { Col } from 'react-bootstrap';
import Aux from '../../../../../hoc/Aux';

const navigationItem = (props) => (
    <Col sm="2" className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}
        >
            {props.children}
        </a>
    </Col>
);

export default navigationItem