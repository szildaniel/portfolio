import React, { useState, useEffect } from "react"
import StyledSkillsSection from "../../styles/bio/StyledSkillsSection.js"
import media from "styled-media-query"
import styled from "styled-components"
import { H1 } from "../../styles/bio/H1"
import SkillsLink from "./SkillsLink"
import {useIntersection} from '../../helpers/hooks/useIntersection';

import teamwork from "../../images/bio/skills/teamwork.png"
import communication from "../../images/bio/skills/communication.png"
import motivation from "../../images/bio/skills/motivation.svg"
import Turbulence from "../../styles/bio/TurbulenceSVGFilter.js"

const SoftSkillsSection = () => {
  const [activeImage, setActiveImage] = useState(1)
  const [ref, entry, turnOnTurbulence] = useIntersection({threshold: 0.4});

  return (
    <StyledSkillsSection id="soft-skills">
      <H1 bgText={`"soft"`} color="white">
        Soft skills
      </H1>
      <ImgCont activeImage={activeImage} ref={ref}>
        <div className="overlay"></div>
        <div className="overlay"></div>
        <div className="linksContainer">
          <SkillsLink
            i={1}
            imageActive={activeImage}
            text="teamwork"
            setActiveImage={setActiveImage}
          />
          <SkillsLink
            i={2}
            imageActive={activeImage}
            text="communication skills"
            setActiveImage={setActiveImage}
          />
          <SkillsLink
            i={3}
            imageActive={activeImage}
            text="self motivation"
            setActiveImage={setActiveImage}
          />
        </div>
      </ImgCont>
      <p className="skillsText">
        When I was 7 years old my grandpa took me on Ice Hockey Match. I fell in
        love with this sport and my whole childhood until 16 I spend on skating
        and hard traning. I am glad because that installed in me 3 very
        importnant attributes.
      </p>
      <Turbulence activeImage={activeImage} turnOnTurbulence={turnOnTurbulence} />
    </StyledSkillsSection>
  )
}

export default SoftSkillsSection

const ImgCont = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  transform: skewX(-30deg) translateX(70%);
  overflow: hidden;
  &:before {
    content: "";
    display: inline-block;
    width: 166%;
    height: 100%;
    position: absolute;
    background: ${props =>
      props.activeImage === 1
        ? `url('${teamwork}')`
        : props.activeImage === 2
        ? `url('${communication}')`
        : `url('${motivation}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transform: skew(30deg) translateX(-18%);
    filter: grayscale(15%) url(#go);
    opacity: 0.55;
    z-index: 10;
    top: -20px;
  }
  .overlay {
    width: 10px;
    height: 100vh;
    position: relative;
    left: 33%;
    background: var(--dark);
    z-index: 20;
    &:nth-of-type(2) {
      left: 66%;
      top: -100%;
    }
  }
  .linksContainer {
    position: relative;
    top: -110%;
    background: transparent;
    z-index: 30;
    display: flex;
    justify-content: space-around;
  }

  ${media.lessThan("medium")`
    width: 110vw;
    height: 412px;
    transform: skewY(-15deg);
    top: 200px;
    left: -20px;
    &:before{
      width: 100%;
      height: 140%;
      background-position: 35% center;
      transform: skewY(15deg) translateY(-110px);
      filter: grayscale(15%);
    }
    .overlay {
    width: 110vw;
    height: 2px;
    left: 20px;
    top: 33%;
    &:nth-of-type(2) {
      top: 66%;
      left: 20px;

    }
    }
    .linksContainer{
      flex-direction: column;
      height: 100%;
      top: 0;
      /* padding-left: 20px; */
    }
    `}
`
