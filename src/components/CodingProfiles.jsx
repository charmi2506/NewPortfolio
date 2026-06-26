import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { codingProfiles } from "../data/CodingProfilesData";

export default function CodingProfiles() {
  return (
    <section
      id="coding"
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
          <p className="text-cyan-400 uppercase tracking-[0.2em]">
            Competitive Programming
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Problem Solving
            <span className="gradient-text">
              {" "}Journey
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            I continuously improve my analytical thinking by solving
            Data Structures & Algorithms problems across multiple
            competitive programming platforms.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {codingProfiles.map((profile, index) => (

            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                glass
                rounded-2xl
                p-6
                border
                border-white/10
                hover:border-cyan-400/40
                transition-all
                duration-300
                relative
                overflow-hidden
              "
            >

              {/* Gradient */}

              <div
                className={`
                  absolute
                  inset-0
                  opacity-10
                  bg-gradient-to-br
                  ${profile.color}
                `}
              />

              <div className="relative">

                <div className="text-5xl">
                  {profile.icon}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {profile.platform}
                </h3>

                <p className="text-gray-400 mt-2">
                  @{profile.username}
                </p>

                <div className="gradient-text text-4xl font-bold mt-6">
                  {profile.solved}
                </div>

                <p className="text-gray-400 text-sm mt-2">
                  Problems Solved
                </p>

                <div className="flex items-center gap-2 mt-8 text-cyan-400">

                  Visit Profile

                  <FaArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />

                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </div>
    </section>
  );
}