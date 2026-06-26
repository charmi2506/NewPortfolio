import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { certifications } from "../data/certificationsData";

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Professional{" "}
            <span className="gradient-text">
              Certifications
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 leading-8">
            Certifications that strengthen my expertise in Cloud Computing,
            Artificial Intelligence, Full-Stack Development, Databases and
            Software Engineering.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((certificate, index) => (

            <motion.div
              key={certificate.title}
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
            >
              <CertificateCard
                certificate={certificate}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}