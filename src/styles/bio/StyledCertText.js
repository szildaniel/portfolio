import styled from "styled-components"
import media from "styled-media-query"
import bgCourseSectionMobile from '../../images/bio/course/bgCourseSectionMobile.svg';


const StyledParagraph = styled.div`
  width: 100%;
  background: white;
  background: url(${bgCourseSectionMobile});
  background-position: 0% 55%;
  background-size: cover;
  background-color: transparent;
  background-repeat: no-repeat;
  color: var(--dark);
  overflow: hidden;
  ${media.greaterThan("medium")`
    background: transparent;
  `}
  p {
    font-size: 18px;
    font-size: clamp(100%, 1rem + 1.25vw, 18px);
    padding-top: clamp(80px,10vw,140px);
    padding-left: clamp(5px, 1rem + 2vw, 600px);
    padding-right: clamp(5px, 1rem + 2vw, 600px);
    ${media.greaterThan("medium")`
      padding-left: clamp(40px,10vw,600px);
      width: 25vw;
    `}
    ${media.between("medium", "1400px")`
      width: 35vw;
    `}
  }
`

export default StyledParagraph;
