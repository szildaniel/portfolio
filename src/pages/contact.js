import React from "react"
import StyledContactSection from "../styles/contact/StyledContactSection"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Daniel Mydlarz porfolio website, contact with me."
      description="Daniel Mydlarz contact page you can fill short form to send message to me or copy my email adress and send me an email."
    />
    <StyledContactSection />
  </Layout>
)

export default ContactPage
