import React from "react"
import { Link } from "gatsby"
import StyledParagraph from "../../styles/bio/StyledCertText"
import Button from "../Button"

const CertText = () => {
  return (
    <>
      <StyledParagraph>
        <p>
          Meanwhile to organize knowledge I decided to make a 3 weeks stationary
          course at University Of Economics and Computer Science in Kraków. The
          course has ended with 98-375:MTA HTML5 Application Development
          Fundamentals Certificate.
        </p>
        <Button primary>
          <a target="_blank" href="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=171&cvid=+qAyXJQp02QkR0Rgk0+LwQ==">Certificate</a>
        </Button>
      </StyledParagraph>
    </>
  )
}

export default CertText
