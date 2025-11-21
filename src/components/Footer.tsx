import { Link } from 'react-router-dom';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCode,
    FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
    ];

    const services = [
        { name: 'Flutter Development', path: '/services' },
        { name: 'React Development', path: '/services' },
        { name: 'Backend Development', path: '/services' },
        { name: 'Database Design', path: '/services' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Arun0218cse', name: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com', name: 'LinkedIn' },
        { icon: <FaTwitter />, url: 'https://twitter.com', name: 'Twitter' },
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-section">
                            <Link to="/" className="footer-logo">
                                <FaCode className="footer-logo-icon" />
                                <span className="footer-logo-text">
                                    Arun<span className="text-gradient">.dev</span>
                                </span>
                            </Link>
                            <p className="footer-description">
                                Full-stack developer specializing in Flutter, React, Node.js, and modern database solutions.
                                Let's build something amazing together!
                            </p>
                            <div className="social-links">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-section">
                            <h3 className="footer-title">Services</h3>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link to={service.path} className="footer-link">
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h3 className="footer-title">Get In Touch</h3>
                            <ul className="footer-contact">
                                <li className="contact-item">
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:tech18arun@gmail.com" className="contact-link">
                                        tech18arun@gmail.com
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <FaPhone className="contact-icon" />
                                    <a href="tel:+918608630388" className="contact-link">
                                        +91 8608630388
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span className="contact-text">Rasipuram, Namakkal, Tamil Nadu, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {currentYear} Arun.dev. All rights reserved.
                        </p>
                        <p className="footer-credit">
                            Made with <FaHeart className="heart-icon" /> by Arun
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
            </div>
        </footer>
    );
};

export default Footer;
