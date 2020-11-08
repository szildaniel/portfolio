import React from "react"
import { Link } from "gatsby"

import MyLogo from "../home/MyLogo"
import StyledArtDirectedBackground from "./ArtImageBackground";
import StyledLogoSection from '../../styles/home/StyledLogoSection';

const LogoSection = () => {
  return (
    <StyledLogoSection>
      <StyledArtDirectedBackground />
      <div className="logoContainer">
        <MyLogo />
      </div>

      <div className="linkContainer">
        <Link to="/bio/">bio</Link>
        <div className="rightSide">
          <Link to="/portfolio/">portfolio</Link>
          <Link to="/contact/">contact</Link>
        </div>
      </div>
    </StyledLogoSection>
  )
}

export default LogoSection