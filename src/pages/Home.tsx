import { Link } from 'react-router-dom';
import {
    FaCode,
    FaRocket,
    FaCheckCircle,
    FaMobileAlt,
    FaReact,
    FaNodeJs,
    FaArrowRight,
    FaStar,
    FaGithub,
    FaExternalLinkAlt,
    FaQuoteLeft
} from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiMysql, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import './Home.css';

const Home = () => {
    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '40+', label: 'Happy Clients' },
        { number: '4+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' },
    ];

    const features = [
        { icon: <FaMobileAlt />, title: 'Mobile First', description: 'Responsive designs that work perfectly on all devices' },
        { icon: <FaRocket />, title: 'Fast Performance', description: 'Optimized code for lightning-fast load times' },
        { icon: <FaCheckCircle />, title: 'Quality Code', description: 'Clean, maintainable, and scalable solutions' },
        { icon: <FaCode />, title: 'Modern Stack', description: 'Latest technologies and best practices' },
    ];

    const technologies = [
        { icon: <SiFlutter />, name: 'Flutter', color: '#02569B' },
        { icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
        { icon: <SiExpress />, name: 'Express', color: '#000000' },
        { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
        { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
    ];

    const recentProjects = [
        {
            id: 1,
            title: 'E-Commerce Mobile App',
            description: 'Full-featured e-commerce app with payment integration.',
            image: '/flutter.png',
            technologies: [<SiFlutter key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        },
        {
            id: 2,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media management.',
            image: '/react.png',
            technologies: [<SiReact key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        },
        {
            id: 3,
            title: 'Task Management System',
            description: 'Comprehensive task management platform.',
            image: '/backend.png',
            technologies: [<SiReact key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            image: '/developer.png',
            rating: 5,
            text: 'Arun delivered an exceptional Flutter app for our business. His attention to detail and technical expertise exceeded our expectations.',
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager, InnovateCo',
            image: '/developer.png',
            rating: 5,
            text: 'Working with Arun was a pleasure. He built our React dashboard with amazing UI/UX and delivered on time.',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Founder, StartupHub',
            image: '/developer.png',
            rating: 5,
            text: 'Arun transformed our backend infrastructure with Node.js and MongoDB. The system is fast, scalable, and exactly what we needed.',
        }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge animate-fade-in">
                                <FaStar className="badge-icon" />
                                <span>Available for Freelance Work</span>
                            </div>

                            <h1 className="hero-title animate-fade-in-up">
                                Hi, I'm <span className="text-gradient">Arun</span>
                                <br />
                                Full-Stack Developer
                            </h1>

                            <p className="hero-description animate-fade-in-up">
                                I craft beautiful, scalable applications using <strong>Flutter</strong>, <strong>React</strong>,
                                <strong> Node.js</strong>, and modern databases. Let's turn your ideas into reality!
                            </p>

                            <div className="hero-buttons animate-fade-in-up">
                                <Link to="/portfolio" className="btn btn-primary">
                                    <span>View My Work</span>
                                    <FaArrowRight />
                                </Link>
                                <Link to="/contact" className="btn btn-outline">
                                    <span>Get In Touch</span>
                                </Link>
                            </div>

                            <div className="hero-stats animate-fade-in-up">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <h3 className="stat-number text-gradient">{stat.number}</h3>
                                        <p className="stat-label">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hero-image animate-scale-in">
                            <div className="image-wrapper">
                                <div className="image-glow"></div>
                                <img src="/developer.png" alt="Arun - Full Stack Developer" />
                                <div className="floating-tech tech-1">
                                    <SiFlutter />
                                </div>
                                <div className="floating-tech tech-2">
                                    <FaReact />
                                </div>
                                <div className="floating-tech tech-3">
                                    <FaNodeJs />
                                </div>
                                <div className="floating-tech tech-4">
                                    <SiMongodb />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">
                            Why <span className="text-gradient">Choose Me</span>
                        </h2>
                        <p className="section-description">
                            I deliver high-quality solutions that exceed expectations
                        </p>
                    </div>

                    <div className="grid grid-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card glass-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Edizo Partnership Section */}
            <section className="edizo-section section">
                <div className="container">
                    <div className="edizo-content glass-card">
                        <div className="edizo-text">
                            <div className="section-header text-left">
                                <h2 className="section-title">
                                    Proudly Part of <span className="text-gradient">Edizo</span>
                                </h2>
                                <p className="section-description">
                                    Design. Develop. Deliver | Creative Services & Real-World Learning
                                </p>
                            </div>

                            <p className="edizo-description">
                                We are a comprehensive digital agency providing top-tier services in
                                <strong> UI/UX Design</strong>, <strong>Web & App Development</strong>, and
                                <strong> Branding</strong>. We also offer career-launching
                                <strong> Internships</strong> for aspiring developers and designers.
                            </p>

                            <div className="edizo-features-grid">
                                <div className="edizo-feature-item">
                                    <FaCheckCircle className="feature-icon-small" />
                                    <span>Professional Services</span>
                                </div>
                                <div className="edizo-feature-item">
                                    <FaCheckCircle className="feature-icon-small" />
                                    <span>Real-World Internships</span>
                                </div>
                                <div className="edizo-feature-item">
                                    <FaCheckCircle className="feature-icon-small" />
                                    <span>Expert Mentorship</span>
                                </div>
                            </div>

                            <div className="edizo-actions">
                                <a
                                    href="https://www.edizo.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <span>Visit Edizo.in</span>
                                    <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Recent Projects Section */}
            <section className="recent-projects section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">
                            Recent <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="section-description">
                            A glimpse of my latest work
                        </p>
                    </div>

                    <div className="projects-grid-home">
                        {recentProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card-home"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-image-home">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay-home">
                                        <div className="project-links-home">
                                            <a href={project.github} className="project-link-home" aria-label="GitHub">
                                                <FaGithub />
                                            </a>
                                            <a href={project.live} className="project-link-home" aria-label="Live Demo">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content-home">
                                    <h3 className="project-title-home">{project.title}</h3>
                                    <p className="project-description-home">{project.description}</p>

                                    <div className="project-tech-home">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-badge-home">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-xl">
                        <Link to="/portfolio" className="btn btn-outline">
                            <span>View All Projects</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">
                            Client <span className="text-gradient">Stories</span>
                        </h2>
                        <p className="section-description">
                            What people say about working with me
                        </p>
                    </div>

                    <div className="testimonials-grid-home">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card-home">
                                <div className="quote-icon-home">
                                    <FaQuoteLeft />
                                </div>

                                <div className="rating-home">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon-home" />
                                    ))}
                                </div>

                                <p className="testimonial-text-home">{testimonial.text}</p>

                                <div className="testimonial-author-home">
                                    <img src={testimonial.image} alt={testimonial.name} className="author-image-home" />
                                    <div className="author-info-home">
                                        <h3 className="author-name-home">{testimonial.name}</h3>
                                        <p className="author-role-home">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-xl">
                        <Link to="/testimonials" className="btn btn-outline">
                            <span>View All Testimonials</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="technologies section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">
                            <span className="text-gradient">Tech Stack</span> I Master
                        </h2>
                        <p className="section-description">
                            Specialized in cutting-edge technologies
                        </p>
                    </div>

                    <div className="tech-grid">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="tech-icon" style={{ color: tech.color }}>
                                    {tech.icon}
                                </div>
                                <h3 className="tech-name">{tech.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2 className="cta-title">
                                Ready to Start Your <span className="text-gradient">Next Project</span>?
                            </h2>
                            <p className="cta-description">
                                Let's work together to create something amazing. Get in touch today!
                            </p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    <span>Start a Project</span>
                                    <FaRocket />
                                </Link>
                                <Link to="/services" className="btn btn-secondary btn-lg">
                                    <span>View Services</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;
