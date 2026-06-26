import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificateCard({ certificate }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        glass
        rounded-2xl
        border
        border-white/10
        hover:border-cyan-400/40
        overflow-hidden
        transition-all
        duration-300
      "
    >
      {/* Top Gradient */}

      <div
        className={`h-2 bg-gradient-to-r ${certificate.color}`}
      />

      <div className="p-6">

        {/* Icon */}

        <div
          className={`
            w-14
            h-14
            rounded-xl
            bg-gradient-to-r
            ${certificate.color}
            flex
            items-center
            justify-center
            text-white
            text-2xl
            mb-5
          `}
        >
          <FaAward />
        </div>

        {/* Category */}

        <span
          className="
            text-xs
            uppercase
            tracking-widest
            text-cyan-400
          "
        >
          {certificate.category}
        </span>

        {/* Title */}

        <h3 className="text-xl font-bold mt-2">
          {certificate.title}
        </h3>

        {/* Issuer */}

        <p className="text-gray-400 mt-2">
          {certificate.issuer}
        </p>

        {/* Button */}

        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-cyan-400
            hover:text-cyan-300
            transition
          "
        >
          View Credential
          <FaExternalLinkAlt size={13} />
        </a>

      </div>
    </motion.div>
  );
}