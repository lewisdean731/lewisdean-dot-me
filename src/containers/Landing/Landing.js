import React from 'react';
import BannerWelcome from '../../components/BannerTexts/BannerWelcome/BannerWelcome'

const landing = (props) => {
    return (
        <div>
            <p>Sidebar, Nav</p>
            <BannerWelcome text={"Welcome"}></BannerWelcome>
        </div>
    )

}

export default landing;