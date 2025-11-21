import { Link } from 'react-router-dom';
import { FaDownload, FaRocket, FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
    const values = [
        { icon: <FaCode />, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
        { icon: <FaRocket />, title: 'Fast Delivery', description: 'Meeting deadlines without compromising quality' },
        { icon: <FaLightbulb />, title: 'Innovation', description: 'Always learning and implementing new technologies' },
        { icon: <FaHeart />, title: 'Passion', description: 'Love for creating exceptional digital experiences' },
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title text-center">
                        About <span className="text-gradient">Me</span>
                    </h1>
                    <p className="page-description text-center">
                        Full-stack developer passionate about creating amazing digital experiences
                    </p>
                </div>
            </section>

            <section className="about-content section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="/developer.png" alt="Arun" />
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">
                                Hi, I'm <span className="text-gradient">Arun</span>
                            </h2>
                            <p>
                                I'm a passionate full-stack developer with over 4 years of experience in building
                                mobile and web applications. I specialize in Flutter, React, Node.js, and modern
                                database solutions.
                            </p>
                            <p>
                                My journey in software development started with a deep curiosity about how things work.
                                Today, I transform complex problems into elegant solutions that users love.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and staying up-to-date with the latest
                                technologies to deliver the best possible solutions for my clients.
                            </p>
                            <div className="about-buttons">
                                <Link to="/contact" className="btn btn-primary">
                                    <FaRocket /> Hire Me
                                </Link>
                                <button className="btn btn-outline">
                                    <FaDownload /> Download CV
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="values-section">
                        <h2 className="section-title text-center mb-2xl">
                            My <span className="text-gradient">Core Values</span>
                        </h2>
                        <div className="grid grid-4">
                            {values.map((value, index) => (
                                <div key={index} className="value-card glass-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-description">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
