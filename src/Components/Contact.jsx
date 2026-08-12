import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import "./Contact.css";

const contactLinks = [
  {
    name: "Email",
    value: "Mukeshsharma20031117@gmail.com",
    href: "mailto:Mukeshsharma20031117@gmail.com",
    icon: <FiMail />,
  },
  {
    name: "GitHub",
    value: "https://github.com/Mukeshsharma1704",
    href: "https://github.com/Mukeshsharma1704",
    icon: <FiGithub />,
  },
  {
  name: "LinkedIn",
  value: "linkedin.com/in/mukeshsharma",
  href: "https://www.linkedin.com/in/mukesh-sharma-b6081a406",
  icon: <FiLinkedin />,
},
];

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      {/* Header */}
      <motion.div
        className="contact-header"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <p className="contact-label">
          04 / CONTACT
        </p>

        <h2 className="contact-title">
          Let's make
          <br />
          <span>something.</span>
        </h2>

        <p className="contact-description">
          Have a project, idea, or opportunity in mind?
          <br />
          I'd love to hear from you.
        </p>
      </motion.div>

      {/* Contact links */}
      <div className="contact-links">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target={
              link.name === "Email"
                ? undefined
                : "_blank"
            }
            rel={
              link.name === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            className="contact-link"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              x: 5,
            }}
          >
            <div className="contact-link-left">
              <span className="contact-icon">
                {link.icon}
              </span>

              <div>
                <span className="contact-link-name">
                  {link.name}
                </span>

                <span className="contact-link-value">
                  {link.value}
                </span>
              </div>
            </div>

            <FiArrowUpRight className="contact-arrow" />
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <span>
          © {new Date().getFullYear()} Mukesh Sharma
        </span>

        <span>
          Built with React &amp; passion.
        </span>
      </div>
    </section>
  );
}

export default Contact;