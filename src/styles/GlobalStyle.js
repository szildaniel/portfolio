import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query';
import blueUndercover from '../images/blueUndercover.svg'

const GlobalStyle = createGlobalStyle`
:root{
--blue: #63c1f6;
--salmon: #cd5a6a;
--red: #ED363B;
--gray: #C0CAD6;
--btnBlue: #69AEEF;

--dark: #3F3B3B;
--lightGray: #EFEFEF;

--bgBlue: rgb(99 193 246 / 0.1);

}
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
    font-size: 16px;
  }
  h2,h3,h4,h5{
    font-family: 'Lato', sans-serif
  }
  a{
    color: black;
    text-decoration: none;
    &:focus{
      outline-offset: 0;
    }
  }
  .homeLogoSection{
    height: 100vh;
  }
  main{
    background: white;
    overflow-x: hidden;
  }
  
  .homeContainer{
    ${media.greaterThan("small")`
    display: flex;
  `}
  }

  .layoutContainer{
    transform-origin: top left;
  }

  .booksSection{
    opacity: 0.67 !important;
  }
  .blueUndercover {
    display: inline-block;
    position: relative;
    z-index: 20;
    &:after{
      display: inline-block;
      content: url(${blueUndercover});
      transform: scaleX(0.9);
      position: absolute;
      bottom: -10px;
      left: -5px;
      z-index: 19;
    }
  }
`


export default GlobalStyle;