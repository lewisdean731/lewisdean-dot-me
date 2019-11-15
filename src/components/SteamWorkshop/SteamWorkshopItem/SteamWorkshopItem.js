import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import classes from './SteamWorkshopItem.module.css';

const steamWorkshopItem = (props) => {
  return (
    <div className={classes.SteamWorkshopItem}>
      <div className={classes.Inner}>
        <div className={classes.Front}>
          <img
            alt="Workshop Item"
            src="holder.js/100px100p?auto=yes&text=Workshop Image cap"
          />
        </div>
        <div className={classes.Backing}>
          <Card className={classes.BackingCard} onClick={props.clickAction}>
            <Card.Body>
              <Card.Title>
                <p>{props.title}</p>
              </Card.Title>
              <hr />
              <Card.Text>
                <p>{props.summary}</p>
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroupItem>
                <p>{props.views}</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>{props.subscribers}</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>{props.favourites}</p>
              </ListGroupItem>
              <ListGroupItem>
                <Button variant="primary">View on Workshop</Button>
              </ListGroupItem>
            </ListGroup>

          </Card>
        </div>
      </div>


    </div>

  );
}

export default steamWorkshopItem;

