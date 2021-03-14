import styled from "styled-components"
import media from "styled-media-query"

const StyledPortfolioArticle = styled.article`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${props => props.paddingBot || "60px"};
  img {
    width: 95vw;
    height: auto;
  }
  p {
    width: 320px;
    margin-top: 30px;
    font-size: 18px;
    color: black;
  }
  a {
    color: black;
    align-self: flex-start;
    margin-left: 25px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .arrowIcon {
    width: 30px;
    height: 30px;
    color: black;
    margin-right: 7px;
  }
  .mockupsContainers {
    position: absolute;
    background: transparent;
    width: 40%;
    height: 45%;
    margin-left: 30px;
    z-index: 30;
    left: 5%;
    top: 3%;
  }
  .flipGameTilt{
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  }
  ${media.greaterThan("medium")`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 200px;
    .portfolioItemWrapper {
       margin: 0 clamp(40px,24.5vw,600px);
    }
    p{
      width: 30%;
      margin-left: clamp(40px,24.5vw,600px);
      margin-top: 60px;
      font-size: 20px;
    }
    a{
      position: absolute;
      right: clamp(40px,24.5vw,600px);
      top: 850px;
      margin-right: 25px;
      font-size: 18px;
    }
    .arrowIcon {
      width: 35px;
      height: 35px;
    }
    .mockupsContainers{
      width: 60%;
      height: 65%;
      left: 8%;
      top: -8%;
    }
  `}
`

export default StyledPortfolioArticle
