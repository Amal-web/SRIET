import React from "react";
import classes from "./Hod.module.css";
import hod from '../../photos/staffs/hod.jpg'

const Hod = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hod}>
        <div className={classes.hodImage}>
          <h1>Head Of The Department</h1>
          <img
            src={hod}
                       alt="HOD img"
          />
          <h2>Mrs.P.Jeyabharathi</h2>
        </div>

        <div className={classes.hodContent}>
          <div className={classes.hodDescription}>
            <p>
              I believe my role as an educator is to guide and nurture the next
              generation to establish skills to achieve health, respect,
              prosperity and fulfilment.The ability to be innovative and
              creative is important to me. I enjoy being challenged and inspired
              by the people around me. I am an avid supporter of effective and
              innovative professional development that encourages teachers to be
              reflective and to continuously examine our practice to provide
              quality teaching and learning for each student. My role as Head of
              the department is to keep up with latest trends and research and
              be an active partner in the college’s professional development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hod;
