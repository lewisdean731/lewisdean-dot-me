import React, { Component } from "react";
import BannerHeader from "../../components/BannerTexts/BannerHeader/BannerHeader";
import BannerFooter from "../../components/BannerTexts/BannerFooter/BannerFooter";
import TextHeader from "../../components/Texts/TextHeader/TextHeader";
import { Row, Col } from "react-bootstrap";
import Toolbar from "../../components/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";

// Layouts
import About from "./About/About";
import Workshop from "./Workshop/Workshop";

class Layout extends Component {
  state = {
    activenavItem: "two"
  };

  ActiveContent = () => {
    switch (this.state.activenavItem) {
      case "About":
        return <About />;
      case "two":
        return <TextHeader>Two</TextHeader>;
      case "Workshop":
        return <Workshop />;
      case "four":
        return <TextHeader>Four</TextHeader>;
      case "Contact":
        return <TextHeader text={"Contact"}></TextHeader>;
      default:
        return (
          <TextHeader text={"Content not found..."}></TextHeader>
        );
    }
  };

  NavigationItemClickHandler = event => {
    console.log("nav item clicked: " + event);
    this.setState({ activenavItem: event });
  };

  render() {
    let activeContent = this.ActiveContent();

    return (
      <Aux>
        <Row>
          <Col>
            <BannerHeader text={"Test"}></BannerHeader>
          </Col>
        </Row>
        <Row>
          <Toolbar
            clicked={this.NavigationItemClickHandler}
            active={this.state.activenavItem}
          ></Toolbar>
        </Row>
        {activeContent}
        <Row>
          <Col>
            <BannerFooter text={"Test"}></BannerFooter>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Layout;
