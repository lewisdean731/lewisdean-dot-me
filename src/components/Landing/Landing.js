import React from 'react';
import classes from './Landing.module.css';

const landing = (props) => {
    return (
        <div>
            <h3 className={classes.Red}>{props.text}</h3>
        </div>
    )

}

export default landing;