import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout";
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact  | Daniel Mydlarz" />
    <h1>Hi from Contact Page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage;
