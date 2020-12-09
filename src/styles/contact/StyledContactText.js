import styled from "styled-components"
import media from "styled-media-query"
import undercoverContact from "../../images/contact/undercoverContact.svg"

const StyledContacText = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  border: 2px solid rgb(128 128 128 / 0.2);
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  margin-bottom: 60px;

  .subheading {
    color: var(--lightGray);
    display: inline-block;
    padding-bottom: 10px;
    font-size: clamp(19px, 1rem + 0.875vw, 22px);
    font-weight: 300;
    padding-bottom: 0;
    background-image: url(${undercoverContact});
    background-size: 99% 5px;
    background-position-y: bottom;
    background-position-x: 1px;
    background-repeat: no-repeat;
    padding: 5px 0;
    margin-bottom: 30px;
  }

  p {
    font-size: clamp(100%, 1rem + 2vw, 18px);
    color: #c2c2c2;
    padding-bottom: 25px;
  }
  .email {
    font-size: clamp(100%, 1rem + 2vw, 18px);
    font-style: italic;
    display: flex;
    align-items: center;
    color: #c2c2c2;
    & svg {
      width: 30px;
      height: 30px;
      padding-right: 10px;
    }
  }

  ${media.greaterThan("medium")`
  padding: 40px 30px;
  margin-top: clamp(70px,10vw,140px);
  margin-bottom: 0;
  width: 30vw;
  height: 55vh;
  border: 3px solid rgb(128 128 128 / 0.2);
  display: flex;
  flex-direction: column;
  .subheading{
      margin-bottom: 50px;
  }
  `}
`

export default StyledContacText
