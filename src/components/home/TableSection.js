import React from "react"
import *  as Comp from '../../styles/home/StyledTableSection';

import Div100vh from "react-div-100vh"
import { use100vh } from 'react-div-100vh'

import blackTableSVG from "../../images/home/blackTableSVG.svg"
import ChairSVG from "../../images/home/ChairSVG.svg"
import ElipseSVG from "../../images/home/ElipseSVG.svg"
import ScrollSVG from "../../images/home/ScrollSVG.svg"

const TableSection = () => {
  const height = use100vh();
  const calculatedPosition = height ? height / 8 : '50vh';
  return (
    <Div100vh>
      <Comp.StyledSection>
        <div className="tableSectionContainer">
          <Comp.StyledTableImg halfScreen={calculatedPosition+'px'} src={blackTableSVG} alt="black table" />
          <Comp.StyledChairImg src={ChairSVG} alt="chair image" />
          <Comp.StyledElipseImg src={ElipseSVG} alt="elipse" />
          <Comp.HeroTitle>Daniel Mydlarz</Comp.HeroTitle>
          <Comp.HeroSubtitle>from Poland</Comp.HeroSubtitle>
          <Comp.StyledScrollImg src={ScrollSVG} alt="scroll icon" />
          <Comp.HomeTitle>FRONTEND DEV</Comp.HomeTitle>
        </div>
      </Comp.StyledSection>
    </Div100vh>
  )
}

export default TableSection

