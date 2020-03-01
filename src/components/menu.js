import { Link } from 'gatsby';
import React, { useState } from 'react';

const Menu = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="col-sm-9 col-xs-6">
            <div className="menu-part">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" onClick={() => setShow(!show)} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className={show ? 'collapse navbar-collapse main-menu collapse in' : 'collapse navbar-collapse  main-menu'} id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link className="nav-link" to="/">home</Link></li>
                                <li><Link className="nav-link" to="/about">about</Link></li>
                                <li><Link className="nav-link" to="/missions">missions</Link></li>
                                <li><Link className="nav-link" to="/music">music</Link></li>
                                <li><Link className="nav-link" to="/speakers">speakers</Link></li>
                                <li><Link className="nav-link" to="/events">events</Link></li>
                                <li><a className="nav-link" href="https://shop.dreamon.world">store</a></li>
                                <li><Link className="nav-link" to="/contact">contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Menu;