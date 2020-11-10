import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import StyledBooksArticle from "../../styles/bio/StyledBooksArticle"

const BooksArticle = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bio/books.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <>
        <BackgroundImage
          Tag="article"
          fluid={imageData}
          backgroundColor={`#040e18`}
          className="booksSection"
        >
          <StyledBooksArticle>
            <h2>Next day, strangely enough</h2>
            <p>
              I used to remember that what we talked about so I turn on the
              computer and start learning through youtube. For the first time
              that was so complicated for me, but something was telling me:
              <span className="blueUndercover">DON’T STOP.</span>
            </p>
            <p>
              First I learned markups and HTML Syntax then I go straight to CSS.
              Colors, gradiends, SVG’s and animations. Fastly i realized that
              making designs of websites make me happy and relaxed.
            </p>
          </StyledBooksArticle>
        </BackgroundImage>
        <p className="onlyMobileParagraph">
              First I learned markups and HTML Syntax then I go straight to CSS.
              Colors, gradiends, SVG’s and animations. Fastly i realized that
              making designs of websites make me happy and relaxed.
        </p>
      </>
      )
    }}
  />
)

export default BooksArticle
