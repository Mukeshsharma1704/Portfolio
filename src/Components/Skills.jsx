import { motion } from "framer-motion";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import { skills } from "../data/skills";

import "./Skills.css";

const icons = {
  JavaScript: <FaJsSquare />,
  "React.js": <FaReact />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  "Tailwind CSS": <FaCss3Alt />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaServer />,
  MongoDB: <FaDatabase />,
  SQL: <FaDatabase />,
  Python: <FaPython />,
  Java: <FaJava />,
  TypeScript: <FaCode />,
  DSA: <FaCode />,
  "Git & GitHub": <FaGitAlt />,
};

function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* HEADER */}
      <div className="skills-header">

        <div>
          <p className="skills-label">
            03 / Skills
          </p>

          <h2 className="skills-title">
            What I
            <br />
            <span>work with.</span>
          </h2>
        </div>

        <p className="skills-description">
          Technologies and tools I use to build modern,
          responsive and interactive digital experiences.
        </p>

      </div>


      {/* SKILLS */}
      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            key={skill.name}
            className="skill-card"

            initial={{
              opacity: 0,
              y: 25,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.45,
              delay: (index % 2) * 0.08,
            }}

            whileHover={{
              y: -3,
            }}
          >

            {/* ICON + NUMBER */}
            <div className="skill-top">

              <motion.div
                className="skill-icon"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
              >
                {icons[skill.name] || <FaCode />}
              </motion.div>

              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>


            {/* NAME */}
            <h3 className="skill-name">
              {skill.name}
            </h3>


            {/* CATEGORY + LEVEL */}
            <div className="skill-info">

              <span className="skill-category">
                {skill.category}
              </span>

              <span className="skill-level">
                {skill.level}
              </span>

            </div>


            {/* LINE */}
            <div className="skill-line" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;