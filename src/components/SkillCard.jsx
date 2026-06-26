import { motion } from "framer-motion";

export default function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        glass
        rounded-3xl
        p-8
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]
        transition-all
        duration-300
      "
    >
      <h3 className="text-2xl font-semibold mb-8">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4">

        {items.map((skill) => {

          const Icon = skill.icon;

          return (

            <motion.div
              key={skill.name}
              whileHover={{
                scale: 1.08,
              }}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-xl
                bg-white/5
                border
                border-white/10
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >

              {Icon ? (

                <Icon
                  size={24}
                  color={skill.color}
                />

              ) : (

                <span className="text-xl">
                  {skill.emoji}
                </span>

              )}

              <span className="font-medium">
                {skill.name}
              </span>

            </motion.div>

          );
        })}

      </div>
    </motion.div>
  );
}