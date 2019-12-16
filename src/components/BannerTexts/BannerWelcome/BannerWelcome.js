import React from 'react';
import Classes from './BannerWelcome.module.scss';

const BannerWelcome = (props) => {
    return (
        <div className={[Classes.Box, Classes.BoxRed].join(' ')}>
            <h1 className={[Classes.White, Classes.Title].join(' ')}>{props.text}</h1>
        </div>
    )
}

export default BannerWelcome;