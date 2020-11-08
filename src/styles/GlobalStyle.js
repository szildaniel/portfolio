import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query';



const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Khand:wght@400;500;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');
*{
  margin: 0;
  padding: 0;
}
  html,body {  
  margin: 0;
  }
  body {
    font-family: Roboto, sans-serif;
    background: ${props => (props.whiteBg ? 'white' : 'pink')};
    overflow-x: hidden;
  }
  .homeLogoSection{
    height: 100vh;
  }
  main{
    background: #efefef;
    overflow-x: hidden;
  }
  .hamburger{
    left: 100vw;
    cursor: pointer;
  }
  .emptyP{
    width: 60px;
    height: 60px;
  }
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
  .homeContainer{
    ${media.greaterThan("small")`
    display: flex;
  `}
  }

  .layoutContainer{
    transform-origin: top left;
  }
`

export default GlobalStyle;