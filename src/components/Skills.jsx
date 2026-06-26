import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills, codingProfiles } from "../data/SkillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-medium">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies &
            <span className="gradient-text">
              {" "}Expertise
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            I enjoy working across the entire software development
            lifecycle—from designing beautiful user interfaces to
            building scalable backend systems and AI-powered
            applications.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skills.map((category) => (

            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />

          ))}

        </div>

      </div>
    </section>
  );
}