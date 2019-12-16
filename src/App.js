import React, { Component } from 'react';

import classes from './App.module.css';
import Aux from './hoc/Aux';
import SteamWorkshopItem from './components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <Aux>
        <Landing text={'Welcome'}></Landing>
        <div className={classes.App}>
          <SteamWorkshopItem
            clickAction='clickAction'
            image={'imagex'}
            title={'title'}
            summary={'summary'}
            views={'views'}
            subscribers={'subscirbers'}
            favourites={'favourites'}
          />
        </div>
      </Aux>


    );
  }
}

export default App;
