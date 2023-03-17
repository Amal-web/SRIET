import React from "react";
import EveCard from "./EveCard";
import classes from "./Eve.module.css";

const Event = () => {
  return (
    <div className={classes.event}>
      <div className={classes.eventPara}>
        <p>
          Student events are student-focused extracurricular clubs and programs
          offered at a college or university. Student activities are generally
          designed to allow students to become more involved on campus. Often,
          such activities provide the students with opportunities to develop
          leadership, social responsibility, citizenship, volunteerism, and
          employment experience.
        </p>
      </div>

      <EveCard />
    </div>
  );
};

export default Event;
