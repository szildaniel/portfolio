import React from "react"
import StyledPortfolioItem from "../../styles/portfolio/StyledPortfolioItem"

import { Icon } from "@iconify/react"
import laptopOutlined from "@iconify/icons-ant-design/laptop-outlined"
import githubSquare from "@iconify/icons-jam/github-square"

import Tilt from "react-tilt"

const PortfolioItem = props => {
  const itIsFlipGameItem = props.itemTitle === "Flip Game";
  return (
    <div className={itIsFlipGameItem ? '' : "portfolioItemWrapper"}>
      <Tilt className={itIsFlipGameItem ? '' : "Tilt"} options={{ max: 15, scale: 1 }}>
        <StyledPortfolioItem
          bgColor={props.bgColor}
          overflowHidden={props.overflowHidden}
          marginTop={props.marginTop}
          iconsAbsolute={props.iconsAbsolute}
          className={itIsFlipGameItem ? '' : "Tilt-inner"}
        >
          <h2>{props.itemTitle}</h2>
          <div className="iconsContainer">
            <a target="_blank" href={props.liveLink}>
              <Icon icon={laptopOutlined} />
            </a>
            <a target="_blank" href={props.ghLink}>
              <Icon icon={githubSquare} />
            </a>
          </div>
          {props.children}
        </StyledPortfolioItem>
      </Tilt>
    </div>
  )
}

export default PortfolioItem
