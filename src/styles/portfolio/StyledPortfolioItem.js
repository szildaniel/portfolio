import styled from "styled-components"
import media from "styled-media-query"

const StyledPortfolioItem = styled.div`
  background: ${props => props.bgColor || "white"};
  width: 320px;
  height: 240px;
  margin-top: ${props => props.marginTop || "60px"};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: ${props => (props.overflowHidden ? "hidden" : "visible")};

  h2 {
    font-family: Lato, sans-serif;
    /* font-size: 20px; */
    font-size: clamp(20px, 1rem + 1vw, 30px);
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
    position: ${props => (props.iconsAbsolute ? "absolute" : "static")};
    bottom: ${props => (props.iconsAbsolute ? "0" : "auto")};
    z-index: 100;
    a {
      color: #1c132d;
      margin: 0;
    }
    svg {
      width: 30px;
      height: 30px;
      z-index: 10;
      :first-of-type {
        padding-right: 10px;
      }
    }
  }

  // porfolio item
  .fluidDesktopContainer {
    width: 178px;
    height: 99px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-15px, -50%);
  }
  .fluidMobileContainer {
    position: absolute;
    width: 67px;
    height: 141px;
    left: 0;
    top: 50%;
    transform: translate(15px, -50%);
  }
  //flip game
  .flipGameBackgroundImg {
    width: auto;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 0;
  }

  //deezer item
  .deezerFluidImgContainer {
    width: 233px;
    height: 134px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${media.greaterThan(`medium`)`
      /* width: 560px;
      height: 320px; */
      width: 80%;
      height: 60%;
      top: 55%;
    `}
  }

  // githubAPI

  .framefluidContainerUp {
    width: 190px;
    height: 105px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25%;
    z-index: 10;
  }
  .framefluidContainerDown {
    width: 130px;
    height: 82px;
    position: absolute;
    bottom: 0;
    left: 0;
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

  .linesUpContainer {
    position: absolute;
    left: 50%;
    top: 23%;
    width: 33%;
    height: 90px;
    z-index: 15;
  }
  .linesDownContainer {
    position: absolute;
    width: 33%;
    left: 20%;
    bottom: 5%;
    height: 90px;
    z-index: 5;
  }

  ${media.greaterThan(`medium`)`
    margin: 0 clamp(40px,24.5vw,600px);
    margin-top: 150px;
    width: 50vw;
    height: 675px;
    
    h2{
      padding-top: 60px;
      padding-right: 60px;
    }
    .iconsContainer {
      padding-right: 60px;
      padding-bottom: 60px;
      svg {
        width: 40px;
        height: 40px;
        :first-of-type {
          padding-right: 20px;
        }
      }
      a{
        position: static;
      }
    }
    // porfolio project
    .fluidMobileContainer{
      width: 29%;
      height: 50%;
      left: 30px;
    }
    .fluidDesktopContainer{
      width: 60%;
      height: 37%;
      right: 60px;
      transform: translate(0, -50%);
      right: 0;

    }

    // github api project
    .framefluidContainerUp {
      width: 60%;
      height: 37%;
    }
    .framefluidContainerDown{
      width: 50%;
      height: 33%;
    }
    .linesDownContainer{
      width: 33%;
    left: 20%;
    bottom: 27%;
    height: 90px;
    z-index:5;

    }
    .linesUpContainer{
    left: 51%;
    top: 27%;
    }
    .triangle {
      width:420px;
      height:200px;
      right: -213px;
    top: -160px;
    }
  `}

  ${media.between("small", "medium")`
    width: 75vw;
    height: 330px;
  `}
`

export default StyledPortfolioItem
