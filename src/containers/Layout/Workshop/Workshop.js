import React from "react";
import { Row, Col } from "react-bootstrap";
import Aux from "../../../hoc/Aux";
import TextHeader from "../../../components/Texts/TextHeader/TextHeader";
import WorkshopItem from "../../../components/WorkshopItem/WorkshopItem/WorkshopItem";

const workshop = () => {
  return (
    <div>
      <Row>
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
        steam_link_description="Download for Transport Fever 2"
      />
      <br />
      <WorkshopItem
        title="British Rail Class 321 EMU"
        sketchfab_link="https://sketchfab.com/models/6d7e4c6b55d0458e9b31f186f01111ca/embed"
        steam_link="https://steamcommunity.com/sharedfiles/filedetails/?id=1979055477"
        description="The British Rail Class 321 alternating current (AC)
        electric multiple units (EMU) were built by British Rail Engineering
        Limited's York Works in three batches between 1988 and 1991. The design
        was successful and led to the development of the similar Class 320 and
        Class 322."
        steam_link_description="Download for Transport Fever 2"
      />
    </div>
  );
};

export default workshop;
