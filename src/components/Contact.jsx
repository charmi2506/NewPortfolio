import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-medium">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Build
            <span className="gradient-text"> Something Amazing</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I'm actively looking for Software Engineering, AI/ML and Full Stack
            Development opportunities. Feel free to reach out for internships,
            collaborations or exciting projects.
          </p>

        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            glass
            rounded-3xl
            p-10
            border
            border-white/10
          "
        >

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left */}

            <div>

              <h3 className="text-3xl font-bold mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">

                <a
                  href="mailto:charmii2506@gmail.com"
                  className="flex items-center gap-5 hover:text-cyan-400 transition"
                >
                  <FaEnvelope className="text-cyan-400 text-2xl" />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Email
                    </p>

                    <p>
                      charmii2506@gmail.com
                    </p>
                  </div>

                </a>

                <div className="flex items-center gap-5">

                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Location
                    </p>

                    <p>
                      Andhra Pradesh, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <h3 className="text-3xl font-bold mb-8">
                Connect With Me
              </h3>

              <div className="flex gap-5 mb-8">

                <a
                  href="https://github.com/charmi2506"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14
                    h-14
                    rounded-xl
                    glass
                    flex
                    items-center
                    justify-center
                    hover:text-cyan-400
                    hover:scale-110
                    transition-all
                  "
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/charmi-gubbala-3bb927290/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14
                    h-14
                    rounded-xl
                    glass
                    flex
                    items-center
                    justify-center
                    hover:text-cyan-400
                    hover:scale-110
                    transition-all
                  "
                >
                  <FaLinkedin size={24} />
                </a>

              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  transition
                "
              >
                <FaFileDownload />

                Download Resume

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}