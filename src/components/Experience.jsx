import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaBriefcase />,
    title: "Full Stack Development Trainee",
    organization: "Technical Hub Pvt. Ltd.",
    duration: "May 2025 – June 2026",
    description:
      "Worked on production-ready full-stack web applications using React, Node.js, Express, PostgreSQL and Docker. Designed REST APIs, optimized database schemas, and collaborated within a software engineering team.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },

  {
    icon: <FaGraduationCap />,
    title: "B.Tech - Artificial Intelligence & Machine Learning",
    organization: "Artificial Intelligence & Machine Learning",
    duration: "2023 – 2027",
    description:
      "Building strong foundations in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, DBMS, Operating Systems, and Full Stack Development.",
    skills: [
      "AI",
      "Machine Learning",
      "DSA",
      "DBMS",
      "OOP",
      "Computer Networks",
    ],
  },

  {
    icon: <FaCode />,
    title: "Competitive Programming",
    organization: "Problem Solving Journey",
    duration: "Ongoing",
    description:
      "Solved 650+ coding problems across LeetCode, GeeksforGeeks and CodeChef while strengthening algorithmic thinking and software engineering fundamentals.",
    skills: [
      "LeetCode",
      "GeeksforGeeks",
      "CodeChef",
      "Algorithms",
      "Problem Solving",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-widest">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Journey &
            <span className="gradient-text">
              {" "}Experience
            </span>
          </h2>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-[2px]
              bg-cyan-500/30
            "
          ></div>

          {timeline.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              className="
                relative
                pl-20
                mb-16
              "
            >

              {/* Icon */}

              <div
                className="
                  absolute
                  left-0
                  top-2
                  w-12
                  h-12
                  rounded-full
                  bg-cyan-500
                  flex
                  items-center
                  justify-center
                  text-white
                  text-lg
                  shadow-lg
                "
              >
                {item.icon}
              </div>

              {/* Card */}

              <div
                className="
                  glass
                  rounded-3xl
                  p-8
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="flex justify-between flex-wrap gap-3">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.organization}
                    </p>

                  </div>

                  <span
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                    "
                  >
                    {item.duration}
                  </span>

                </div>

                <p className="text-gray-400 leading-8 mt-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {item.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}