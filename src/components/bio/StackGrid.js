import React, { useRef } from "react"
import gsap from "gsap"
import styled from "styled-components"
import TechItem from "./TechItem"

import fileTypeCss from "@iconify/icons-vscode-icons/file-type-css"
import fileTypeHtml from "@iconify/icons-vscode-icons/file-type-html"
import javascriptIcon from "@iconify/icons-logos/javascript"
import reactIcon from "@iconify/icons-logos/react"
import figmaIcon from "@iconify/icons-grommet-icons/figma"
import jestIcon from "@iconify/icons-logos/jest"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import gsapLogo from "../../images/bio/gsapLogo.svg"

const StackGrid = props => {
  const parentEl = useRef(null)
  const hideIcon = (el, fn) => {
    gsap.to(el, { autoAlpha: 0, x: 0, y: 0, duration: 0.3 })
  }
  return (
    <StyledGrid ref={parentEl}>
      <TechItem hideIcon={hideIcon} icon={fileTypeHtml} />
      <TechItem hideIcon={hideIcon} icon={fileTypeCss} />
      <TechItem hideIcon={hideIcon} icon={javascriptIcon} />
      <TechItem hideIcon={hideIcon} icon={reactIcon} />
      <div className="stackInfo">
          <h3>HTML</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            obcaecati enim placeat id adipisci esse vero qui minus dolorem deserunt,
            laboriosam expedita totam culpa perspiciatis assumenda molestias aperiam
            possimus nostrum?Laborum quod aspernatur accusamus voluptas voluptatibus
            ratione omnis architecto. Itaque provident deleniti est porro recusandae
            nemo accusamus ipsa totam in. Voluptatum consequuntur veniam quos
            inventore hic reprehenderit obcaecati corporis ullam.
          </p>
      </div>

      <TechItem hideIcon={hideIcon} icon={figmaIcon} />
      <TechItem hideIcon={hideIcon} icon={jestIcon} />
      <TechItem hideIcon={hideIcon} gsapLogo={gsapLogo} />
      <TechItem hideIcon={hideIcon} icon={gatsbyIcon} />
    </StyledGrid>
  )
}

const StyledGrid = styled.div`
  width: 80vw;
  height: 135vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  align-self: center;
  padding-top: 40px;
  .stackInfo {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 5;

    h3{
        font-family: Lato;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 0;
    }
  }
`

export default StackGrid
