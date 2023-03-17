import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://i.pinimg.com/originals/bc/20/71/bc2071faf11b06cef1018a1cca092caa.jpg"
      />
      <Card.Body >
       
        <Card.Text className="card-text">
         {props.data.title} 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
