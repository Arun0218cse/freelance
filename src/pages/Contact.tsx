import { useState } from 'react';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaPaperPlane,
    FaUser,
    FaComment,
    FaWhatsapp
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the mailto link with pre-filled data
        const mailtoLink = `mailto:tech18arun@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open the user's email client
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'tech18arun@gmail.com',
            link: 'mailto:tech18arun@gmail.com',
            action: 'Send Email'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 8608630388',
            link: 'tel:+918608630388',
            action: 'Call Now'
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            value: '+91 8608630388',
            link: 'https://wa.me/918608630388',
            action: 'Chat on WhatsApp'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Rasipuram, Namakkal, Tamil Nadu, India',
            link: 'https://www.google.com/maps/search/?api=1&query=Rasipuram,Namakkal,Tamil+Nadu,India',
            action: 'View on Map'
        }
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Arun0218cse', name: 'GitHub', color: '#333' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com', name: 'LinkedIn', color: '#0077B5' },
        { icon: <FaTwitter />, url: 'https://twitter.com', name: 'Twitter', color: '#1DA1F2' }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content text-center">
                        <h1 className="page-title animate-fade-in-up">
                            Get In <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="page-description animate-fade-in-up">
                            Click on any contact method below to reach me directly
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <div className="info-header">
                                <h2 className="info-title">Direct Contact</h2>
                                <p className="info-description">
                                    I'm always open to discussing new projects. Choose your preferred way to connect!
                                </p>
                            </div>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className="info-card clickable-card"
                                        target={info.title === 'Location' || info.title === 'WhatsApp' ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="info-icon">{info.icon}</div>
                                        <div className="info-content">
                                            <h3 className="info-card-title">{info.title}</h3>
                                            <p className="info-value">{info.value}</p>
                                            <span className="info-action">{info.action} →</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="social-section">
                                <h3 className="social-title">Social Profiles</h3>
                                <div className="social-links-contact">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link-contact"
                                            aria-label={link.name}
                                        >
                                            <div className="social-icon" style={{ color: link.color }}>
                                                {link.icon}
                                            </div>
                                            <span className="social-name">{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <div className="form-header">
                                <h3>Send a Quick Message</h3>
                                <p>This will open your default email app with the details filled in.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        <FaUser /> Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        <FaEnvelope /> Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">
                                        <FaComment /> Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-input"
                                        placeholder="Project Inquiry"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        <FaComment /> Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        placeholder="Tell me about your project..."
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg form-submit"
                                >
                                    <span>Open Email App</span>
                                    <FaPaperPlane />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
