import React from 'react';
import Classes from './BannerWelcome.module.scss';

const BannerWelcome = (props) => {
    return (
        <h1 className={[
            Classes.Title,
            Classes.Box].join(' ')}>
            {props.text}
        </h1>
    )
}

export default BannerWelcome;