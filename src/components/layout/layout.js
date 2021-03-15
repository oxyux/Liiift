import "@fontsource/space-grotesk"

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Topnav from "../topnav/Topnav.js"

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isTopnavOpen, setIsTopNavOpen] = useState(false);

  const handleToggleTopnav = () => {
    setIsTopNavOpen(isTopnavOpen => !isTopnavOpen);
  }
  const handleCloseTopnav = () => {
    setIsTopNavOpen(false);
  }

  return (
    <>
      <div>
      <Header 
        isTopnavOpen={isTopnavOpen}
        handleToggleTopnav={handleToggleTopnav}
      />
      <Topnav 
        isOpen={isTopnavOpen}
        handleCloseTopnav={handleCloseTopnav}
      />
      <main
        style={{
          minHeight: `100vh`
        }}
      >
        {children}
      </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
