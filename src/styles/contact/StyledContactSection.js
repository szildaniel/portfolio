import styled from "styled-components"
import media from "styled-media-query"
import { ContactSection } from "../../components/contact/ContactSection"

const StyledContactSection = styled(ContactSection)`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  &::before,
  &::after {
    filter: brightness(0.25);
  }
  ${media.greaterThan("medium")`
  &::before,
  &::after {
    filter: brightness(0.25);
  }

  `}

  h1 {
    margin: clamp(40px, 10vw, 140px);
    padding-top: clamp(70px, 10vw, 140px);
    margin-top: 0;
    font-size: clamp(30px, 1rem + 2vw, 75px);
    &:after {
      padding-top: clamp(70px, 10vw, 140px);
    }
    margin-left: 0;
    margin-bottom: clamp(20px, 5vw, 65px);
    &:before {
      color: rgb(255 255 255 / 0.06);
      font-size: clamp(87px, 10vw, 156px);
    }
  }
  .contactContainer {
    display: flex;
    flex-direction: column;
    margin: clamp(40px, 10vw, 140px);
    margin-top: clamp(70px, 10vw, 140px);
    margin-top: 0;
    margin-bottom: 0;
  }
  form {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: clamp(30px, 10vw, 140px) 0;
    button {
      font-size: 16px;
      width: 100%;
      height: 40px;
      margin-top: 15px;
      background: rgba(255, 255, 255, 0.1);
      color: #c1c1c1;
      padding: 0 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    p {
      color: white;
      padding: 10px 15px;
      text-align: center;
    }
  }

  input {
    font-size: 16px;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    color: #a4a4a4;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    & &::placeholder {
      font-family: Lato, sans-serif;
      font-size: 16px;
      color: #a4a4a4;
      outline: none;
    }
    :focus {
      outline: none;
      background: rgba(255, 255, 255, 0.35);
    }
  }

  textarea {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    height: 220px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    color: #a4a4a4;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    padding: 15px;
    box-sizing: border-box;
    resize: none;
    :focus {
      outline: none;
      background: rgba(255, 255, 255, 0.35);
    }
  }
  .errorDiv {
    height: 30px;
    width: 100%;
    color: red;
    border: none;
    border-radius: 5px;
    padding: 15px;
    font-size: 14px;
    box-sizing: border-box;
  }
  footer {
    margin-top: clamp(70px, 10vw, 140px);
  }

  ${media.greaterThan("medium")`
  h1:after{
    transform: scale(1.4);
    top: -14px;
    left: 15px;
  }
  h1:before{
    bottom: -40px;
    left: -50px;
    color: rgb(255 255 255 / 0.06);
    font-size: clamp(87px,10vw,156px);
  }
  .contactContainer {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 90px;
  }
  form{
    width: 30vw;
    margin-top: 0; 
  }

  input:first-of-type{
    margin-top: 0;
  }
  
  `}
`

export default StyledContactSection
