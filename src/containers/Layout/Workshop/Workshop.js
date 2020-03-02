import React from "react";
import { Row, Col } from "react-bootstrap";
import Aux from "../../../hoc/Aux";
import TextHeader from "../../../components/Texts/TextHeader/TextHeader";
import WorkshopItem from "../../../components/WorkshopItem/WorkshopItem/WorkshopItem";

const workshop = () => {
  return (
    <Aux>
      <Row>
        <Col>
        </Col>
      </Row>
      <WorkshopItem
        title="British Rail Mk3 Coach"
        sketchfab_link="https://sketchfab.com/models/6fe5bf5e779749f29c2cdd23af32ba99/embed"
        steam_link="https://steamcommunity.com/sharedfiles/filedetails/?id=1979055477"
        description="Originally conceived as locomotive-hauled coaching stock,
        the first coaches built were for the prototype HST in 1972. Production
        coaches entered service between 1975 and 1988, and multiple-unit
        esigns based on the Mark 3 bodyshell continued to be built until the
        early 1990s. Most of the surviving fleet of the Mark 3 and its
        derivatives are still in revenue service on the British railway
        network in 2020."
        steam_link_description="Available as a mod for the game Transport Fever 2."
      />
      <br />
      <WorkshopItem
        title="British Rail Mk3 Coach"
        sketchfab_link="https://sketchfab.com/models/6fe5bf5e779749f29c2cdd23af32ba99/embed"
        steam_link="https://steamcommunity.com/sharedfiles/filedetails/?id=1979055477"
        description="Originally conceived as locomotive-hauled coaching stock,
        the first coaches built were for the prototype HST in 1972. Production
        coaches entered service between 1975 and 1988, and multiple-unit
        esigns based on the Mark 3 bodyshell continued to be built until the
        early 1990s. Most of the surviving fleet of the Mark 3 and its
        derivatives are still in revenue service on the British railway
        network in 2020."
        steam_link_description="Available as a mod for the game Transport Fever 2."
      />
    </Aux>
  );
};

export default workshop;
