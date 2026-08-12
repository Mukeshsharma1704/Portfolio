import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
  FiGithub,
} from "react-icons/fi";

import { projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(1200);

  const carouselRef = useRef(null);
  const wheelLock = useRef(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  /*
   * --------------------------------------------------
   * RESPONSIVE MEASUREMENTS
   * --------------------------------------------------
   */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const updateSize = () => {
      setCarouselWidth(carousel.clientWidth);
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(carousel);

    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  /*
   * --------------------------------------------------
   * RESPONSIVE BREAKPOINT
   * --------------------------------------------------
   */

  const getLayout = () => {
    if (carouselWidth <= 600) {
      return {
        visible: 0,
        cardWidth: Math.min(carouselWidth * 0.86, 420),
        spacing: 1,
      };
    }

    if (carouselWidth <= 900) {
      return {
        visible: 1,
        cardWidth: Math.min(carouselWidth * 0.62, 430),
        spacing: 0.82,
      };
    }

    if (carouselWidth <= 1200) {
      return {
        visible: 1,
        cardWidth: Math.min(carouselWidth * 0.40, 420),
        spacing: 0.82,
      };
    }

    return {
      visible: 2,
      cardWidth: Math.min(carouselWidth * 0.29, 440),
      spacing: 0.82,
    };
  };

  const layout = getLayout();

  /*
   * --------------------------------------------------
   * CHANGE PROJECT
   * --------------------------------------------------
   */

  const changeProject = (direction) => {
    setActiveIndex((current) => {
      return (
        (current + direction + projects.length) %
        projects.length
      );
    });
  };

  const nextProject = () => {
    changeProject(1);
  };

  const prevProject = () => {
    changeProject(-1);
  };

  const goToProject = (index) => {
    setActiveIndex(index);
  };

  /*
   * --------------------------------------------------
   * GET RELATIVE POSITION
   * --------------------------------------------------
   *
   * Example:
   *
   * active = 2
   *
   * project 0 -> -2
   * project 1 -> -1
   * project 2 ->  0
   * project 3 -> +1
   * project 4 -> +2
   *
   * This makes the carousel circular.
   */

  const getPosition = (index) => {
    let difference = index - activeIndex;

    if (difference > projects.length / 2) {
      difference -= projects.length;
    }

    if (difference < -projects.length / 2) {
      difference += projects.length;
    }

    return difference;
  };

  /*
   * --------------------------------------------------
   * MOUSE WHEEL
   * --------------------------------------------------
   *
   * IMPORTANT:
   * This is attached ONLY to the carousel.
   *
   * It no longer hijacks the entire webpage.
   */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const handleWheel = (event) => {
      const horizontal =
        Math.abs(event.deltaX) > Math.abs(event.deltaY);

      const movement = horizontal
        ? event.deltaX
        : event.deltaY;

      if (Math.abs(movement) < 15) return;

      /*
       * Prevent the normal page scroll only while
       * the user is actually interacting with the carousel.
       */
      event.preventDefault();

      if (wheelLock.current) return;

      wheelLock.current = true;

      if (movement > 0) {
        nextProject();
      } else {
        prevProject();
      }

      /*
       * Prevent trackpads from firing 10-20 changes
       * from one swipe.
       */
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 550);
    };

    carousel.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
   * --------------------------------------------------
   * TOUCH / SWIPE
   * --------------------------------------------------
   */

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    /*
     * Ignore mostly vertical swipes.
     */
    if (Math.abs(deltaX) < 50) return;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    if (deltaX < 0) {
      nextProject();
    } else {
      prevProject();
    }
  };

  /*
   * --------------------------------------------------
   * KEYBOARD
   * --------------------------------------------------
   */

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextProject();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevProject();
    }
  };

  return (
    <section id="projects" className="projects-section">
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="projects-header">
        <div className="projects-heading">
          <p className="projects-label">03 /</p>

          <h2 className="projects-title">
            Projects<span>.</span>
          </h2>
        </div>

        <div className="projects-header-right">
          <p className="projects-description">
            Here are some of my selected projects.
            <br />
            Each one is crafted with passion,
            <br />
            performance, and purpose.
          </p>

          <a
            href="#projects"
            className="projects-all-button"
          >
            VIEW ALL PROJECTS
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* ==========================================
          CAROUSEL
      ========================================== */}

      <div
        ref={carouselRef}
        className="projects-carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label="Projects carousel"
      >
        {/* LEFT ARROW */}

        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={prevProject}
          aria-label="Previous project"
        >
          <FiArrowLeft />
        </button>

        {/* CARD TRACK */}

        <div className="projects-track">
          {projects.map((project, index) => {
            const position = getPosition(index);

            /*
             * Only render cards that are close enough
             * to the active card.
             */
            if (Math.abs(position) > layout.visible) {
              return null;
            }

            return (
              <ProjectCard
                key={project.id}
                project={project}
                position={position}
                cardWidth={layout.cardWidth}
                spacing={layout.spacing}
                active={position === 0}
              />
            );
          })}
        </div>

        {/* RIGHT ARROW */}

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={nextProject}
          aria-label="Next project"
        >
          <FiArrowRight />
        </button>
      </div>

      {/* ==========================================
          DOTS
      ========================================== */}

      <div className="projects-dots">
        {projects.map((project, index) => (
          <button
            type="button"
            key={project.id}
            onClick={() => goToProject(index)}
            className={`project-dot ${
              index === activeIndex ? "active" : ""
            }`}
            aria-label={`Go to ${project.title}`}
            aria-current={
              index === activeIndex ? "true" : undefined
            }
          />
        ))}
      </div>

      {/* ==========================================
          CTA
      ========================================== */}

      <div className="projects-bottom-cta">
        <div className="cta-star">✦</div>

        <div className="cta-line" />

        <h3>Have a project in mind?</h3>

        <div className="cta-line" />

        <p>Let's build something amazing together.</p>

        <a href="#contact">
          LET'S WORK TOGETHER
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}

/*
====================================================
PROJECT CARD
====================================================
*/

function ProjectCard({
  project,
  position,
  cardWidth,
  spacing,
  active,
}) {
  /*
   * Horizontal distance from center.
   *
   * Instead of:
   *
   * left: calc(50% - 500px)
   *
   * we calculate everything from the actual
   * measured card width.
   */

  const x =
    position * cardWidth * spacing;

  /*
   * Depth effect.
   */

  const distance = Math.abs(position);

  const scale =
    distance === 0
      ? 1
      : distance === 1
      ? 0.91
      : 0.82;

  const opacity =
    distance === 0
      ? 1
      : distance === 1
      ? 0.78
      : 0.42;

  const rotate =
    position === -2
      ? -4
      : position === -1
      ? -2
      : position === 1
      ? 2
      : position === 2
      ? 4
      : 0;

  return (
    <motion.article
      className={`project-card ${
        active ? "project-card-active" : ""
      }`}
      style={{
        width: cardWidth,
        marginLeft: -cardWidth / 2,
      }}
      initial={false}
      animate={{
        x,
        scale,
        rotate,
        opacity,
        zIndex: active ? 20 : 10 - distance,
      }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 22,
        mass: 0.85,
      }}
    >
      {/* IMAGE */}

      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          draggable="false"
        />
      </div>

      {/* CONTENT */}

      <div className="project-card-content">
        <div className="project-card-number">
          {String(project.id).padStart(2, "0")}
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card-bottom">
          <div className="project-tech">
            {project.tech.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="project-card-links">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <FiGithub />
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;