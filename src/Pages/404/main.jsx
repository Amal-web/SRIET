import React from "react";
import Container from "react-bootstrap/Container";
import './main.css'

const main = () => {
  return (
    <div>
      <Container>
        <div className="error">
          <h1>Page Not Found...........!</h1>
          <h1>Try Contacting Admin.....!</h1>
          <h1>
            ERROR <span className='red-color'>404</span> :)
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default main;
