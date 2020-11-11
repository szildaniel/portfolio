import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import media from "styled-media-query"

import dice from "../../images/bio/dice/dice.svg"
import boldRect from "../../images/bio/dice/boldRect.svg"
import normRect from "../../images/bio/dice/normRect.svg"
import bgLeft from "../../images/bio/dice/bgLeft.svg"

const DiceArt = ({ className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "bio/beginningMobileBg.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "bio/beginningDesktopBg.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <BackgroundImage 
      Tag={`article`} 
      className={className} 
      fluid={sources}>
      <h2>I am Daniel Mydlarz,</h2>
      <h3>28 years old home grown frontend developer.</h3>
      <p>
        My journey with programming starts in early 2018. On my girlfriend
        birthday party my friend told me that he is learning how to code
        websites and show me his first site. I was confused how it’s all working
        together: brackets, semicolons and whole syntax.
      </p>
      <div className="svgImagesContainer">
        <img src={dice} alt="Red Dice" className="dice" />
        <img src={normRect} alt="Red Dice" className="normRect" />
        <img src={boldRect} alt="Red Dice" className="boldRect" />
        <img src={bgLeft} alt="Red Dice" className="bgLeft" />

      </div>
    </BackgroundImage>
  )
}

const DiceArticle = styled(DiceArt)`
  width: 100%;
  min-height: 50vh;
  background-size: auto;
  background-position: 0% 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  color: var(--dark);
  overflow: hidden;
  h2 {
    font-size: 22px;
    font-size: clamp(22px,1rem + 1vw,24px);
    font-weight: bold;
    padding-top: 230px;
    padding-top: clamp(40px,10vw,140px);
    padding-left: clamp(5px, 1rem + 2vw, 600px);
    ${media.greaterThan("medium")`
      padding-left: clamp(40px,10vw,600px);
      width: 50vw;
    `}
  }
  h3 {
    font-size: 20px;
    font-size: clamp(19px,1rem + 1vw,22px);
    color: var(--dark);
    padding-top: 10px;
    padding-left: clamp(5px, 1rem + 2vw,600px);
    padding-right: clamp(5px, 1rem + 2vw,600px);
    ${media.greaterThan("medium")`
      padding-left: clamp(40px,10vw,600px);
      width: 50vw;
    `}
  }
  p {
    font-size: 18px;
    font-size: clamp(100%, 1rem + 1.25vw, 18px);
    padding-top: 20px; 
    padding-left: clamp(5px, 1rem + 2vw,600px);
    padding-right: clamp(5px, 1rem + 2vw,600px);
    ${media.greaterThan("medium")`
      padding-left: clamp(40px,10vw,600px);
      width: 35vw;
    `}
  } 
  .svgImagesContainer {
    padding: 60px 0;
    ${media.greaterThan("medium")`
      .bgLeft, .normRect, .boldRect, .dice{
        transform: scale(0.8);
        position:absolute;
        top: 20px;
      }
      .bgLeft{
        z-index: 2;
        right: -45px;
      }
      .normRect{
        z-index: 10;
        right: 160px;
      }
      .boldRect{
        z-index: 15;
        right: 145px;
      }
      .dice{
        z-index: 20;
        right: 375px;
        top:70px;
      }
    `}
    ${media.lessThan("medium")`
      .dice{
        width: 130px;
        transform: rotate(-20deg);
      }
      .boldRect{
        position: absolute;
        left: 70px;
        z-index: -2;
        width: 180px;
        height: 180px;
        transform: rotate(-40deg);
      }
      .normRect{
        width: 180px;
        height: 180px;
        transform: rotate(-45deg);
        position: absolute;
        right: -22px;
      } 
      .bgLeft{
      display: none;
    }
  `}
  ${media.between("760px", "1562px")`
    .dice {right: 75px;};
    .boldRect {right: 55px;};
    .normRect{
      right: 60px;
    }
  `}
  }
`

export default DiceArticle
