import styled from 'styled-components';
import media from 'styled-media-query';


const StyledLogoSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  color: black;
  z-index: 100;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  .logoContainer {
    width: 180px;
    height: 311px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 105;
    ${media.greaterThan("small")`
      width: 220px;
      height: 380px;
    `}
  }

  .linkContainer {
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    z-index: 120;
    .rightSide{
      padding-right: 30px;
    }
    a {
    font-family: Roboto 'sans-serif';
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    &:first-of-type {
      padding-left: 30px;
    }
    &:nth-of-type(2){
      padding-left: 20px;
      }
    }
    ${media.greaterThan("small")`
    width: 50vw;
    .rightSide{
      padding-right: 50px;
    }
    a:first-of-type{
      padding-left: 50px;
    }
  `}
  }
  .bordersSVG {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .bgLine {
    min-height: 100vh;
    position: absolute;
    z-index: 101;
  }

  ${media.greaterThan("small")`
    width: 50vw;
  `}
`

export default StyledLogoSection;