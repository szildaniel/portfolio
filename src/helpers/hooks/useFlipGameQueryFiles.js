import { useStaticQuery, graphql } from "gatsby"

export const useFlipGameQueryFiles = () => {
  const images = useStaticQuery(graphql`
    query flipGamePhotos {
        flipGameArticleBgDesktop: file(
        relativePath: { eq: "portfolio/bgItems/flipGameArticleBgDesktop.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      flipGameBgProject: file(
        relativePath: { eq: "portfolio/imgItems/flipGameBgProject.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      myMockups: file(
        relativePath: { eq: "portfolio/imgItems/myMockups.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400 quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return images
}





// flipGameArticleBgDesktop