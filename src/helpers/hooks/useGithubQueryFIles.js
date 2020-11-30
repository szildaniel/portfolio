import { useStaticQuery, graphql } from "gatsby"

export const useGithubQueryFile = () => {
  const data = useStaticQuery(graphql`
    query githubPagePhotos {
      githubApiFrame1: file(
        relativePath: { eq: "portfolio/imgItems/githubApiFrame1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 460, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      githubApiFrame2: file(
        relativePath: { eq: "portfolio/imgItems/githubApiUser.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 460, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return data
}
