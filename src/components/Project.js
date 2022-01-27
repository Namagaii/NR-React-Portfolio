import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";

const Project = ({props}) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        window.location.assign("/showproject/" + props.index)
    }
    return (
    <Col style={{display:"flex", justifyContent:"center"}}>
        <Card style={{ width: '18rem', backgroundColor: "#4394E6"}}>
            <Card.Img variant="top" src={props.img} style={{maxHeight: "10rem"}}/>
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.shortDescription}
            </Card.Text>
            <Button variant="primary" onClick={onClickHandler}>See more</Button>
            </Card.Body>
        </Card>
    </Col>
    );
}

export default Project;
