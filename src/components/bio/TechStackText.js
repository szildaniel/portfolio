import React from "react"
import { Link } from "gatsby"
import StyledTechText from "../../styles/bio/StyledTechText"
import linkArrow from "../../images/bio/course/linkArrow.svg"

const TechStackText = () => {
  return (
    <>
      <StyledTechText>
        <p className="certPara">
          I met there a lot of people which I could share thoughts with. After
          course I continued to hone my JavaScript skill and start to use React
          library, Jest testing framework and more advanced frameworks.
        </p>

        <Link to="/">

          <img src={linkArrow} alt="arrow"/>technology stack
        </Link>
      </StyledTechText>
    </>
  )
}

export default TechStackText
