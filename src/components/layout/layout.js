/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import GlobalStyle from "../../styles/GlobalStyle"
import Nav from './Nav';
import {setNavFixedPosition} from '../../animations/menuAnimation';
import Hamburger from './Hamburger';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const layoutRef = useRef(null);
  const mainRef = useRef(null);

  useEffect( () => {
    setNavFixedPosition(layoutRef.current.children[1])
  },[])
  
  return (
    <div ref={layoutRef} className="layoutContainer">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Hamburger handleClick={handleClick} isOpen={isOpen}/>
      <Nav mainRef={mainRef} layoutRef={layoutRef} isOpen={isOpen}/>
      <main ref={mainRef}>{children}</main>
      <GlobalStyle />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
