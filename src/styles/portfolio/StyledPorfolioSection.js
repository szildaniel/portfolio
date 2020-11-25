import styled from "styled-components"
import media from "styled-media-query"
import portfolioH1Bg from "../../images/portfolio/portfolioH1Bg.svg"
const StyledPortfolioSection = styled.section`
  background: white;
  color: var(--dark);
  width: 100vw;
  h1:after {
    content: url(${portfolioH1Bg});
    top: 0px;
    left: 15px;
  }
`
export default StyledPortfolioSection
