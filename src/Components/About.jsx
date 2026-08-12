import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#171717] px-5 py-20 text-[#f7f2e8] sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between border-b border-white/15 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f04438]" />

            <span className="text-[10px] font-bold tracking-[0.22em] text-white/65">
              ABOUT ME
            </span>
          </div>

          <span className="hidden text-[10px] tracking-[0.18em] text-white/35 sm:block">
            01 / ABOUT
          </span>
        </motion.div>

        {/* MAIN */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="relative aspect-square overflow-hidden bg-[#f04438]">

              {/* Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-14 -top-14 h-44 w-44 rounded-full border-2 border-[#171717]/30"
              />

              {/* Square */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [-3, 0, -3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[16%] top-[16%] h-[68%] w-[68%] border-2 border-[#171717]"
              />

              {/* Number */}
              <div className="absolute bottom-3 left-5 z-10">
                <span className="font-display text-[7rem] leading-none text-[#171717]/10 sm:text-[9rem]">
                  01
                </span>
              </div>

              {/* PERSON IMAGE */}
              <motion.img
                src="/projects/profile.png"
                alt="Creative developer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-[-5%] left-1/2 z-[5] h-[105%] w-auto max-w-none -translate-x-1/2 object-contain"
              />

              
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-2 z-20 bg-[#f7f2e8] px-4 py-3 text-[#171717] shadow-lg sm:-right-5"
            >
              <p className="text-[8px] font-bold tracking-[0.16em]">
                BUILDING DIGITAL
              </p>

              <p className="mt-1 text-[8px] font-bold tracking-[0.16em] text-[#f04438]">
                EXPERIENCES →
              </p>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl font-display text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              I turn ideas into{" "}
              <span className="font-hand text-[#f04438]">
                experiences.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-white/55 sm:text-base"
            >
              <p>
                I'm a creative developer focused on building modern,
                responsive and interactive websites using React and
                JavaScript.
              </p>

              <p>
                I enjoy combining clean code with thoughtful design to
                create digital experiences that feel fast, intuitive and
                memorable.
              </p>
            </motion.div>

            {/* Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-flex items-center gap-5 border border-white/25 px-5 py-3.5 text-[10px] font-bold tracking-[0.14em] transition-colors hover:bg-[#f7f2e8] hover:text-[#171717]"
            >
              MORE ABOUT ME
              <FiArrowUpRight size={16} />
            </motion.a>

            {/* INFO */}
            <div className="mt-10 grid border-t border-white/15 sm:grid-cols-3">

              <Info
                icon={<FiCode />}
                title="DEVELOPMENT"
                text="React & JavaScript"
                delay={0.1}
              />

              <Info
                icon={<FiMonitor />}
                title="RESPONSIVE"
                text="Mobile-first UI"
                delay={0.15}
              />

              <Info
                icon={<FiLayers />}
                title="DESIGN"
                text="Clean interfaces"
                delay={0.2}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================
   INFO ITEM
======================================== */

function Info({ icon, title, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{ y: -3 }}
      className="border-b border-white/15 py-5 sm:border-b-0 sm:border-r sm:px-5 first:pl-0 last:border-r-0"
    >
      <div className="mb-3 text-sm text-[#f04438]">
        {icon}
      </div>

      <p className="text-[9px] font-bold tracking-[0.14em]">
        {title}
      </p>

      <p className="mt-1.5 text-[10px] text-white/35">
        {text}
      </p>
    </motion.div>
  );
}

export default About;