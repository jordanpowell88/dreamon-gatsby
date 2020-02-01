import PropTypes from "prop-types";
import React from "react";
import Logo from './logo';
import { Helmet } from 'react-helmet';

const Header = () => (
  <>
    <Helmet>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous" />
    </Helmet>
    <header className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-xs-6">
                    <div className="logo">
                        <a className="nav-link" href="/">
                            <Logo />
                        </a>
                    </div>
                </div>
                <div className="col-sm-9 col-xs-6">
                    <div className="menu-part">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                  </button>
                                </div>
                                <div className="collapse navbar-collapse main-menu" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li><a className="nav-link" href="/">home</a></li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">about<span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#about">about us</a></li>
                                                <li><a href="#volunteers">dream team</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">missions<span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="honduras">honduras</a></li>
                                                <li><a href="guatemala">guatemala</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="nav-link" href="music">music</a></li>
                                        <li><a className="nav-link" href="speakers">speakers</a></li>
                                        <li><a className="nav-link" href="podcast">podcast</a></li>
                                        <li><a className="nav-link" href="events">events</a></li>
                                        <li><a className="nav-link" href="https://shop.dreamon.world">store</a></li>
                                        <li><a className="nav-link" href="contact">contact</a></li>
                                        <li><a className="nav-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q">donate</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
