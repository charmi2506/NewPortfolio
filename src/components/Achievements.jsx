import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

const achievements = [
  {
    number: "650+",
    title: "Problems Solved",
    icon: <FaCode />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "8.85",
    title: "Current CGPA",
    icon: <FaGraduationCap />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    number: "4+",
    title: "Major Projects",
    icon: <FaProjectDiagram />,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "10+",
    title: "Certifications",
    icon: <FaCertificate />,
    color: "from-orange-500 to-yellow-500",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-medium">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Numbers That
            <span className="gradient-text"> Matter</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 leading-8">
            A snapshot of my learning journey, technical growth, and continuous
            commitment to building impactful software.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                glass
                rounded-2xl
                p-6
                text-center
                border
                border-white/10
                hover:border-cyan-400/30
                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div
                className={`
                  w-16
                  h-16
                  rounded-full
                  mx-auto
                  mb-5
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-white
                  bg-gradient-to-r
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              {/* Number */}

              <h3 className="text-5xl font-bold gradient-text">
                {item.number}
              </h3>

              {/* Title */}

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}