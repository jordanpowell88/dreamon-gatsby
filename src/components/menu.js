import { Link } from 'gatsby';
import React, { useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useTranslation } from '../hooks';

const Menu = () => {
    const [show, setShow] = useState(false);
    const { menu: translations } = useTranslation();

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
                                <li><Link className="nav-link" to={translations.homeLink}>{translations.home}</Link></li>
                                <li><Link className="nav-link" to={translations.aboutLink}>{translations.about}</Link></li>
                                <li><Link className="nav-link" to={translations.missionsLink}>{translations.missions}</Link></li>
                                <li><Link className="nav-link" to={translations.musicLink}>{translations.music}</Link></li>
                                <li><Link className="nav-link" to={translations.speakersLink}>{translations.speakers}</Link></li>
                                <li><Link className="nav-link" to={translations.eventsLink}>{translations.events}</Link></li>
                                {/* <li><OutboundLink className="nav-link" href="https://shop.dreamon.world">store</OutboundLink></li> */}
                                <li><Link className="nav-link" to={translations.contactLink}>{translations.contact}</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Menu;