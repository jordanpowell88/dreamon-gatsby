import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
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
                            <li><Link className="nav-link" to="/">home</Link></li>
                            <li><Link className="nav-link" to="/about">about</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">missions<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020" target="_blank" rel="noopener noreferrer">honduras</a></li>
                                    <li><Link to="/guatemala">guatemala</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link" to="/music">music</Link></li>
                            <li><Link className="nav-link" to="/speakers">speakers</Link></li>
                            {/* <li><Link className="nav-link" to="/podcast">podcast</Link></li> */}
                            <li><Link className="nav-link" to="/events">events</Link></li>
                            <li><a className="nav-link" href="https://shop.dreamon.world">store</a></li>
                            <li><Link className="nav-link" to="/contact">contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
);
export default Menu;