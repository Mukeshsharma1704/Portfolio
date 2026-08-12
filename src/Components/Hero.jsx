import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiZap,
  FiArrowDown,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f2e8] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Decorative circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-[7%] top-[12%] h-20 w-20 rounded-full border-[8px] border-[#f04438]/20 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#f04438]" />

          <span className="text-[10px] font-bold tracking-[0.24em] text-[#171717] sm:text-xs">
            CREATIVE DEVELOPER
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* LEFT SIDE */}

          <div>
            {/* HERO TITLE */}
            <div className="relative">
              {/* I DESIGN */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 font-display text-[17vw] leading-[0.78] tracking-[-0.065em] text-[#171717] sm:text-[13vw] lg:text-[8vw]"
              >
                <motion.span
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 16,
                  }}
                  className="inline-block cursor-pointer"
                >
                  I DESIGN.
                </motion.span>
              </motion.h1>

              {/* I CODE */}
              <motion.h1
                initial={{ opacity: 0, y: 55 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-20 ml-[4vw] mt-1 font-display text-[17vw] italic leading-[0.78] tracking-[-0.075em] text-[#171717] sm:text-[13vw] lg:text-[8vw]"
              >
                <motion.span
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 16,
                  }}
                  className="inline-block cursor-pointer"
                >
                  I CODE.
                </motion.span>
              </motion.h1>

              {/* I MAKE */}
              <motion.h1
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-30 ml-[11vw] mt-[-0.8vw] font-hand text-[20vw] leading-[0.8] tracking-[-0.035em] text-[#f04438] sm:text-[16vw] lg:text-[9vw]"
              >
                <motion.span
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 16,
                  }}
                  className="inline-block cursor-pointer"
                >
                  I MAKE.
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-10 max-w-[500px] text-sm leading-7 text-[#444] sm:text-base"
            >
              I create modern, responsive and interactive digital
              experiences using React, JavaScript and thoughtful design.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.62,
              }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 bg-[#171717] px-6 py-3.5 text-[10px] font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#f04438]"
              >
                VIEW MY WORK
                <FiArrowUpRight size={16} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 border border-[#bdb8ae] px-6 py-3.5 text-[10px] font-bold tracking-[0.12em] text-[#171717] transition-colors hover:border-[#f04438]"
              >
                LET'S TALK

                <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
              </motion.a>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.85,
              }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Skill
                icon={<FiCode />}
                text="REACT DEVELOPER"
              />

              <div className="hidden h-6 w-px bg-[#c9c4ba] sm:block" />

              <Skill
                icon={<FiLayers />}
                text="UI FOCUSED"
              />

              <div className="hidden h-6 w-px bg-[#c9c4ba] sm:block" />

              <Skill
                icon={<FiZap />}
                text="PROBLEM SOLVER"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE - YOUR PHOTO */}

          <HeroCard />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-14 flex justify-center lg:mt-8"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[9px] font-bold tracking-[0.22em] text-[#999]">
              SCROLL TO EXPLORE
            </span>

            <FiArrowDown className="text-sm text-[#555]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================================
   SKILL
======================================== */

function Skill({ icon, text }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex items-center gap-2.5"
    >
      <span className="text-sm text-[#f04438]">
        {icon}
      </span>

      <span className="text-[9px] font-bold tracking-[0.1em] text-[#333]">
        {text}
      </span>
    </motion.div>
  );
}

/* ========================================
   HERO CARD / PERSONAL IMAGE
======================================== */

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto min-h-[650px] w-full max-w-[560px]"
    >
      {/* LARGE SOFT BACKGROUND CIRCLE */}

      <motion.div
        animate={{
          scale: [1, 1.035, 1],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[10%] h-[78%] w-[82%] -translate-x-1/2 rounded-full bg-[#f04438]/10"
      />

      {/* LARGE OFF-WHITE OVAL OUTLINE */}

      <div className="absolute left-1/2 top-[6%] h-[82%] w-[78%] -translate-x-1/2 rounded-[48%] border-[3px] border-[#f7f2e8]" />

      {/* SECOND SUBTLE OVAL */}

      <div className="absolute left-[8%] top-[18%] h-[62%] w-[84%] rounded-[50%] border border-[#f04438]/10" />

      {/* TOP RIGHT DECORATIVE CIRCLE */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[4%] top-[2%] h-24 w-24 rounded-full border-[8px] border-[#f04438]/20 sm:h-28 sm:w-28"
      />

      {/* SMALL TOP LEFT DOT */}

      <div className="absolute left-[8%] top-[12%] h-5 w-5 rounded-full bg-[#f04438]/25" />

      {/* SMALL OUTLINED CIRCLE */}

      <div className="absolute right-[13%] top-[29%] h-5 w-5 rounded-full border-[2px] border-[#f04438]/30" />

      {/* SMALL BOTTOM LEFT DOT */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18%] left-[4%] h-4 w-4 rounded-full bg-[#f04438]/30"
      />

      {/* DECORATIVE DOT GRID */}

      <div className="absolute right-[7%] top-[42%] grid grid-cols-3 gap-2 opacity-40">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#f04438]" />
      </div>

      {/* GEOMETRIC LINES */}

      <div className="absolute left-[5%] top-[40%] h-px w-20 -rotate-[12deg] bg-[#f04438]/15" />

      <div className="absolute right-[8%] top-[48%] h-28 w-px rotate-[18deg] bg-[#f04438]/15" />

      <div className="absolute bottom-[28%] right-[8%] h-px w-24 rotate-[35deg] bg-[#f04438]/15" />

      {/* PLUS SYMBOLS */}

      <div className="absolute left-[12%] top-[34%] text-2xl font-light text-[#f04438]/25">
        +
      </div>

      <div className="absolute bottom-[28%] right-[18%] text-xl font-light text-[#f04438]/25">
        +
      </div>

      {/* PERSONAL IMAGE */}

      <motion.img
        src="/projects/profile.png"
        alt="Mukesh Sharma"
        whileHover={{
          y: -5,
          scale: 1.015,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative z-10 mx-auto block h-auto w-full max-w-[560px] object-contain"
        draggable="false"
      />

      {/* AVAILABLE FOR WORK */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
        className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap bg-white px-5 py-3.5 shadow-lg sm:bottom-0"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

        <span className="text-[9px] font-bold tracking-[0.13em] text-[#333]">
          AVAILABLE FOR WORK
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Hero;