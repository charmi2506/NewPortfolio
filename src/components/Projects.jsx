import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-medium tracking-widest uppercase">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 leading-8">
            A collection of AI, Full Stack and Backend projects built to solve
            real-world problems using modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
              }}
            >
              <ProjectCard
                project={project}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}