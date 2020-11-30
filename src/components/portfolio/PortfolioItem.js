import React from "react"
import StyledPortfolioItem from "../../styles/portfolio/StyledPortfolioItem"

import { Icon } from "@iconify/react"
import laptopOutlined from "@iconify/icons-ant-design/laptop-outlined"
import githubSquare from "@iconify/icons-jam/github-square"

const PortfolioItem = props => {
  return (
    <StyledPortfolioItem
      bgColor={props.bgColor}
      overflowHidden={props.overflowHidden}
      marginTop={props.marginTop}
      iconsAbsolute={props.iconsAbsolute}
    >
      <h2>{props.itemTitle}</h2>
      <div className="iconsContainer">
        <a target="_blank" href={props.liveLink}><Icon icon={laptopOutlined} /></a>
        <a target="_blank" href={props.ghLink}>
          <Icon icon={githubSquare} />
        </a>
      </div>
      {props.children}
    </StyledPortfolioItem>
  )
}

export default PortfolioItem
