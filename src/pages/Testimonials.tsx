import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            image: '/developer.png',
            rating: 5,
            text: 'Arun delivered an exceptional Flutter app for our business. His attention to detail and technical expertise exceeded our expectations. Highly recommended!',
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager, InnovateCo',
            image: '/developer.png',
            rating: 5,
            text: 'Working with Arun was a pleasure. He built our React dashboard with amazing UI/UX and delivered on time. Will definitely hire again!',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Founder, StartupHub',
            image: '/developer.png',
            rating: 5,
            text: 'Arun transformed our backend infrastructure with Node.js and MongoDB. The system is fast, scalable, and exactly what we needed.',
        },
        {
            name: 'David Park',
            role: 'CTO, CloudServe',
            image: '/developer.png',
            rating: 5,
            text: 'Professional, skilled, and reliable. Arun built a complex full-stack application for us with clean code and excellent documentation.',
        },
        {
            name: 'Lisa Anderson',
            role: 'Marketing Director, BrandBoost',
            image: '/developer.png',
            rating: 5,
            text: 'Incredible work! Arun created a beautiful, responsive website that perfectly represents our brand. Communication was excellent throughout.',
        },
        {
            name: 'James Wilson',
            role: 'Owner, FitnessPro',
            image: '/developer.png',
            rating: 5,
            text: 'The mobile app Arun developed for our fitness business is amazing. Our customers love it and it has helped grow our business significantly.',
        },
    ];

    return (
        <div className="testimonials-page">
            <section className="testimonials-hero">
                <div className="container">
                    <h1 className="page-title text-center">
                        Client <span className="text-gradient">Testimonials</span>
                    </h1>
                    <p className="page-description text-center">
                        What my clients say about working with me
                    </p>
                </div>
            </section>

            <section className="testimonials-content section">
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="quote-icon">
                                    <FaQuoteLeft />
                                </div>

                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>

                                <p className="testimonial-text">{testimonial.text}</p>

                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                                    <div className="author-info">
                                        <h3 className="author-name">{testimonial.name}</h3>
                                        <p className="author-role">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
