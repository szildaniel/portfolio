import React from "react"
import { Link } from "gatsby"
import StyledContactSection from '../styles/contact/StyledContactSection';
import Layout from "../components/layout/layout";
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact me | Daniel Mydlarz" />
    <StyledContactSection />
  </Layout>
)

export default ContactPage;

