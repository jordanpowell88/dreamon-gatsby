import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
    <footer className="footer-area parallax">
        <div className="main-footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="copy-right">
                            <p>Copyright &copy; {date} <Link to="/">| Dream On: Global |</Link> all rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;