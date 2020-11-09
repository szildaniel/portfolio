import React from "react"
import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import BeginningSection from '../components/bio/BeginningSection';

const SecondPage = () => (
  <Layout>
    <SEO title="Bio Page | Daniel Mydlarz"  description="Short biography, soft skills, how I started to learn programming."/>


    <BeginningSection />


  </Layout>
)

export default SecondPage;
