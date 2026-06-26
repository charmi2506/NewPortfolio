import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stats = [
  {
    value: "500+",
    label: "Problems Solved",
  },
  {
    value: "8.85",
    label: "CGPA",
  },
  {
    value: "3+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Certifications",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid Background */}

      <div
        className="
        absolute
        inset-0
        opacity-30
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      ></div>

      {/* Background Glow */}

      <Parallax speed={-40}>
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      </Parallax>

      <Parallax speed={40}>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500/20 blur-[120px]" />
      </Parallax>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24"
      >
        {/* Badge */}

        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-sm text-gray-300">
              Available for Internships
            </span>
          </div>
        </motion.div>

        {/* Name */}

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          Charmi
        </motion.h1>

        {/* Subtitle */}

        <motion.h2
          variants={item}
          className="mt-6 text-3xl md:text-5xl font-semibold gradient-text leading-tight"
        >
          AI & ML Student
          <br />
          Full-Stack Developer
        </motion.h2>

        {/* Description */}

        <motion.p
          variants={item}
          className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-gray-400"
        >
          AI & Machine Learning student passionate about Full-Stack
          Development, Generative AI, and building scalable software
          solutions that solve real-world problems through modern
          software engineering.
        </motion.p>

        {/* Buttons */}

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-80}
            className="
              cursor-pointer
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              hover:scale-105
              transition-all
              duration-300
              font-medium
              shadow-lg
              shadow-cyan-500/20
            "
          >
            Explore My Work →
          </Link>

          <a
            href="/resume.pdf"
            download="Charmi_Gubbala_Resume.pdf"
            className="
              px-8
              py-4
              rounded-xl
              border
              border-gray-600
              hover:border-cyan-400
              hover:text-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/10
              transition-all
              duration-300
              font-medium
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}

        <motion.div
          variants={item}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/charmi2506"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-14
              h-14
              rounded-full
              glass
              flex
              items-center
              justify-center
              text-2xl
              hover:text-cyan-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/charmi-gubbala-3bb927290/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-14
              h-14
              rounded-full
              glass
              flex
              items-center
              justify-center
              text-2xl
              hover:text-cyan-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Stats */}

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                glass
                px-8
                py-6
                rounded-2xl
                min-w-[180px]
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-3xl font-bold gradient-text">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}