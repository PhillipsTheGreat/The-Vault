import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

import DanmachiCover from "../../Images/DanmachiCover.jpg";
import ArifuretaCover from "../../Images/ArifuretaCover.jpg";
import DemonSlayerCover from "../../Images/DemonSlayerCover.jpg";
import DrStoneCover from "../../Images/Dr.StoneCover.jpg";


function HomePage() {
  return (
    <div className="HomePageContainer">
      <div className="ShowCard">
        <Link to="./series/Danmachi">
          <img src={DanmachiCover} ALT="Danmachi" width="114" height="148" />
          Danmachi
        </Link>
      </div>
      <Link to="./series/DemonSlayer">
        <div className="ShowCard">
          <img src={DemonSlayerCover} ALT="DemonSlayer" width="114" height="148" />
          DemonSlayer
          </div>
      </Link>
      <a href="./series/DrStone">
        <div className="ShowCard">
          <img src={DrStoneCover} ALT="Dr.Stone" width="114" height="148" />
          Dr.Stone
          </div>
      </a>
      <a href="./series/Arifureta">
        <div className="ShowCard">
          <img src={ArifuretaCover} ALT="Arifureta" width="114" height="148" />
          Arifureta
          </div>
      </a>
    </div>
  );
}

export default HomePage;