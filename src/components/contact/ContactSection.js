import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import MyForm from "../../components/contact/Form"
import ContactText from "../../components/contact/ContactText"

export const ContactSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "contact/plantsBg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className={className}
      fluid={imageData}
    >
      <div className="contactContainer">
        <MyForm />
        <ContactText />
      </div>

    </BackgroundImage>
  )
}
