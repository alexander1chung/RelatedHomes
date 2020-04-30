/* eslint-disable react/prop-types */
import React from 'react';
import { SingleHome, BedsAndHouse, Description, PricePerNight, Rating } from './Styles';


const OneHome = ({ home }) => (
  <SingleHome onClick={() => window.open(`/${home.location}`)}>
    <div>
      <img src={home.photo} width="320" height="240" alt={home.id} />
    </div>
    <div>
      <BedsAndHouse>{home.beds}</BedsAndHouse>
      <Rating>&#11088;{home.rating}</Rating>
    </div>
    <div style={{ "clear": "both" }} />
    <Description>{home.description}</Description>
    <div style={{ "clear": "both" }}></div>
    <PricePerNight>{home.price} / night</PricePerNight>
  </SingleHome>
);

export default OneHome;
