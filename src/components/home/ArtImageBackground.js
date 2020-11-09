import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';

const ArtDirectedBackground = ({ className }) => {
    const { mobileImage, desktopImage } = useStaticQuery(
      graphql`
        query {
          mobileImage: file(relativePath: { eq: "home/mobileHomeBgLine.png" }) {
            childImageSharp {
              fluid(maxWidth: 490, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          desktopImage: file(relativePath: { eq: "home/desktopHomeBgLine.png" }) {
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
        media: `(min-width: 491px)`,
      },
    ]
  
    return (
      <BackgroundImage
        Tag={`div`}
        className={className}
        fluid={sources}
      >
    
      </BackgroundImage>
    )
  }
  
  
  const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
    width: 100%;
    min-height: 100vh;
    background-size: auto;
    background-color: transparent;
    position: absolute !important;
  `
  
  export default StyledArtDirectedBackground