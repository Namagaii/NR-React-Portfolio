import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Nav } from "react-bootstrap";

const ContactCard = ({props}) => {
  return (
      <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Nav.Link href={props.link}>{props.linkText}</Nav.Link>
            </Card.Body>
        </Card>
      </div>
  );
};

export default ContactCard;
