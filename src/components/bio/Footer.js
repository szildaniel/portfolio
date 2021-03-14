import React from "react"
import { StyledFooter } from "../../styles/bio/StyledFooter"

import { Icon } from "@iconify/react"
import linkedinIcon from "@iconify-icons/openmoji/linkedin"
import githubOctocat from '@iconify-icons/logos/github-octocat';


const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerTopDiv"></div>
      <div className="footerBottomDiv"></div>
      <a target="_blank" href="https://pl.linkedin.com/in/daniel-mydlarz-35349a18b">
        <Icon icon={linkedinIcon} className="footerLiIcon"/>
      </a>
      <a target="_blank" href="https://github.com/szildaniel">
        <Icon icon={githubOctocat} className="footerGhIcon"/>
      </a>
      <p>
        Created with love &copy; 2020 Daniel Mydlarz
      </p>
    </StyledFooter>
  )
}

export default Footer