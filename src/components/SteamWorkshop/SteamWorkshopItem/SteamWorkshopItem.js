import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import classes from './SteamWorkshopItem.module.css';

const steamWorkshopItem = (props) => {
  return (
    <Card className={classes.SteamWorkshopItem} onClick={props.clickAction}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title><p> I'm a Steam Workshop item!{props.title}</p></Card.Title>
        <Card.Text>
          <p>{props.summary}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <p>{props.views}</p>
        </ListGroupItem>
        <ListGroupItem>
          <p>{props.subscribers}</p>
        </ListGroupItem>
        <ListGroupItem>
          <p>{props.favourites}</p>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default steamWorkshopItem;

