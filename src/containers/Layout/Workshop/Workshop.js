import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SteamWorkshopItem from '../../../components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem'
import Aux from '../../../hoc/Aux'

const workshop = () => {
  return (
    <Aux>
      <Row>
        <Col>
            <h1> Workshop </h1>
        </Col>
      </Row>
      <SteamWorkshopItem
          clickAction='clickAction'
          image={'imagex'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}
      />
    </Aux>

  );
}

export default workshop;

