import React from 'react';

import './SteamWorkshopItem.css'

const steamWorkshopItem = (props) => {
  return (
    <div className="SteamWorkshopItem" onClick={props.clickAction}>
      <p> I'm a Steam Workshop item!</p>
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.summary}</p>
      <p>{props.views}</p>
      <p>{props.subscribers}</p>
      <p>{props.favourites}</p>
    </div>
  );
}

export default steamWorkshopItem;
