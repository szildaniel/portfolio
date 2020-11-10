import styled from "styled-components"
import media from "styled-media-query"
import bgCourseSectionMobile from '../../images/bio/course/bgCourseSectionMobile.svg';


const StyledParagraph = styled.div`
  width: 100%;
  background: white;
  background: url(${bgCourseSectionMobile});
  background-position: 0% 500%;
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  color: var(--dark);
  overflow: hidden;
  ${media.greaterThan("medium")`
    background: white;
  `}
  p {
    font-size: 18px;
    font-size: clamp(100%, 1rem + 1.25vw, 18px);
    padding-top: clamp(80px,10vw,140px);
    padding-left: clamp(5px, 1rem + 2vw, 600px);
    padding-right: clamp(5px, 1rem + 2vw, 600px);
    ${media.greaterThan("medium")`
      padding-left: clamp(40px,10vw,600px);
      width: 45vw;
    `}
  }
`

export default StyledParagraph;
