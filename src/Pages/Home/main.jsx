import React from "react";
import Carosouel from "./Carosouel";
// import ActivityCard from './Cards'
import PlacedStudents from "./Placed";
import Naac_work from "./naac_work";
import dhiv from '../../photos/placed_students/dhiv.jpg'
import kav from "../../photos/placed_students/kav.jpg";
import ani from "../../photos/placed_students/anith_cri.jpg";
import pra from "../../photos/placed_students/pra.jpg";
import kal from "../../photos/placed_students/kalai_cri.jpg";
import lis from "../../photos/placed_students/lis.jpg";
import dhanu from "../../photos/placed_students/dhanu.jpg";

import app from "../../photos/company/appasamy.png"
import css from "../../photos/company/csscorp.png"
import hex from "../../photos/company/hexaware.png";
import inno from "../../photos/company/innovally.png"
import sanj from "../../photos/company/sanjay_tech.jpg";
import webb from "../../photos/company/webbrex.png"


const datas = [
  { name: "Dhivya", company: "Smart-DV", img: dhiv },
  { name: "Kavya", company: "Webbrex", img: kav },
  { name: "Anitha", company: "Pentagon", img: ani },
  { name: "Gnanaprakash", company: "Appasamy Assoc", img: pra },
  { name: "Kalaiselvi", company: "Pentagon", img: kal },

  { name: "Lisha", company: "I-Bacus", img: lis },
  { name: "Dhanusha", company: "I-Bacus", img: dhanu },
];

const data = [
  { name: "Appasamy assoc", company: "Chennai", img: app },
  { name: "Css Corp", company: "Chennai", img: css },
  { name: "Hexaware", company: "Chennai", img: hex },
  { name: "Inno Valley", company: "Coimbatore", img: inno },
  { name: "Sanjay Tech", company: "Coimbatore", img: sanj },

  { name: "Webbrax", company: "Chennai", img: webb },
  
];


const main = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Welcome to</h3>
        <h3>Electronics and Communication Engineering</h3>
      </div>
      <div className="caroseuel-body">
        <Carosouel />
      </div>
      <div>
        <Naac_work />
        {/* <ActivityCard /> */}

        <PlacedStudents title="Placed Students" data={datas}/>
        <PlacedStudents title="Placed Companies" data={data} />
      </div>
    </div>
  );
};

export default main;
