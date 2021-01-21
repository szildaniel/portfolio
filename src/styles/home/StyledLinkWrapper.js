import styled from 'styled-components';
import media from 'styled-media-query';


const LinkWrapper = styled.div`
  width: 81px;
  height: 23px;
  background: transparent;
  position: relative;
  svg {
    position: absolute;
    top: 8px;
    left: -12px;
    z-index: -5;
    
    &.bio{padding-left: 50px;}
    &.contact{padding-left: 20px;}
  }
  a {
    z-index: 20;
    font-family: Roboto "sans-serif";
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    &.bio{
      padding-left: 30px;
    }
    &.contact{
      padding-left: 20px;
    }
    &:nth-of-type(2) {
      padding-left: 20px;
    }
    ${media.greaterThan("small")`
      &.bio{
         padding-left: 50px;
        }
      `}
  }
`

export default LinkWrapper;