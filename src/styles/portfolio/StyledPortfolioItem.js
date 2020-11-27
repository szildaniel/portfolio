import styled from "styled-components"
import media from "styled-media-query"
import portfolioDesktop from "../../images/portfolio/imgItems/portfolioDesktop.svg"
import portfolioMobile from "../../images/portfolio/imgItems/portfolioMobile.png"

const StyledPortfolioItem = styled.div`
  background: ${props => props.bgColor || "white"};
  width: 320px;
  height: 240px;
  margin-top: ${props => props.marginTop || "60px"};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: ${props => props.overflowHidden ? "hidden" : "visible"};
  h2 {
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #1c132d;
    padding-top: 15px;
    padding-right: 15px;
    align-self: flex-end;
    z-index: 10;
  }
  .iconsContainer {
    align-self: flex-end;
    display: flex;
    padding-right: 15px;
    padding-bottom: 15px;
    svg {
      width: 30px;
      height: 30px;
      z-index: 10;
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
  .triangle {
    width: 210px;
    height: 100px;
    background: #dcba31;
    position: absolute;
    transform-origin: top left;
    transform: rotate(38deg);
    right: -110px;
    top: -80px;
  }
  .ghApiImg {
    position: absolute;
    width: auto;
    top: 37%;
    left: 15%;
    z-index: 10;
  }
  .ghApiUserImg {
    position: absolute;
    width: auto;
    bottom: 0;
    left: 0;
  }
  .linesContainer {
    position: absolute;
    top: 45%;
    display: flex;
    flex-direction: column-reverse;
    left: 17%;
    img {
      width: auto;
      :first-of-type {
        z-index: 5;
      }
      :nth-of-type(2) {
        z-index: 15;
        position: relative;
        left: 81px;
        bottom: 15px;
        height: 50px;
      }
    }
  }
  .flipGameBackgroundImg {
    width: auto;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
  .phonesContainer {
    background: transparent;
    width: 210px;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: flex-start;
    img {
      width: auto;
      padding: 15px;
      &:nth-of-type(2) {
        padding-left: 0;
        position: relative;
        top: 70px;
      }
      &:nth-of-type(3) {
        padding-left: 0;
        position: relative;
        top: 52px;
      }
      &:nth-of-type(4) {
        padding-left: 0;
        position: relative;
        right: 60px;
        top: 158px;
      }
      &:nth-of-type(5) {
        left: 61px;
        position: absolute;
        z-index: 40;
        top: -37px;
      }
    }
  }
`

export default StyledPortfolioItem
