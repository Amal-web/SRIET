import React from 'react'
import Container from "react-bootstrap/Container";
import CardComponent from './CardComponent';
import './main.css'

const data = [
  {
    title: "Basic Electronics Lab",
    description:
      "To provide exposure to the students with hands on experience on various basic engineering practices in Electronics components and devices.",
  },
  {
    title: "Basic Electronics I Lab",
    description:
      "All basic Electronic devices and their characteristics, applications can be studied. Using these devices the small electronic circuits can be constructed and can be checked",
  },
  {
    title: "Basic Electronics II Lab",
    description:
      "All basic Electronic devices and their characteristics, applications can be studied. Using these devices the small electronic circuits can be constructed and can be checked using software.",
  },
  {
    title: "Digital Electronics I Lab",
    description:
      "All digital I.C related experiments can be carried out using trainer kits as well as software like VHDL. The testers for IC are available",
  },
  {
    title: "Digital Electronics II Lab",
    description:
      "All digital I.C related experiments can be carried out using trainer kits as well as software like VHDL. The testers for IC are available.",
  },
  {
    title: "LIC Lab",
    description:
      "All digital I.C related experiments can be carried out using trainer kits as well as software like VHDL. The testers for IC are available.",
  },
  {
    title: "Microprocessor Lab",
    description:
      "This lab has various types of microprocessor, micro controller trainer kits along with interfacing modules to demonstrate the detailed applications of microprocessors. This lab has various types of microprocessor, micro controller trainer kits along with interfacing modules to demonstrate the detailed applications of microprocessors.",
  },

  {
    title: "DSP Lab",
    description:
      "The detailed study of the digital electronics & signal processing concept based experiments can be performed. This lab has more than 30 numbers of Pentium IV 512 MB personnel computer along with required soft wares like MATLAB 7.1 version.",
  },
  {
    title: "Communication Lab",
    description:
      "The concepts of all type of modulation & demodulation can be studied. The recent communication techniques like fiber optic techniques can be demonstrated with available equipment’s. This lab has highly advanced digital storage oscilloscopes.",
  },

  {
    title: "VLSI Lab",
    description:
      "To Design Entry and simulation of combinational logic circuits, sequential circuits etc. Test bench creation, functional verification, and concepts of concurrent and sequential execution is highlighted.",
  },
  {
    title: "Network Lab",
    description: "",
  },
  {
    title: "Optical and Microwave lab",
    description:
      "To Design Entry and simulation of combinational logic circuits, sequential circuits etc. Test bench creation, functional verification, and concepts of concurrent and sequential execution is highlighted.",
  },
];

const main = () => {
  return (
    <div>
      <Container>
        <div></div>
        <div className="parent-card">
         { data.map((x)=>
          <>
             <CardComponent data={x} />
          </>
          )}
         
        </div>
      </Container>
    </div>
  );
}

export default main
