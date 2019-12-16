import React from 'react';
import Classes from './TextCenterpiece.module.scss';

const TextCenterpiece = (props) => {
    return (
        <div>
            <p className={Classes.TextCenterpiece}>{props.text}</p>
        </div>
    )
}

export default TextCenterpiece;