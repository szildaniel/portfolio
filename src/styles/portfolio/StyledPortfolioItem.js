import styled from "styled-components"
import media from "styled-media-query"
import portfolioDesktop from "../../images/portfolio/imgItems/portfolioDesktop.svg"
import portfolioMobile from "../../images/portfolio/imgItems/portfolioMobile.png"



const StyledPortfolioItem = styled.div`
  background: ${props => props.bgColor || "white"};
  width: 320px;
  height: 200px;
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: Lato, sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #1c132d;
    padding-top: 10px;
    padding-right: 15px;
    align-self: flex-end;
  }
  .iconsContainer {
    align-self: flex-end;
    display: flex;
    padding-right: 15px;
    padding-bottom: 10px;
    svg {
      width: 35px;
      height: 35px;
      :first-of-type {
        padding-right: 10px;
      }
    }
  }
  .portfolioDesktopSVG {
    width: 178px;
    height: 99px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-15px, -50%);
    background: url(${portfolioDesktop});
  }
  .portfolioMobileSvg {
    position: absolute;
    width: 67px;
    height: 141px;
    left: 0;
    top: 50%;
    
    transform: translate(15px, -50%);
    background: url(${portfolioMobile});

  }
`

export default StyledPortfolioItem
