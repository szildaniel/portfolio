import React from "react"
import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import BeginningSection from '../components/bio/BeginningSection';
import CourseSection from '../components/bio/CourseSection';
import SoftSkillsSection from '../components/bio/SoftSkillsSection';
import TechStackSection from '../components/bio/TechStackSection';

const Bio = () => (
  <Layout>
    <SEO title="Bio Page | Daniel Mydlarz"  description="Short biography, soft skills, how I started to learn programming."/>

    <BeginningSection />
    <CourseSection />
    <SoftSkillsSection />
    <TechStackSection />
    
  </Layout>
)

export default Bio;
