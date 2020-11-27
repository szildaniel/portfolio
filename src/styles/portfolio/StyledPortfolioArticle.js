import styled from "styled-components"
import media from "styled-media-query"

const StyledPortfolioArticle = styled.article`
  width: 100vw;
  background: ${props => `url(${props.bgPhoto})` || "transparent"};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 60px;
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
`

export default StyledPortfolioArticle
