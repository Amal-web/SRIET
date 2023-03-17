import React from "react";
import classes from "./Professor.module.css";
import mm from "../../photos/staffs/meenakumari.jpg";


const Professor = () => {
  return (
    <div className={classes.container}>
      <h2>Professor</h2>
      <div className={classes.card}>
        <img
          src={mm}
          alt="img"
        />
        <div className={classes.names}>
          <h4>Dr.M.Meenakumari</h4>
          <p>M.E (Ph.D)</p>
        </div>
      </div>
    </div>
  );
};

export default Professor;
