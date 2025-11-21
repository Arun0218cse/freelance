import { Link } from 'react-router-dom';
import {
    FaReact,
    FaServer,
    FaDatabase,
    FaCheckCircle,
    FaArrowRight,
    FaCode,
    FaPaintBrush,
    FaRocket
} from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <SiFlutter />,
            title: 'Flutter Development',
            description: 'Cross-platform mobile app development for iOS and Android with beautiful, native-like interfaces.',
            image: '/flutter.png',
            features: [
                'Cross-platform mobile apps',
                'Native performance',
                'Beautiful UI/UX',
                'State management (Provider, Riverpod, Bloc)',
                'API integration',
                'Firebase integration'
            ],
            color: '#02569B'
        },
        {
            icon: <FaReact />,
            title: 'React Development',
            description: 'Modern, responsive web applications built with React.js and the latest frontend technologies.',
            image: '/react.png',
            features: [
                'Single Page Applications (SPA)',
                'Responsive design',
                'React Hooks & Context API',
                'Redux state management',
                'TypeScript integration',
                'Performance optimization'
            ],
            color: '#61DAFB'
        },
        {
            icon: <FaServer />,
            title: 'Backend Development',
            description: 'Robust and scalable backend solutions using Node.js, Express.js, and RESTful API design.',
            image: '/backend.png',
            features: [
                'RESTful API development',
                'Authentication & Authorization',
                'Microservices architecture',
                'Real-time functionality (Socket.io)',
                'API documentation',
                'Security best practices'
            ],
            color: '#339933'
        },
        {
            icon: <FaDatabase />,
            title: 'Database Solutions',
            description: 'Efficient database design and management with MongoDB and MySQL for optimal data storage.',
            image: '/backend.png',
            features: [
                'Database schema design',
                'Query optimization',
                'Data modeling',
                'Migration strategies',
                'Backup & recovery',
                'Performance tuning'
            ],
            color: '#47A248'
        }
    ];

    const process = [
        {
            icon: <FaCode />,
            title: 'Discovery & Planning',
            description: 'Understanding your requirements and planning the perfect solution'
        },
        {
            icon: <FaPaintBrush />,
            title: 'Design & Development',
            description: 'Creating beautiful designs and writing clean, efficient code'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Testing & Quality',
            description: 'Rigorous testing to ensure everything works perfectly'
        },
        {
            icon: <FaRocket />,
            title: 'Deployment & Support',
            description: 'Launching your project and providing ongoing support'
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content text-center">
                        <h1 className="page-title animate-fade-in-up">
                            My <span className="text-gradient">Services</span>
                        </h1>
                        <p className="page-description animate-fade-in-up">
                            Comprehensive development solutions to bring your ideas to life
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-section section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-overlay">
                                        <div
                                            className="service-icon-large"
                                            style={{ color: service.color }}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="service-content">
                                    <div
                                        className="service-icon"
                                        style={{ backgroundColor: `${service.color}20`, color: service.color }}
                                    >
                                        {service.icon}
                                    </div>

                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>

                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="service-feature">
                                                <FaCheckCircle className="check-icon" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/contact" className="service-cta">
                                        <span>Get Started</span>
                                        <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">
                            My <span className="text-gradient">Development Process</span>
                        </h2>
                        <p className="section-description">
                            A proven workflow that delivers exceptional results
                        </p>
                    </div>

                    <div className="process-grid">
                        {process.map((step, index) => (
                            <div
                                key={index}
                                className="process-step"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="step-number">{index + 1}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta section">
                <div className="container">
                    <div className="cta-box">
                        <h2 className="cta-title">
                            Ready to Build Something <span className="text-gradient">Amazing</span>?
                        </h2>
                        <p className="cta-text">
                            Let's discuss your project and create a solution that exceeds your expectations
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <span>Start Your Project</span>
                                <FaRocket />
                            </Link>
                            <Link to="/portfolio" className="btn btn-outline btn-lg">
                                <span>View Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
