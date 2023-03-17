import React from "react";
import classes from "./Faculty.module.css";
import AssistantProfessor from "./AssistantProfessor";
import Professor from "./Professor";
import LabAssistant from "./LabAssistant";
import PlacementFaculty from "./PlacementFaculty";
import Hod from "./Hod";

const Faculty = () => {
  return (
    <div className={classes.container}>
      <Hod/>
      <Professor/>
      <AssistantProfessor/>
      <LabAssistant/>
      <PlacementFaculty/>
      
    </div>
  );
};

export default Faculty;
