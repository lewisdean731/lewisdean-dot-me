import React from 'react';
import Classes from './BannerWelcome.module.css';

const BannerWelcome = (props) => {
    return (
        <div>
            <h3 className={Classes.Red}>{props.text}</h3>
        </div>
    )
}

export default BannerWelcome;