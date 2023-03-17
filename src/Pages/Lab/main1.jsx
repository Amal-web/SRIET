import React from 'react'
import Container from "react-bootstrap/Container";
import CardComponent from './CardComponent';
import './main.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import princimg from '../../photos/principal.jpg'
import chairimg from "../../photos/chairman.jpg";

const mg = {
  title: "Management's Desk",
  mgimg: "",
  message: "Chairman's Message",
  firstpara:
    "Shri. V. Narayanasamy “Best Methods Man – Steel Foundry”, Chairman of SRI Group with 40+ years of rich Industry experience established Sri Ranganathar Institute of Engineering and Technology (SRIET) in 2011, an Industry Integrated Institute to offer quality Engineering Education",
  secondpara: `Sri Ranganathar Institute of Engineering and Technology, an Industry Integrated Institution since its inception in 2011, has made notable progress by following the mantra of student centric approach, in both academic and extra co-curricular activities.The service of the Institution in constructing personally matured, skilfully equipped and service-oriented graduates is certainly worth mentioning. We firmly believe in academic excellence and never compromise on teaching standards or discipline. These three things are the catalysts on which we operate.`,
  thirdPara: `Being an Industrialist with 40yrs of rich experience, we are committed to add new dimension to academics by providing quality education and practical exposure to the students through systematic teaching and learning. In our view, academia and industry should engage in joint research to encourage innovation and competitiveness in the global economy. Learning is based on doing things and not merely knowing things. Until and unless learning solutions transmit to real life and stimulate the learner to obtain and apply the knowledge, the entire process will remain superficial. Our Institution aims at optimizing the productivity of global leaders and so we have set specific objectives and planned activities for achieving excellence in all spheres of Technical Education.We also focus on attaining greater alignment of Engineering education with Employment opportunities. To enhance employability, summer internships and the scheme of apprenticeship in our own industry are being provided to our students. In addition to it, we develop excellent scientific and engineering skills and motivate our students to think unconventionally to face the challenges of the future and provide platform for Entrepreneurship.We concern the development of every student’s intellectual, emotional, social, physical, artistic, creative and spiritual potentials. These holistic approaches towards our students bring out the better citizens of tomorrow. I take this opportunity to express that every effort is made to progress the existing best services to bring out the best for the welfare of our Institution and the growth of our students.
`,
  princititle: "From the Principal's Desk",
  primg: "",
  pricipara:
    "The professional education scenario in our country is undergoing evolutionary changes keeping in line with the challenges and opportunities presented by our fast growing economy.",
};

const main = (props) => {
  return (
    <div className="chairman-message">
      <Container>
        <div style={{ textAlign: "center" }}>
          <h3>Management's Desk</h3>
          <br />
        </div>

        <div className="parent-cards  ">
          <div className="child-card">
            <div className="lab-card">
              <Card>
                <Card.Img
                  variant="top"
                  src={chairimg}
                />
              </Card>
            </div>
            <div className="lab-cards-text">
              <h4 className="lab-card-title">{mg.message}</h4>
              <p>{mg.firstpara}</p>
            </div>
          </div>
          <div>
            <p>{mg.secondpara}</p>
            <br />
            <p>{mg.thirdPara}</p>
          </div>
          {/* ----------------------------------------------- */}
          <div className="child-card">
            <div className="lab-cards-text">
              <h4 className="lab-card-title">{mg.princititle}</h4>
              <p>{mg.pricipara}</p>
            </div>
            <div className="lab-card">
              <Card>
                <Card.Img
                  variant="top"
                  src={princimg}
                                  />
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default main
