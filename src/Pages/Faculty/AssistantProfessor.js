import React from "react";
import classes from "./AssistantProfessor.module.css";
import mani from "../../photos/staffs/mani.jpg";
import periya from "../../photos/staffs/periyannan.jpg";
import dilip from "../../photos/staffs/dhilip.jpg";
import pavi from "../../photos/staffs/pavithra.jpg";
import tamil from "../../photos/staffs/tamil selvi.jpg";


const AssistantProfessor = () => {
  return (
    <div className={classes.container}>
      <div className={classes.assistantProfessor}>
        <h2>Assistant Professors</h2>
        <div className={classes.apCards}>
          <div className={classes.card}>
            <img src={mani} alt="img" />
            <div className={classes.names}>
              <h4>Mr.V.R.Mani</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src={periya} alt="img" />
            <div className={classes.names}>
              <h4>Mr.A.Periyannan</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src={dilip} alt="img" />
            <div className={classes.names}>
              <h4>Mr.P.Dhilipkumar</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src={pavi} alt="img" />
            <div className={classes.names}>
              <h4>Mrs.S.Pavithra</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src={tamil} alt="img" />
            <div className={classes.names}>
              <h4>Mrs.R.Tamilselvi</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantProfessor;
