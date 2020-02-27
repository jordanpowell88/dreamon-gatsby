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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jarallax/1.12.0/jarallax-element.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollup/2.4.1/jquery.scrollUp.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnkFpuHPjRGE2vBvEqdTfOMIjQHpakS1A"></script>
        <script src={'../../js/main.js'}></script>
    </Helmet>
    </>
    )
}
export default Footer;