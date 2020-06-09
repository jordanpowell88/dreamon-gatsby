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
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">about<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/#about">about us</Link></li>
                                    <li><Link to="/#volunteers">dream team</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">missions<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/honduras">honduras</Link></li>
                                    <li><Link to="/guatemala">guatemala</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link" to="/music">music</Link></li>
                            <li><Link className="nav-link" to="/speakers">speakers</Link></li>
                            <li><Link className="nav-link" to="/podcast">podcast</Link></li>
                            <li><Link className="nav-link" to="/events">events</Link></li>
                            <li><a className="nav-link" href="https://shop.dreamon.world">store</a></li>
                            <li><Link className="nav-link" to="/contact">contact</Link></li>
                            {/* <li><a className="nav-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q">donate</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
);
export default Menu;