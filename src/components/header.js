import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import '../css/header.css'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setHasScrolled(scrollPosition > 50)
  }, [scrollPosition])

  return (
    <div className={hasScrolled ? 'header header-scroll' : 'header'}>
      <div className="header-group">
        <Link to="/">
          <img src={logo} width="30" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
