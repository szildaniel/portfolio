import styled from "styled-components"
import media from "styled-media-query"

const StyledUl = styled.ul`
  height: 160vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color:  #b7b7b7;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 10px;
    }
  }
  .arrowDown {
    margin-left: 0;
    margin-right: 10px;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
  }
  .bioSubMenu {
    position: absolute;
    top: 100px;
    right: -190px;
    a {
      color: white;
      padding: 5px 0;
      width: 200px;
      font-size: 1rem;
      color: var(--gray);
      &:nth-of-type(2) {
        padding-left: 10px;
      }
      &:nth-of-type(3) {
        padding-left: 20px;
      }
      &:nth-of-type(4) {
        padding-left: 30px;
      }
    }
  }
  li {
    list-style: none;
    padding: 40px 0;
    &:nth-of-type(2) {
      display: flex;
      align-items: center;
      padding-left: 50px;
    }
    &:nth-of-type(3) {
      padding-left: 120px;
    }
    &:nth-of-type(4) {
      padding-left: 170px;
    }
  }

  ${media.lessThan(`medium`)`
  height: 190vh;

    li{
      &:first-of-type {
        padding-left: 80px;
      }
      &:nth-of-type(2) {
        padding-left: 130px;
      }
      &:nth-of-type(3) {
        padding-left: 200px;
      }
      &:nth-of-type(4) {
      padding-left: 250px;
    }
    }
  `}
`

export default StyledUl
