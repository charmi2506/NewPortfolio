import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSpring,
  SiMongodb,
  SiMysql,
  SiApachekafka,
} from "react-icons/si";

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#E76F00",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "SQL",
        emoji: "🗄️",
      },
    ],
  },

  {
    title: "Frontend Development",
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "Spring Boot",
        icon: SiSpring,
        color: "#6DB33F",
      },
      {
        name: "REST APIs",
        emoji: "🔗",
      },
    ],
  },

  {
    title: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        emoji: "🐘",
      },
    ],
  },

  {
    title: "Artificial Intelligence",
    items: [
      {
        name: "Generative AI",
        emoji: "🤖",
      },
      {
        name: "OpenAI API",
        emoji: "🧠",
      },
      {
        name: "Gemini API",
        emoji: "✨",
      },
      {
        name: "Machine Learning",
        emoji: "📈",
      },
    ],
  },

  {
    title: "Developer Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
      },
      {
        name: "Apache Kafka",
        icon: SiApachekafka,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        emoji: "💙",
      },
    ],
  },

  {
    title: "Core Computer Science",
    items: [
      {
        name: "Data Structures",
        emoji: "🧠",
      },
      {
        name: "Algorithms",
        emoji: "⚡",
      },
      {
        name: "Object-Oriented Programming",
        emoji: "📦",
      },
      {
        name: "DBMS",
        emoji: "🗃️",
      },
      {
        name: "Operating Systems",
        emoji: "💻",
      },
      {
        name: "Computer Networks",
        emoji: "🌐",
      },
    ],
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    solved: "300+",
    emoji: "💻",
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    platform: "GeeksforGeeks",
    solved: "200+",
    emoji: "🌿",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    platform: "CodeChef",
    solved: "150+",
    emoji: "👨‍🍳",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    platform: "HackerRank",
    solved: "10+",
    emoji: "🏆",
    gradient: "from-green-500 to-lime-400",
  },
];