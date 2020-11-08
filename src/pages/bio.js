import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout";
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Bio Page | Daniel Mydlarz"  description="Short biography, soft skills, how I started to learn programming."/>
    <h1>Hi from Bio Page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage;
