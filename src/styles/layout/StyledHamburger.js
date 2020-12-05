import styled from "styled-components"

const StyledHamburger = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--salmon);
  display: flex;
  justify-content: flex-end;
  align-items:flex-end;
  position: fixed;
  z-index: 1000;
  .iconsContainer{
    width: 40px;
    height: 40px;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`



export default StyledHamburger;
