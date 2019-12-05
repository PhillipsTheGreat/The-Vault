import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

import DanmachiCover from "../../Images/DanmachiCover.jpg";
import ArifuretaCover from "../../Images/ArifuretaCover.jpg";
import DemonSlayerCover from "../../Images/DemonSlayerCover.jpg";
import DrStoneCover from "../../Images/Dr.StoneCover.jpg";
import GoldenWindCover from "../../Images/GoldenWindCover.jpg";
import HaruhiCover from "../../Images/HaruhiCover.jpg";
import SacredBeastsCover from "../../Images/SacredBeastsCover.jpg";
import VinlandCover from "../../Images/VinlandCover.jpg";
import CopCraftCover from "../../Images/CopCraftCover.jpg";
import IronBloodedOrphansCover from "../../Images/IronBloodedOrphansCover.jpg";

export default function HomePage() {
  return (
    <div className="HomePageContainer">
      <div className="ShowCardContainer">
        <div className="ShowCard">
          <Link to="./series/Danmachi">
            <img src={DanmachiCover} alt="Danmachi" width="114" height="148" />
            <div className="ShowTitle" >
              Danmachi
            </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/DemonSlayer">
            <img src={DemonSlayerCover} alt="DemonSlayer" width="114" height="148" />
            <div className="ShowTitle" >
              DemonSlayer
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/DrStone">
            <img src={DrStoneCover} alt="Dr.Stone" width="114" height="148" />
            <div className="ShowTitle" >
              Dr.Stone
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/GoldenWind">
            <img src={GoldenWindCover} alt="Golden Wind" width="114" height="148" />
            <div className="ShowTitle" >
              GoldenWind
            </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/Haruhi">
            <img src={HaruhiCover} alt="Haruhi Sizumia" width="114" height="148" />
            <div className="ShowTitle" >
              Haruhi Sizumia
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/SacredBeasts">
            <img src={SacredBeastsCover} alt="To The Abondoned Sacred Beasts" width="114" height="148" />
            <div className="ShowTitle" >
              To The Abondoned Sacred Beasts
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/VinlandSaga">
            <img src={VinlandCover} alt="Vinland Saga" width="114" height="148" />
            <div className="ShowTitle" >
              Vinland Saga
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/Arifureta">
            <img src={ArifuretaCover} alt="Arifureta" width="114" height="148" />
            <div className="ShowTitle" >
              Arifureta
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/IronBloodedOrphans">
            <img src={IronBloodedOrphansCover} alt="Iron Blooded Orphans" width="114" height="148" />
            <div className="ShowTitle" >
              Iron Blooded Orphans
          </div>
          </Link>
        </div>
        <div className="ShowCard">
          <Link to="./series/CopCraft">
            <img src={CopCraftCover} alt="CopCraft" width="114" height="148" />
            <div className="ShowTitle" >
              CopCraft
          </div>
          </Link>
        </div>
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

