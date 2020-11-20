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
`

export default StyledContactSection
