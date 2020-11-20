import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import media from "styled-media-query"
import {H1} from '../../styles/bio/H1';
import MyForm from '../../components/contact/Form';

export const ContactSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "contact/bgSpaceMobile.jpg" }) {
          childImageSharp {
            fluid(
              quality: 100
              maxWidth: 1920
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className={className}
      fluid={imageData}
    >
    <H1 color="white" bgText={`"let's"`}>Let's work together</H1>
    <MyForm />
    </BackgroundImage>
  )
}


