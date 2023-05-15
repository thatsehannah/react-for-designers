import React from 'react'
import Link from 'gatsby-link'
import logo from "../images/logo-designcode.svg"
import "../css/header.css"

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className='header-group'>
      <Link to="/">
        <img src={logo} width="30" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
