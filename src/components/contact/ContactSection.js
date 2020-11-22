import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { H1 } from "../../styles/bio/H1"
import MyForm from "../../components/contact/Form"
import ContactText from "../../components/contact/ContactText"
import Footer from "../bio/Footer";

export const ContactSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "contact/bgSpaceMobile.jpg" }) {
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
      <H1 color="white" bgText={`"let's"`}>
        Let's work together
      </H1>
      <div className="contactContainer">
        <ContactText />
        <MyForm />
      </div>
      <Footer />

    </BackgroundImage>
  )
}
