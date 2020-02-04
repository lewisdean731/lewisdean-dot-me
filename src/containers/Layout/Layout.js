import React, { Component } from 'react';
import BannerWelcome from '../../components/BannerTexts/BannerWelcome/BannerWelcome';
import TextCentrepiece from '../../components/Texts/TextCenterpiece/TextCenterpiece';
import {Row, Col} from 'react-bootstrap';
import Toolbar from '../../components/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';

class Layout extends Component {

    state = {
        activenavItem: "two"
    }

    ActiveContent = () => {
        if (this.state.activenavItem === "one") {
            return <TextCentrepiece text={"one"}></TextCentrepiece>;
        }
        else if (this.state.activenavItem === "two") {
            return <TextCentrepiece text={"two"}></TextCentrepiece>;

        }
        else {
            return <TextCentrepiece text={"uh oh"}></TextCentrepiece>;

        }
    }

    NavigationItemClickHandler = (event) => {
        console.log('nav item clicked:')
        console.log(event)
        this.setState( {activenavItem: event} );
    }

    render() {
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

                </Aux>
            </Aux>
        );
    }

}

export default Layout;