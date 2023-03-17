import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Avatar, Box } from '@mui/material';
const Placed = (props) => {
  const {data}=props
  return (
    <Container>
      <div className="placed-students">
        <h3>{props.title}</h3>
        <Row>
        {data.map((x) => (
          <>
              <Col xs={4} md={3} lg={2}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    alt="Cindy Baker"
                    src={x.img}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: "10px auto",
                      display: "block",
                    }}
                  />
                  <h4>{x.name}</h4>
                  <h6>{x.company}</h6>
                </Box>
              </Col>
          </>
        ))}
        </Row>
      </div>
    </Container>
  );
}

export default Placed