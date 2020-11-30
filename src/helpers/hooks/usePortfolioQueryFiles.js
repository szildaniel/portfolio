import { useStaticQuery, graphql } from "gatsby"

export const usePortfolioQueryFiles = () => {
  const images = useStaticQuery(graphql`
    query PortfolioImages {
      portfolioMobileImage: file(
        relativePath: { eq: "portfolio/imgItems/portfolioMobileImage.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 450, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      portfolioDesktopImage: file(
        relativePath: { eq: "portfolio/imgItems/portfolioDesktopImage.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 450, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      portfolioBgDekstop: file(
        relativePath: { eq: "portfolio/bgItems/portfolioArticleBgDesktop.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      portfolioBgMobile: file(
        relativePath: { eq: "portfolio/bgItems/portfolioArticleBgMobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 765, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return images
}
