import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Cards = () => {
  return (
    <div>
      <Container className="activity-box">
        <h3>Activities</h3>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="activity-card">
              <div className="image-container">
                <img
                  src=" https://www.shutterstock.com/image-photo/multiethnic-group-people-activity-concept-260nw-229793107.jpg"
                  className="activity-image"
                  alt="Hello world"
                />
              </div>
              <div className="text-container">
                <h5>Womens day Celebration </h5>
                <p>We Organised an International womens day</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="activity-card">
              <div className="image-container">
                <img
                  src=" https://www.shutterstock.com/image-photo/multiethnic-group-people-activity-concept-260nw-229793107.jpg"
                  className="activity-image"
                  alt="Hello world"
                />
              </div>
              <div className="text-container">
                <h5>Womens day Celebration </h5>
                <p>We Organised an International womens day</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="activity-card">
              <div className="image-container">
                <img
                  src=" https://www.shutterstock.com/image-photo/multiethnic-group-people-activity-concept-260nw-229793107.jpg"
                  className="activity-image"
                  alt="Hello world"
                />
              </div>
              <div className="text-container">
                <h5>Womens day Celebration </h5>
                <p>We Organised an International womens day</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="activity-card">
              <div className="image-container">
                <img
                  src=" https://www.shutterstock.com/image-photo/multiethnic-group-people-activity-concept-260nw-229793107.jpg"
                  className="activity-image"
                  alt="Hello world"
                />
              </div>
              <div className="text-container">
                <h5>Womens day Celebration </h5>
                <p>We Organised an International womens day</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards