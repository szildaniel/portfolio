import React from "react"
import StyledTechText from "../../styles/bio/StyledTechText"
import linkArrow from "../../images/bio/course/linkArrow.svg"
import {AnchorLink} from 'gatsby-plugin-anchor-links';

const TechStackText = () => {
  return (
    <>
      <StyledTechText>
        <p className="certPara">
          I met there a lot of people which I could share thoughts with. After
          course I continued to hone my JavaScript skill and start to use React
          library, Jest testing framework and more advanced frameworks.
        </p>

        <AnchorLink to="/bio#technology-stack">

          <img src={linkArrow} alt="arrow"/>technology stack
        </AnchorLink>
      </StyledTechText>
    </>
  )
}

export default TechStackText
