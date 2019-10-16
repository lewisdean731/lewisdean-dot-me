import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SteamWorkshopItem.css'

const steamWorkshopItem = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="bottom" src={props.image} />
      <Card.Body>
        <Card.Title><p> I'm a Steam Workshop item!{props.title}</p></Card.Title>
        <Card.Text>
          <p>{props.summary}</p>
          <p>{props.views}</p>
          <p>{props.subscribers}</p>
          <p>{props.favourites}</p>
        </Card.Text>
        <Button onClick={props.clickAction} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default steamWorkshopItem;
