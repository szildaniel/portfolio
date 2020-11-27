import React from 'react';
import PortfolioArticle from "../PortfolioArticle"
import PortfolioItem from "../PortfolioItem";

import flipGameBg from "../../../images/portfolio/bgItems/flipGameBg.svg"
import flipGame from "../../../images/portfolio/imgItems/flipGame.svg"
import FlipGamePhone1 from "../../../images/portfolio/imgItems/FlipGamePhone1.svg"
import FlipGamePhone2 from "../../../images/portfolio/imgItems/FlipGamePhone2.svg"
import FlipGamePhone3 from "../../../images/portfolio/imgItems/FlipGamePhone3.svg"
import FlipGamePhone4 from "../../../images/portfolio/imgItems/FlipGamePhone4.svg"
import FlipGamePhone5 from "../../../images/portfolio/imgItems/FlipGamePhone5.svg"



const FlipGameItem = () => {
    return (
      <PortfolioArticle name="FlipGame" bgPhoto={flipGameBg} ghLink="https://github.com/szildaniel/flip-game">
          <PortfolioItem bgColor="#9B9A9A" itemTitle="Flip Game" marginTop="30px">
            <img src={flipGame} alt="flip game background image" className="flipGameBackgroundImg"/>
            <div className="phonesContainer">
                <img src={FlipGamePhone1} alt="Game Image"/>
                <img src={FlipGamePhone2} alt="Flip Game Image"/>
                <img src={FlipGamePhone3} alt="Game Image"/>
                <img src={FlipGamePhone4} alt="Flip Game Project"/>
                <img src={FlipGamePhone5} alt="Mobile Game"/>
            </div>
          </PortfolioItem>
      </PortfolioArticle>

    )
}


export default FlipGameItem;