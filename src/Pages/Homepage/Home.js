import React from 'react';
import './Home.css';
import { Link, NavLink } from "react-router-dom";

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
          <div className="ShowTitle" >
            Danmachi
          </div>
        </Link>
      </div>
      <div className="ShowCard">
        <Link to="./series/DemonSlayer">
          <img src={DemonSlayerCover} ALT="DemonSlayer" width="114" height="148" />
          <div className="ShowTitle" >
            DemonSlayer
          </div>
        </Link>
      </div>
      <div className="ShowCard">
        <Link to="./series/DrStone">
          <img src={DrStoneCover} ALT="Dr.Stone" width="114" height="148" />
          <div className="ShowTitle" >
            Dr.Stone
          </div>
        </Link>
      </div>
      <div className="ShowCard">
        <Link to="./series/Arifureta">
          <img src={ArifuretaCover} ALT="Arifureta" width="114" height="148" />
          <div className="ShowTitle" >
            Arifureta
          </div>
        </Link>
      </div>
      <div className="RecentlyUpdatedContainer">
        <div className="RecentBar">
          Recently Updated
        </div>
        <div className="UpdatedItemsContainer">
          <div className="RecentItems">
            <div>
              Arifureta
            </div>
            <div>
              Demon Slayer
            </div>
            <div>
              Danmachi
            </div>
            <div>
              Dr. Stone
            </div>
          </div>
          <div className="UpdateDates">
            <div>
              8/19/19
            </div>
            <div>
              8/17/19
            </div>
            <div>
              8/17/19
            </div>
            <div>
              8/16/19
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;