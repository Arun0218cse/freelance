import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { SiFlutter, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Mobile App',
            category: 'flutter',
            description: 'Full-featured e-commerce app with payment integration, cart management, and order tracking.',
            image: '/flutter.png',
            technologies: [<SiFlutter key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        },
        {
            id: 2,
            title: 'Social Media Dashboard',
            category: 'react',
            description: 'Analytics dashboard for social media management with real-time data visualization.',
            image: '/react.png',
            technologies: [<SiReact key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        },
        {
            id: 3,
            title: 'Task Management System',
            category: 'fullstack',
            description: 'Comprehensive task management platform with team collaboration features.',
            image: '/backend.png',
            technologies: [<SiReact key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        },
        {
            id: 4,
            title: 'Fitness Tracking App',
            category: 'flutter',
            description: 'Mobile fitness tracker with workout plans, progress tracking, and health metrics.',
            image: '/flutter.png',
            technologies: [<SiFlutter key="1" />, <SiNodedotjs key="2" />],
            github: '#',
            live: '#'
        },
        {
            id: 5,
            title: 'Real Estate Platform',
            category: 'react',
            description: 'Property listing and search platform with advanced filtering and map integration.',
            image: '/react.png',
            technologies: [<SiReact key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        },
        {
            id: 6,
            title: 'Restaurant Management',
            category: 'fullstack',
            description: 'Complete restaurant management system with POS, inventory, and analytics.',
            image: '/backend.png',
            technologies: [<SiReact key="1" />, <SiNodedotjs key="2" />, <SiMongodb key="3" />],
            github: '#',
            live: '#'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'flutter', label: 'Flutter' },
        { id: 'react', label: 'React' },
        { id: 'fullstack', label: 'Full Stack' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="container">
                    <div className="portfolio-hero-content text-center">
                        <h1 className="page-title animate-fade-in-up">
                            My <span className="text-gradient">Portfolio</span>
                        </h1>
                        <p className="page-description animate-fade-in-up">
                            Showcasing my best work and successful project deliveries
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="filter-section section">
                <div className="container">
                    <div className="filter-controls">
                        <FaFilter className="filter-icon" />
                        <div className="filter-buttons">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`filter-btn ${filter === cat.id ? 'filter-btn-active' : ''}`}
                                    onClick={() => setFilter(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.github} className="project-link" aria-label="GitHub">
                                                <FaGithub />
                                            </a>
                                            <a href={project.live} className="project-link" aria-label="Live Demo">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
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

export default Portfolio;
