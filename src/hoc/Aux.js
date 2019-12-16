import React from 'react';
const Aux = (props) => {
    return(
    <Container-fluid className={props.className}>
        {props.children}
    </Container-fluid>
    )
}

export default Aux;