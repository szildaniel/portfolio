import styled from 'styled-components'
import media from 'styled-media-query';

export const HomeTitle = styled.h1`
  font-family: "Khand", sans-serif;
  font-size: 22px;
  font-weight: normal;
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  right: 30px;
  z-index: 20;
  top: 30px;
  letter-spacing: 8px;
  color: #fbfbfb;
  ${media.greaterThan("large")`
    font-size:28px;
    font-weight: bold;
    right: 70px;
    top: 55px;
    letter-spacing: 8px;
  `}
`
export const HeroTitle = styled.h1`
  font-family: "Khand", sans-serif;
  font-size: 21px;
  font-weight: bold;
  position: absolute;
  bottom: 155px;
  z-index: 20;
  right: 30px;
  color: #eaeaea;
  ${media.greaterThan("large")`
    right: 50px;
    font-size: 25px;
    bottom: 165px;

    `}
`
export const HeroSubtitle = styled.h2`
  font-family: "Khand", sans-serif;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  bottom: 125px;
  z-index: 20;
  right: 30px;
  color: #eaeaea;
  ${media.greaterThan("large")`
    font-size:21px;
    right: 50px;
  bottom: 135px;

  `}
`
export const StyledScrollImg = styled.img`
  z-index: 20;
  position: absolute;
  bottom: 55px;
  right: 30px;
  ${media.greaterThan("small")`
    display:none;
  `}
`

export const StyledSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  background-color: #c0cad6;
  color: white;
  .tableSectionContainer{
    min-height: 100vh;
    height: 100vh;
    background-color: #C0CAD6;
    z-index: -50;
    overflow: hidden;
    .svgContainer{
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  ${media.greaterThan("small")`
    width: 50vw;
    position: absolute;
    right: 0;
    overflow-y:hidden;
  `}
`

export const StyledTableImg = styled.img`
  width: 900px;
  height: 800px;
  position: relative;
  left: -300px;
  top: 128px;
  top: ${props => props.halfScreen || '128px'};
  z-index: 11;
  ${media.greaterThan("medium")`
    top: 221.375px;
    left: -220px;
  `}
`

export const StyledChairImg = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  top: 138px;
  left: 80px;
  z-index: 10;
  ${media.greaterThan("medium")`
    width:220px;
    top: 140px;
    left: 180px;
  `}
`

export const StyledElipseImg = styled.img`
  width: 330px;
  height: auto;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: 12;
  ${media.greaterThan("small")`
    bottom: 0
  `}
  ${media.greaterThan("large")`
    width:450px;
  `}
`
