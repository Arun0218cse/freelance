import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCode, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Skills', path: '/skills' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="logo">
                        <FaCode className="logo-icon" />
                        <span className="logo-text">
                            Arun<span className="text-gradient">.dev</span>
                        </span>
                    </Link>

                    <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary nav-cta">
                            <FaEnvelope />
                            <span>Hire Me</span>
                        </Link>
                    </div>

                    <button
                        className="nav-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
