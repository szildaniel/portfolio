import styled from "styled-components"
import media from "styled-media-query"
import StyledParagraph from "./StyledCertText"

const StyledTechText = styled(StyledParagraph)`
    ${media.lessThan("medium")`
        background: white;
        padding-top: clamp(15px,5vw,140px);
    `}
  a {
    display: flex;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: clamp(40px, 10vw, 140px) 0;
    margin-left: clamp(5px, 1rem + 2vw, 600px);
    margin-right: clamp(5px, 1rem + 2vw, 600px);
    img {
      padding-right: 10px;
    }
    ${media.greaterThan("medium")`
        padding-left: clamp(40px,10vw,600px);
        margin-left: 0;
    `}
  }
  .certPara {
    padding-top: clamp(40px, 10vw, 140px);
  }
`

export default StyledTechText
