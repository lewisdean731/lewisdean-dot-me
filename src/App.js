import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import classes from './App.module.css';
import SteamWorkshopItem from './components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem';

class App extends Component {
  render() {
    return (

      <div className={classes.App}>
        <container>
          <SteamWorkshopItem
            clickAction='clickAction'
            image={'imagex'}
            title={'title'}
            summary={'summary'}
            views={'views'}
            subscribers={'subscirbers'}
            favourites={'favourites'}
          />
          <SteamWorkshopItem
            clickAction='clickAction'
            image={'imagex'}
            title={'title'}
            summary={'summary'}
            views={'views'}
            subscribers={'subscirbers'}
            favourites={'favourites'}
          />
        </container>
        <Button variant="primary" size="lg" block>
          Block level button
        </Button>
      </div>

    );
  }
}

export default App;
