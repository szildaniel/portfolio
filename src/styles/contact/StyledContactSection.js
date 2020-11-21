import styled from "styled-components"
import media from "styled-media-query"
import { ContactSection } from "../../components/contact/ContactSection"

const StyledContactSection = styled(ContactSection)`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  background-color: transparent;

  h1 {
    margin: clamp(40px, 10vw, 140px);
    padding-top: clamp(70px, 10vw, 140px);
    margin-top: 0;
    font-size: clamp(30px, 1rem + 2vw, 75px);
    &:after {
      padding-top: clamp(70px, 10vw, 140px);
    }
  }
  .contactContainer {
    display: flex;
    flex-direction: column;
    margin: clamp(40px, 10vw, 140px);
    margin-top: clamp(70px, 10vw, 140px);
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
      color: var(--lightGray);
      padding: 0 15px;
      border: none;
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
    color: white;
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
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    padding: 15px;
    box-sizing: border-box;
    :focus {
      outline: none;
      background: rgba(255, 255, 255, 0.35);
    }
  }
  .errorDiv {
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    color: red;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    font-size: 14px;
    box-sizing: border-box;
  }
  footer {
    margin-top: clamp(70px, 10vw, 140px);
  }

  ${media.greaterThan("medium")`
  .contactContainer {
    flex-direction: row;
    justify-content: space-between;
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
