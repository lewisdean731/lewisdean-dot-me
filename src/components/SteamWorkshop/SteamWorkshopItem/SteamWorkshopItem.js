import React from 'react';
import {Row, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import classes from './SteamWorkshopItem.module.scss';

const steamWorkshopItem = (props) => {
  return (
    <Row className={classes.SteamWorkshopItem}>
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
    </Row>

  );
}

export default steamWorkshopItem;

