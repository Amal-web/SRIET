import React from "react";
import classes from "./PlacementFaculty.module.css";
import nis from "../../photos/staffs/nishanth.jpg";


const PlacementFaculty = () => {
  return (
    <div className={classes.container}>
      <h2>Placement Co-ordinator</h2>
      <div className={classes.card}>
        <img
          src={nis}
          alt="img"
        />
        <div className={classes.names}>
          <h4>Mr.J.R.Nishanth</h4>
          <p>Assistant Professor</p>
          <p>B.E,M.E (Ph.D)</p>
        </div>
      </div>
    </div>
  );
};

export default PlacementFaculty;
