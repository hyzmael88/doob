import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">Inicio</Link>
                
            </li>
            
            <li><Link to="/about-us">Acerca</Link></li>
            <li><Link to="/brand">Clientes</Link></li>

            {/* <li className="with-megamenu"><Link to="#">Elements</Link>
                <div className="rn-megamenu">
                    <div className="wrapper">
                        <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/button">Button</Link></li>
                                    <li><Link to="/service">Service</Link></li>
                                    <li><Link to="/counter">Counter</Link></li>
                                    <li><Link to="/progressbar">Progressbar</Link></li>
                                    <li><Link to="/accordion">Accordion</Link></li>
                                    <li><Link to="/social-share">Social Share</Link></li>
                                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/testimonial">Testimonial</Link></li>
                                    <li><Link to="/timeline">Timeline</Link></li>
                                    <li><Link to="/tab">Tab</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/split">Split Section</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/call-to-action">Call To Action</Link></li>
                                    <li><Link to="/video-popup">Video</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/brand">Brand</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/error">404</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/advance-tab">Advance Tab <span className="rn-badge-card">Hot</span></Link></li>
                                    <li><Link to="#">Brand Carousel <span className="rn-badge-card">Comming</span></Link></li>
                                    <li><Link to="advance-pricing">Advance Pricing <span className="rn-badge-card">Hot</span></Link></li>
                                    <li><Link to="/portfolio-details/1">Portfolio Details</Link></li>
                                    <li><Link to="/blog-details/1">Blog Details</Link></li>
                                    <li><Link to="/error">404 Page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li> */}

            {/* <li className="has-droupdown"><Link to="#">Blog</Link>
                <ul className="submenu">
                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                    <li><Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                    <li><Link to="/blog-list-view">Blog List View</Link></li>
                    <li><Link to="/blog-list-sidebar">Blog List View Sidebar</Link></li>
                </ul>
            </li> */}

            <li><Link to="portfolio-box-layout">Portafolio</Link>
               
            </li>

            <li ><Link to="/contact">Contacto</Link></li>
        </ul>
    )
}
export default Nav; 
