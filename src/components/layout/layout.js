/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useRef} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from 'react-helmet';
import Nav from "./Nav";
import GlobalStyle from "../../styles/GlobalStyle";

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
  const layoutRef = useRef(null);
 
  return (
    <div ref={layoutRef} className="layoutContainer"> 
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav layoutRef={layoutRef} />
        <main>{children}</main>
        <GlobalStyle whiteBg />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
