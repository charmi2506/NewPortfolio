import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        glass
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        hover:border-cyan-400/40
        transition-all
        duration-300
        flex
        flex-col
      "
    >
      {/* Image */}
{/* 
      <div className="h-48 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition
            duration-500
          "
        />

      </div> */}

      {/* Content */}

      <div className="p-5 flex flex-col flex-1">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="text-cyan-400 text-sm mt-1">
          {project.subtitle}
        </p>

        <p className="text-gray-400 text-sm leading-6 mt-4 flex-1">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          {/* <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              transition
            "
          >
            <FaGithub />
            GitHub
          </a> */}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              border
              border-white/20
              hover:border-cyan-400
              transition
            "
          >
            <FaGithub />
            GitHub

          </a>

        </div>

      </div>

    </motion.div>
  );
}