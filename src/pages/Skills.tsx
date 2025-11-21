import { SiFlutter, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJavascript, SiTypescript, SiDart, SiGit, SiDocker, SiFigma } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Mobile Development',
            skills: [
                { name: 'Flutter', icon: <SiFlutter />, level: 95, color: '#02569B' },
                { name: 'Dart', icon: <SiDart />, level: 90, color: '#0175C2' },
            ]
        },
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React', icon: <SiReact />, level: 90, color: '#61DAFB' },
                { name: 'JavaScript', icon: <SiJavascript />, level: 92, color: '#F7DF1E' },
                { name: 'TypeScript', icon: <SiTypescript />, level: 88, color: '#3178C6' },
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', icon: <SiNodedotjs />, level: 90, color: '#339933' },
                { name: 'Express', icon: <SiExpress />, level: 88, color: '#000000' },
            ]
        },
        {
            title: 'Database & Tools',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#47A248' },
                { name: 'MySQL', icon: <SiMysql />, level: 82, color: '#4479A1' },
                { name: 'Git', icon: <SiGit />, level: 90, color: '#F05032' },
                { name: 'Docker', icon: <SiDocker />, level: 75, color: '#2496ED' },
                { name: 'Figma', icon: <SiFigma />, level: 80, color: '#F24E1E' },
            ]
        }
    ];

    return (
        <div className="skills-page">
            <section className="skills-hero">
                <div className="container">
                    <h1 className="page-title text-center">
                        My <span className="text-gradient">Skills</span>
                    </h1>
                    <p className="page-description text-center">
                        Technologies and tools I use to bring projects to life
                    </p>
                </div>
            </section>

            <section className="skills-content section">
                <div className="container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h2 className="category-title">
                                <span className="text-gradient">{category.title}</span>
                            </h2>
                            <div className="skills-grid">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-card">
                                        <div className="skill-header">
                                            <div className="skill-info">
                                                <div className="skill-icon" style={{ color: skill.color }}>
                                                    {skill.icon}
                                                </div>
                                                <h3 className="skill-name">{skill.name}</h3>
                                            </div>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
