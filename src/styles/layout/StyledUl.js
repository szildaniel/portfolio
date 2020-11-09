import styled from 'styled-components';
import media from 'styled-media-query';

const StyledUl = styled.ul`
height: 100vh;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-evenly;
${media.greaterThan("large")`
    height: 70vh;
  `}
a{
  color: #e8e8e8;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
}
li{
  list-style: none;
  position: fixed;
  left: -500px;
  &:first-of-type {
    top: 150px;
  }
  &:nth-of-type(2) {
    top: 250px;
  }
  &:nth-of-type(3) {
    top: 350px;
  }
  &:nth-of-type(4) {
    top: 450px;
  }
}
`

export default StyledUl;