import React from "react"
import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import BeginningSection from '../components/bio/BeginningSection';
import CourseSection from '../components/bio/CourseSection';
import SoftSkillsSection from '../components/bio/SoftSkillsSection';

const SecondPage = () => (
  <Layout>
    <SEO title="Bio Page | Daniel Mydlarz"  description="Short biography, soft skills, how I started to learn programming."/>

    <BeginningSection />
    <CourseSection />
    <SoftSkillsSection />

  </Layout>
)

export default SecondPage;
