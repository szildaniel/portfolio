import React, { useRef, useState } from "react"
import styled from "styled-components"
import TechItem from "./TechItem"
import StackInfo from "./StackInfo"
import media from "styled-media-query"

import fileTypeCss from "@iconify/icons-vscode-icons/file-type-css"
import fileTypeHtml from "@iconify/icons-vscode-icons/file-type-html"
import javascriptIcon from "@iconify/icons-logos/javascript"
import reactIcon from "@iconify/icons-logos/react"
import figmaIcon from "@iconify/icons-grommet-icons/figma"
import jestIcon from "@iconify/icons-logos/jest"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import gsapLogo from "../../images/bio/gsapLogo.svg"

import { StackButtons } from './StackButtons';


const StackGrid = () => {
  const parentEl = useRef(null)

  const [activeTech, setActiceTech] = useState({
    html: true,
    css: false,
    js: false,
    react: false,
    figma: false,
    jest: false,
    gsap: false,
    gatsby: false,
  })

  const [expandedTechInfo, setExpandedTechInfo] = useState("html")

  const handleClick = e => {
    const { icon } = e.target.closest("div").dataset
    if (icon && icon !== expandedTechInfo) {
      setExpandedTechInfo(icon)

      setActiceTech(activeTech => ({
        ...activeTech,
        [expandedTechInfo]: false,
        [icon]: true,
      }))
    } else return
  }

  return (
    <StyledGrid ref={parentEl} onClick={handleClick}>
      <TechItem
        icon={fileTypeHtml}
        dataIcon="html"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <TechItem
        icon={fileTypeCss}
        dataIcon="css"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <TechItem
        icon={javascriptIcon}
        dataIcon="js"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <TechItem
        icon={reactIcon}
        dataIcon="react"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <StackInfo activeTech={activeTech} />

      <TechItem
        icon={figmaIcon}
        dataIcon="figma"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <TechItem
        icon={jestIcon}
        dataIcon="jest"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <TechItem
        gsapLogo={gsapLogo}
        dataIcon="gsap"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <TechItem
        icon={gatsbyIcon}
        dataIcon="gatsby"
        expandedTechInfo={expandedTechInfo}
        activeTech={activeTech}
      />
      <StackButtons  />
    </StyledGrid>
  )
}

const StyledGrid = styled.div`
  width: 80vw;
  height: 120vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  align-self: center;
  padding: 50px 0;
  
  ${media.greaterThan("medium")`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 70vw;
    height: 40vh;
    padding-top: 0;
    gap: 0 120px;
    align-self: flex-start;
    padding-left: clamp(40px,10vw,200px);
  `}

  ${media.between("medium", "1100px")`
    padding-top: clamp(40px,10vw,200px);
  `}
`

export default StackGrid
