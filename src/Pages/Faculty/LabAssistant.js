import React from "react";
import classes from "./LabAssistant.module.css";
import john from "../../photos/staffs/john.jpg";
import joel from "../../photos/staffs/joel.png"


const LabAssistant = () => {
  return (
    <div className={classes.container}>
      <h2>Lab Assistant</h2>
      <div className={classes.lab}>
        <div className={classes.card}>
          <img
            src={john}
            alt="img"
          />
          <div className={classes.names}>
            <h4>John</h4>
            <p>B.E (Lab Assistant)</p>
          </div>
        </div>

        <div className={classes.card}>
          <img
            src={joel}
            alt="img"
          />
          <div className={classes.names}>
            <h4>Joel Paulraj</h4>
            <p>B.E (Lab Assistant)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabAssistant;
