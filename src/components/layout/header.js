import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import './header.scss';

import { topnavColorContext } from '../../../provider';

const Header = ({ 
  isTopnavOpen,
  handleToggleTopnav
}) => {

  const topnavColorsContext = useContext(topnavColorContext);

  return (
    <header
      className={`header`}
    >
      <button
        className={`header__burgerBtn ${isTopnavOpen ? 'header__burgerBtn--open' : 'header__burgerBtn--closed'}`}
        onClick={() => handleToggleTopnav()}
      >
        <span style={{backgroundColor: topnavColorsContext && topnavColorsContext.color}}></span>
        <span style={{backgroundColor: topnavColorsContext && topnavColorsContext.color}}></span>
        <span style={{backgroundColor: topnavColorsContext && topnavColorsContext.color}}></span>
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
