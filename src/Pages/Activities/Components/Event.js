import React from "react";
import EventCard from "./EventCard";
import classes from "./Event.module.css";

const Event = () => {
  return (
    <div className={classes.event}>
      <div className={classes.eventPara}>
        <p>
          Student activities (also known as campus activities) are
          student-focused extracurricular clubs and programs offered at a
          college or university. Student activities are generally designed to
          allow students to become more involved on campus. Often, such
          activities provide the students with opportunities to develop
          leadership, social responsibility, citizenship, volunteerism, and
          employment experience.
        </p>
      </div>

      <EventCard />
    </div>
  );
};

export default Event;
