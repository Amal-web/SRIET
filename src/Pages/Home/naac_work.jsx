import React from 'react'
import Container from "react-bootstrap/Container";
import img1 from '../../photos/naac/1.png'
import img2 from '../../photos/naac/2.jpg'
import img3 from '../../photos/naac/3.jpg'
import img4 from '../../photos/naac/4.jpg'
import img5 from "../../photos/naac/5.jpg";


const naac_work = () => {
  return (
    <div>
      <Container>
        <h3>NAAC Work</h3>
        <p>
          <span className="para">It</span> is pleased to declare Sri Ranganathar Institute Of Engineering and Technology, Athipalayam, Coimbatore, affliated by Anna University, Tamil Nadu 
          as Accredited with CGPA of 3.34 on 4 point scale at A+ Grade.
        </p>

        <div className="Naac-body">
          <div className="Naac-item">
            <div className="Naac-individual">
              <img
                src={img1}
                alt="Naac "
              />
            </div>
            <div className="Naac-individual">
              <img
                src={img2}
                alt="NAAC"
              />
            </div>
          </div>

          <div className="Naac-item">
            <div className="Naac-Individual-center">
              <div className="Naac-head">
                <h3>NAAC A+</h3>
              </div>
              <img
                src={img5}
                alt="NAAC"
              />
            </div>
          </div>

          <div className="Naac-item">
            <div className="Naac-individual">
              <img
                src={img3}
                alt="NAAC "
              />
            </div>
            <div className="Naac-individual">
              <img
                src={img4}
                alt="NAAC "
              />
            </div>
          </div>
        </div>
        <br />
        <div className="college-name">
          <h3>Electronics and Communication Engineering</h3>
          <br />
          <p>
            <span className="para">Electronics</span> Electronics and
            communication engineering synthesizes science, mathematics,
            technology, and application-oriented designs into world-class
            consumer products, timely microprocessors, state-of-the-art
            computers, advanced electronic components, and much more. From
            cutting-edge technology revolutions to real life applications, the
            innovations of electrical engineers continue to lead the future and
            elevate the standards in the marketplace. With a shortage of
            electrical engineering talent in the job market, the demand for
            graduates with an electrical engineering degree remains at an
            all-time high.
          </p>
        </div>
        <div className="college-name">
          <br />
          <h3 className="text-content">Vision</h3>
          <br />
          <p>
            <span className="para">To</span> inculcate the intellectual
            competence of students on par with global standards for making them
            contributing technocrats.
          </p>
          <br />
        </div>
        <div className="college-name">
          <h3 className="text-content">Mission</h3>
          <ul>
            <br />
            <li>
              To embrace innovative teaching and learning methodologies that
              lead to the self-improvement of students.
            </li>
            <br />
            <li>
              To embed contemporary technical knowledge in core and allied field
              by implementing collaborative research with industry.
            </li>
            <br />
            <li>
              To enhance the competency of students to meet the challenges posed
              in industry on employment.
            </li>
            <br />
            <li>
              To enlighten our students with ethical, moral values and
              leadership.
            </li>
            <br />
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default naac_work