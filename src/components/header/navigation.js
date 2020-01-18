import React from 'react';

const Navigation = () => {
    return (
        <header class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 col-xs-6">
                    <div class="logo">
                        {/* <a class="nav-link" href="/">
                            <img src="img/logo.png" alt="">
                        </a> */}
                    </div>
                </div>
                <div class="col-sm-9 col-xs-6">
                    <div class="menu-part">
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                  </button>
                                </div>
                                <div class="collapse navbar-collapse main-menu" id="bs-example-navbar-collapse-1">
                                    <ul class="nav navbar-nav">
                                        <li><a class="nav-link" href="/">home</a></li>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">about<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#about">about us</a></li>
                                                <li><a href="#volunteers">dream team</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">missions<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="honduras">honduras</a></li>
                                                <li><a href="guatemala">guatemala</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="nav-link" href="music">music</a></li>
                                        <li><a class="nav-link" href="speakers">speakers</a></li>
                                        <li><a class="nav-link" href="podcast">podcast</a></li>
                                        <li><a class="nav-link" href="events">events</a></li>
                                        <li><a class="nav-link" href="https://shop.dreamon.world">store</a></li>
                                        <li><a class="nav-link" href="contact">contact</a></li>
                                        <li><a class="nav-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" target="_blank">donate</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
};

export default Navigation