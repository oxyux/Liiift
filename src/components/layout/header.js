import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss';

const Header = ({ 
  isTopnavOpen,
  handleToggleTopnav
}) => {

  return (
    <header
      className={`header`}
    >
      <button
        className={`header__burgerBtn ${isTopnavOpen ? 'header__burgerBtn--open' : 'header__burgerBtn--closed'}`}
        onClick={() => handleToggleTopnav()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
