import React from "react"
import SEO from "../components/seo"
import TableSection from "../components/home/TableSection"
import LogoSection from "../components/home/LogoSection"


const Home = () => {
  return (
    <div className="homeContainer">
      
        <TableSection />
        <LogoSection />
        <SEO title="Daniel Mydlarz Frontend Developer | Personal portfolio website." description="Click and see projects that I created, information about me, tehcnology stack and a lot more." />
        
    </div>
  )
}

export default Home
