import React, { Component } from "react";
import Classes from "./Layout.module.scss";
import BannerHeader from "../../components/BannerTexts/BannerHeader/BannerHeader";
import BannerFooter from "../../components/BannerTexts/BannerFooter/BannerFooter";
import TextHeader from "../../components/Texts/TextHeader/TextHeader";
import UnderConstruction from "../../components/placeholders/UnderConstruction/UnderConstruction";
import { Row, Col } from "react-bootstrap";
import Toolbar from "../../components/UI/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";

// Layouts
import About from "./About/About";
import Workshop from "./Workshop/Workshop";

class Layout extends Component {
  state = {
    activenavItem: "About"
  };

  ActiveContent = () => {
    switch (this.state.activenavItem) {
      case "About":
        return <About />;
      case "Experience":
        return <UnderConstruction />;
      case "Workshop":
        return <Workshop />;
      case "Statistics":
        return <UnderConstruction />;
      case "Contact":
        return <UnderConstruction />;
      default:
        return <TextHeader text={"Content not found..."}></TextHeader>;
    }
  };

  NavigationItemClickHandler = event => {
    console.log("nav item clicked: " + event);
    this.setState({ activenavItem: event });
  };

  render() {
    let activeContent = this.ActiveContent();

    return (
      <body>
        <Aux>
          <Row>
            <Col>
              <BannerHeader text={"Lewis Dean"}></BannerHeader>
            </Col>
          </Row>
          <Row>
            <Toolbar
              clicked={this.NavigationItemClickHandler}
              active={this.state.activenavItem}
            ></Toolbar>
          </Row>
          <br />
          <Row className={Classes.FillParentHeight}>
            <Col md={2} className={Classes.ColPadding}></Col>
            <Col md>
              <Row>{activeContent}</Row>
            </Col>
            <Col md={2} className={Classes.ColPadding}></Col>
          </Row>
        </Aux>
        <Row>
          <BannerFooter text={"Test"}></BannerFooter>
        </Row>
      </body>
    );
  }
}

export default Layout;
