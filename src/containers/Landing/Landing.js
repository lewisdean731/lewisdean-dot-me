import React from 'react';
import BannerWelcome from '../../components/BannerTexts/BannerWelcome/BannerWelcome';
import TextCentrepiece from '../../components/Texts/TextCenterpiece/TextCenterpiece';

const landing = (props) => {
    return (
        <Container-fluid>
            <p>Sidebar, Nav</p>
            <BannerWelcome text={"Lewis Dean"}></BannerWelcome>
            <TextCentrepiece text={"can a file or env var go here?"}></TextCentrepiece>
        </Container-fluid>
    )
}

export default landing;