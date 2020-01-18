import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Loader from './loader';
import Navigation from './navigation';

const Header = ({ siteTitle }) => (
  <header>
    <Loader />
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
