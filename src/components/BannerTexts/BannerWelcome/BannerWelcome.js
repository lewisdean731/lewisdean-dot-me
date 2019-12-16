import React from 'react';
import Classes from './BannerWelcome.module.scss';

const BannerWelcome = (props) => {
    return (
        <h1 className={[
            Classes.White,
            Classes.Title,
            Classes.BoxSkewed,
            Classes.BoxBlue].join(' ')}>
            {props.text}
        </h1>
    )
}

export default BannerWelcome;