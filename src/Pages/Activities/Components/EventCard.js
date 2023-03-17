import React from "react";
import classes from "./EventCard.module.css";

import Card from "react-bootstrap/Card";
import act1 from "../../../photos/activites/1.jpg"
import act2 from "../../../photos/activites/2.jpg";
import act3 from "../../../photos/activites/3.jpg";
import act4 from "../../../photos/activites/4.jpg";
import act5 from "../../../photos/activites/5.jpg";



const DUMMY_DATA = [
  {
    image: act1,

    text: "1“ADVANCE NETWORKING PROTOCOLS” under the chief guest B.Sivabalamurugan, Cyber Security Ambassador, Diya Robotics Chennai on 26.09.2022.",
    title: "",
  },
  {
    image: act2,
    title: "",
    text: "2“Introduction to Core Electronics”, using a Resource Person Mr. Jaiger Anandan, General Manager, IFASW Engineering Career, Coimbatore on 17.08.2022.",
  },
  {
    image: act3,

    title: "",
    text: "3“PRINCIPLES OF SPREAD SPECTRUM TECHNIQUES “using a Resource person Mr.Harikrishna from Robert Bosch,",
  },
  {
    image:act4,
      
    title: "",
    text: "UBA activity",
  },
  {
    image:act5,

    title: "",
    text: "Medical Camp ",
  },
];
const EventCard = () => {

  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        <ul>
          {DUMMY_DATA.map((card, index) => (
            <li key={index}>
              <Card
                style={{
                  width: "23.688em",
                  height: "100%",
                  border: "0",
                  boxShadow: "5px 2px 5px #181823",
                }}
                
              >
                <Card.Img
                  variant="top"
                  style={{ height: "22.938em" }}
                  src={card.image}
                />
                <Card.Body
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "15px" }}
                >
                  <Card.Title style={{color:'black'}}>{card.title}</Card.Title>
                  <Card.Text style={{ padding: "2em" }}>{card.text}</Card.Text>
                 
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    
    </div>
  );
};

export default EventCard;

