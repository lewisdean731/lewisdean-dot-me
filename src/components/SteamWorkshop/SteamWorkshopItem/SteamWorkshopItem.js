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
          <Card className={classes.BackingCard} >
            <Card.Body>
              <Card.Title>
                {props.title}
              </Card.Title>
              <hr />
              <Card.Text>
                {props.summary}
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroupItem>
                {props.views}
              </ListGroupItem>
              <ListGroupItem>
                {props.subscribers}
              </ListGroupItem>
              <ListGroupItem>
                {props.favourites}
              </ListGroupItem>
              <ListGroupItem>
                <Button onClick={props.clickAction} variant="primary">View on Workshop</Button>
              </ListGroupItem>
            </ListGroup>

          </Card>
        </div>
      </div>
    </Row>

  );
}

export default steamWorkshopItem;

