import React, {useState} from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import PortfolioArticle from "../PortfolioArticle"
import PortfolioItem from "../PortfolioItem"

const DeezerMusicProject = () => {
  const [ghLink] = useState("https://github.com/szildaniel/Deezer-Music-API");
  const [liveLink] = useState('https://szildaniel.github.io/Deezer-Music-API/');

  const images = useStaticQuery(graphql`
    query Images {
      deezerPhoneImage: file(
        relativePath: { eq: "portfolio/imgItems/DeezerMusicPNG.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <PortfolioArticle ghLink={ghLink}>
      <PortfolioItem
        bgColor="var(--radialYellow)"
        itemTitle="Deezer Music"
        marginTop="-70px"
        ghLink={ghLink}
        liveLink={liveLink}
      >
        <div className="deezerFluidImgContainer">
          <Img fluid={images.deezerPhoneImage.childImageSharp.fluid} />
        </div>
      </PortfolioItem>
      <p>
        Deezer Music is built in pure javascript. Project was made only for
        learning purpose. The idea behind this is to remind and listen best
        songs from years 1990 to 2000.{" "}
      </p>
    </PortfolioArticle>
  )
}

export default DeezerMusicProject
