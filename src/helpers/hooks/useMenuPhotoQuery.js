import { useStaticQuery, graphql } from "gatsby"

export const useMenuPhotoQuery = () => {
  const data = useStaticQuery(graphql`
    query menuPhoto {
        file(relativePath: { eq: "layout/bgMenu.png" }) {
        childImageSharp {
          fluid(maxHeight: 1250, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return data
}