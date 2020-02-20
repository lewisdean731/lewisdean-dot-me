import React from 'react';
import Classes from './TextSubheader.module.scss';

const TextSubheader = (props) => {
    return (
        <div>
            <p className={Classes.TextSubheader}>{props.text}</p>
        </div>
    )
}

export default TextSubheader;