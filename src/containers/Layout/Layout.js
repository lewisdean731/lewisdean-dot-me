import React, { Component } from 'react';
import BannerWelcome from '../../components/BannerTexts/BannerWelcome/BannerWelcome';
import TextCentrepiece from '../../components/Texts/TextCenterpiece/TextCenterpiece';
import {Row, Col} from 'react-bootstrap';
import Toolbar from '../../components/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';

// Layouts
import About from './About/About'
import Workshop from './Workshop/Workshop'

class Layout extends Component {

    state = {
        activenavItem: "two"
    }

    ActiveContent = () => {

        switch (this.state.activenavItem) {
            case "About":
                return <About />;
            case "two":
                return <TextCentrepiece text={"two"}></TextCentrepiece>;
            case "Workshop":
                return <Workshop />;
            case "four":
                return <TextCentrepiece text={"four"}></TextCentrepiece>;
            default:
                return <TextCentrepiece text={"Content not found..."}></TextCentrepiece>;
        }
    }

    NavigationItemClickHandler = (event) => {
        console.log('nav item clicked: ' + event)
        this.setState( {activenavItem: event} );
    }

    render() {

        let activeContent = this.ActiveContent();

        return (
            <Aux>
                <Container-fluid>
                    <Row>
                        <Col>
                            <BannerWelcome text={"Test"}></BannerWelcome>
                        </Col>
                    </Row>
                    <Row>
                        <Toolbar clicked={this.NavigationItemClickHandler} active={this.state.activenavItem}></Toolbar>
                    </Row>
                    <Row>
                        <Col>
                            <TextCentrepiece text={"can a file or env var go here?"}></TextCentrepiece>
                        </Col>
                    </Row>
                </Container-fluid>
                <Aux>
                    {activeContent}
                </Aux>
            </Aux>
        );
    }

}

export default Layout;