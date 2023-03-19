import React from "react";
import classes from "./EveCard.module.css";

import Card from "react-bootstrap/Card";
import eve1 from "../../../src/photos/events/event1.jpg"
import eve2 from "../../../src/photos/events/event2.jpg"
import eve3 from "../../../src/photos/events/event3.jpg"
import eve4 from "../../../src/photos/events/event4.jpg"
import eve5 from "../../../src/photos/events/event5.jpg"
import eve6 from "../../../src/photos/events/event6.jpg"
import eve7 from "../../../src/photos/events/event7.jpg"
import eve8 from "../../../src/photos/events/event8.jpg"
import eve9 from "../../../src/photos/events/event9.jpg"



const DUMMY_DATA = [
  {
    image: eve1,

    text:"Symposium 2023" ,
    title: "",
  },
  {
    image: eve2,
    title: "",
    text:"Paper presentation" ,
  },
  {
    image: eve3,

    title: "",
    text: "Mind crusher",
  },
  {
    image:eve4,
      
    title: "",
    text: "Students corner",
  },
  {
    image:eve5,

    title: "",
    text: "Vegitable Carving",
  },
  {
    image:eve6,

    title: "",
    text: "Project expo ",
  },
  {
    image:eve7,

    title: "",
    text: "NAAC event",
  },
  {
    image:eve8,

    title: "",
    text: "Prize winners",
  },
  {
    image:eve9,

    title: "",
    text: "Event participants",
  },
 
];
const EveCard = () => {

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

export default EveCard;

