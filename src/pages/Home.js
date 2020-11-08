import React from "react"
import SEO from "../components/seo"
import TableSection from "../components/home/TableSection"
import LogoSection from "../components/home/LogoSection"


const Home = () => {
  return (
    <div className="homeContainer">
      
        <TableSection />
        <LogoSection />
        <SEO title="Home" />
        
    </div>
  )
}

export default Home
