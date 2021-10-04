// it is our services component, I showed all the courses data here by using same hook that i use in home component by passing a false parameter
import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Courses from '../Courses/Courses';

const Services = () => {
    const[courses]=useCourses(false)
    return (
        <div>
            <h5 className="border border-1 border-dark p-2 mb-3 rounded bg-secondary text-white w-25 mx-auto">ALL  Courses</h5>
           <Row xs={1} md={3} className="g-4">
            {
                courses.map(course=><Courses course={course}></Courses>)
            }
        </Row>
        </div>
    );
};

export default Services;