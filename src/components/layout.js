/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import "./layout.css"
import Navbar from './Reusable/Navbar'
import Footer from "./Reusable/Footer"

const Layout = ({ children }) => (

  <div>
    <Navbar/>
    {children}
    <Footer/>
    

  </div>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout