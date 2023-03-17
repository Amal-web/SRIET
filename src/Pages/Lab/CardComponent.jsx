import React from 'react'
import LabCard from "./Card";



const CardComponent = (props) => {
  return (
    
      
        <div className="child-card">
          <div className="lab-card">
            <LabCard data={props.data}/>
          </div>
          <div className="lab-card-text">
            <p>
              {props.data.description}
            </p>
          </div>
        </div>
      
  );
}

export default CardComponent