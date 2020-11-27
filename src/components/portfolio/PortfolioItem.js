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
    >
      <h2>{props.itemTitle}</h2>
      <div className="iconsContainer">
        <Icon icon={laptopOutlined} />
        <Icon icon={githubSquare} />
      </div>
      {props.children}
    </StyledPortfolioItem>
  )
}

export default PortfolioItem
