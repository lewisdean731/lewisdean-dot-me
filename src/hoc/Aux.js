import React from 'react';
import Classes from '../App.module.scss';

const Aux = (props) => {
    return(
    <Container-fluid className={Classes.App}>
        {props.children}
    </Container-fluid>
    )
}

export default Aux;