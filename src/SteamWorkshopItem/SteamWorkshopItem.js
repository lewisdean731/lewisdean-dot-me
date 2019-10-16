import React from 'react';
import Card from 'react-bootstrap/Card';
import './SteamWorkshopItem.css'

const steamWorkshopItem = (props) => {
  return (
    <Card className="bg-dark text-white SteamWorkshopItem" onClick={props.clickAction}>
      <Card.Img src={props.image} alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title><p> I'm a Steam Workshop item!{props.title}</p></Card.Title>
        <Card.Text>
          <p>{props.summary}</p>
          <p>{props.views}</p>
          <p>{props.subscribers}</p>
          <p>{props.favourites}</p>
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default steamWorkshopItem;
