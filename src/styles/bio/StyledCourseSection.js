import styled from "styled-components"
import media from "styled-media-query"
import bgCourseDesktop from '../../images/bio/course/bgCourseDesktop.svg'

const StyledCourse = styled.section`
  background: white;
  padding-top: clamp(15px, 5vw, 140px);

  ${media.greaterThan("medium")`
    background: url(${bgCourseDesktop});
    background-size: contain;
    background-position: 100%, 0%;
    background-repeat: no-repeat;
  `}
  .textContainer{
    display: block;
    ${media.greaterThan("medium")`
      display: flex;
    `}
  }
`


export default StyledCourse;
