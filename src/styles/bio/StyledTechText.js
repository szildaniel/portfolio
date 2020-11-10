import styled from "styled-components"
import media from "styled-media-query"
import StyledParagraph from './StyledCertText';
import bgCourseDesktop from '../../images/bio/course/bgCourseDesktop.svg';


const StyledTechText = styled(StyledParagraph)`
    background: url(${bgCourseDesktop});
    background-size: cover;
    background-position: 100% 40%;

    ${media.lessThan("medium")`
        background: white;
        padding-top: clamp(15px,5vw,140px);

    `}
    a {
        display: flex;
        color: black;
        font-size: 18px;
        font-weight: bold;
        margin: clamp(40px,10vw,140px) 0;
        margin-left: clamp(5px,1rem + 2vw,600px);
        margin-right: clamp(5px,1rem + 2vw,600px);
        img{
            padding-right: 10px;
        }
    }
    .certPara{
      padding-top: clamp(40px,10vw,140px);
    }
`

export default StyledTechText;