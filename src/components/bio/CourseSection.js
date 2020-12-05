import React from 'react';
import { H1 } from "../../styles/bio/H1"
import CertText from './CertText';
import TechStackText from './TechStackText';
import StyledCourse from '../../styles/bio/StyledCourseSection';

const CourseSection = () => {

     return (
        <StyledCourse id="course">
            <H1 bgText={`"course"`}>Course</H1>
            <div className="textContainer">
                <CertText />
                <TechStackText />
            </div>
        </StyledCourse>
    )
}

export default CourseSection;

