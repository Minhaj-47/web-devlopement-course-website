
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
// it is courses component here we get the all the courses info from json file
// here props is comming from Home component
const Courses = (props) => {
const{img,courseName,instructorName,price,tagLine,language}=props.course;
    return (
        <Col>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                            <h5>Intructor:{instructorName}</h5>
                            <h6>Price:{price}$</h6>
                            <p>{tagLine}</p>
                            <p>Course In: {language}</p>
                            <Button variant="secondary">View more</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Courses;