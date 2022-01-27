import React from 'react';
import { Card, CardGroup, Nav } from 'react-bootstrap';
import "./ProjectDisplay.css";

const SingleProjectDisplay = ({props}) => {
  return (
  <CardGroup className="cardGroup" style={{maxWidth:"50rem"}}>
      <Card.Img src={props.img} style={{maxHeight:"25rem"}}></Card.Img>
      <Card className='projectTextArea' >
          <Nav.Link style={{color:(!props.link)?"red":"#E6A943", fontSize:"20px", fontWeight:"bold", textDecoration:"underline"}} href={props.link}>{props.title}</Nav.Link>
          <Card.Text>{props.description}</Card.Text>
      </Card>
  </CardGroup>
  );
};

export default SingleProjectDisplay;
