import React from 'react';
import BannerWelcome from '../../components/BannerTexts/BannerWelcome/BannerWelcome';
import TextCentrepiece from '../../components/Texts/TextCenterpiece/TextCenterpiece';
import {Row, Col} from 'react-bootstrap';
import Toolbar from '../../components/Toolbar/Toolbar';

const landing = (props) => {
    return (
        <Container-fluid>
            <Row>
                <Col>
                    <BannerWelcome text={"Lewis Dean"}></BannerWelcome>
                </Col>
            </Row>
            <Row>
                <Toolbar></Toolbar>
            </Row>
            <Row>
                <Col>
                    <TextCentrepiece text={"can a file or env var go here?"}></TextCentrepiece>
                </Col>
            </Row>
        </Container-fluid>
    )
}

export default landing;