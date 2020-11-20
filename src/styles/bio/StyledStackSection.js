import styled from "styled-components"
import media from "styled-media-query"
import techStackBg from "../../images/bio/techStackBg.svg";

 const StyledStackSection = styled.section`
  position: relative;
  /* padding-top: 220px; */
  overflow: hidden;
  background: white;
  color: var(--dark);
  display: flex;
  flex-direction: column;
  h1 {
    font-size: clamp(36px, 1rem + 2vw, 75px);
  }
  .techItemsContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${media.greaterThan("medium")`
  height: auto;
  background: url(${techStackBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  padding-top: 0;
  background-position-y: center;
  h1{
  margin-top: clamp(70px,10vw,140px);
  }
  .techItemsContainer{
    &:nth-of-type(-n+4){
    align-items: center;
    }
    &:nth-of-type(n+5){
      align-items: center;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    &:nth-of-type(6){
      grid-column-start: 1;
      grid-column-end: 2;
      
    }
    &:nth-of-type(7){
      grid-column-start: 2;
      grid-column-end: 3;
    }
    &:nth-of-type(8){
      grid-column-start: 3;
      grid-column-end: 4;

    }
    &:nth-of-type(9){
      grid-column-start: 4;
      grid-column-end: 5;

    }
  }
}
`}
`

export {StyledStackSection};