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
    FaComment
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Use Vercel API route in production, local server in development
        const apiUrl = window.location.hostname === 'localhost'
            ? 'http://localhost:3001/api/contact'
            : '/api/contact';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Clear success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'tech18arun@gmail.com',
            link: 'mailto:tech18arun@gmail.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 8608630388',
            link: 'tel:+918608630388'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Rasipuram, Namakkal, Tamil Nadu, India',
            link: null
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
                            Have a project in mind? Let's discuss how I can help bring your ideas to life
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
                                <h2 className="info-title">Let's Talk</h2>
                                <p className="info-description">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="info-card">
                                        <div className="info-icon">{info.icon}</div>
                                        <div className="info-content">
                                            <h3 className="info-card-title">{info.title}</h3>
                                            {info.link ? (
                                                <a href={info.link} className="info-value">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="info-value">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="social-section">
                                <h3 className="social-title">Connect With Me</h3>
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
                                    disabled={status === 'sending'}
                                >
                                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                                    <FaPaperPlane />
                                </button>

                                {status === 'success' && (
                                    <div className="success-message">
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="error-message">
                                        ✗ Failed to send message. Please try again or email me directly at tech18arun@gmail.com
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
