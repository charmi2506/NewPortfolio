import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col items-center">

          <h2 className="text-3xl font-bold gradient-text">
            Charmi Gubbala
          </h2>

          <p className="text-gray-400 mt-3">
            AI & ML Student • Full Stack Developer
          </p>

          <div className="flex gap-5 mt-6">

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="mailto:charmii2506@gmail.com"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/charmi2506"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/in/charmi-gubbala-3bb927290/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </motion.a>

          </div>

          <div className="w-full border-t border-white/10 mt-8 pt-6">

            <p className="text-center text-sm text-gray-500">
              © 2026 Charmi Gubbala • Built with React, Tailwind CSS & Framer Motion
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}