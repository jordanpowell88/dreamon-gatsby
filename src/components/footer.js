import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
    <>
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
     <Helmet>
        <script async src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jarallax/1.12.0/jarallax-element.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js"></script>
        <script async src={'../../js/main.js'}></script>
    </Helmet>
    </>
    )
}
export default Footer;