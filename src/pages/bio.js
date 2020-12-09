import React from "react"
import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import BeginningSection from '../components/bio/BeginningSection';
import CourseSection from '../components/bio/CourseSection';
import SoftSkillsSection from '../components/bio/SoftSkillsSection';
import TechStackSection from '../components/bio/TechStackSection';

const Bio = () => (
  <Layout>
    <SEO title="Daniel Mydlarz Porfolio Page biographical information about me."  description="Cool story about how I start programming. See my soft skills and technology stack that I am using in my everyday projects."/>

    <BeginningSection />
    <CourseSection />
    <SoftSkillsSection />
    <TechStackSection />
    
  </Layout>
)

export default Bio;
