import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Passionate About Building
            <br />
            Intelligent Solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl"></div>

              <img
                src="/profile.jpeg"
                alt="Charmi"
                className="
                  relative
                  w-[340px]
                  rounded-3xl
                  border
                  border-white/10
                  shadow-2xl
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold mb-6">
              AI & Machine Learning Student
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I'm an Artificial Intelligence & Machine Learning student
              passionate about creating intelligent software solutions
              through Full-Stack Development, Generative AI and modern
              web technologies.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I enjoy solving real-world problems, building scalable
              applications, and continuously learning new technologies.
              Alongside development, I actively practice Data Structures
              & Algorithms to strengthen my problem-solving skills.
            </p>

            {/* Timeline */}

            <div className="mt-10 space-y-6">

              <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition">

                <h4 className="font-semibold text-cyan-400">
                  🎓 Education
                </h4>

                <p className="mt-2 text-gray-300">
                  B.Tech in Artificial Intelligence & Machine Learning
                </p>

                <p className="text-gray-500 text-sm">
                  Expected Graduation • 2027
                </p>

              </div>

              <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition">

                <h4 className="font-semibold text-cyan-400">
                  💼 Experience
                </h4>

                <p className="mt-2 text-gray-300">
                  Full Stack Development Trainee
                </p>

                <p className="text-gray-500 text-sm">
                  Technical Hub Pvt. Ltd.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Cards */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-20"
        >

          {[
            {
              title: "Education",
              value: "B.Tech AI & ML",
            },
            {
              title: "Experience",
              value: "1+ Year",
            },
            {
              title: "Problem Solving",
              value: "500+ DSA",
            },
            {
              title: "Interests",
              value: "AI • Web • ML",
            },
          ].map((card) => (

            <div
              key={card.title}
              className="
                glass
                rounded-2xl
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]
                transition-all
                duration-300
              "
            >

              <h4 className="text-cyan-400 font-semibold">
                {card.title}
              </h4>

              <p className="mt-3 text-xl font-bold">
                {card.value}
              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}