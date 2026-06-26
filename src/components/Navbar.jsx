import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "about",
    "skills",
    "projects",
    "experience",
    "certifications",
    "contact",
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-[#070B14]/75
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-600
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
                shadow-lg
                shadow-cyan-500/30
                transition-all
                duration-300
                hover:scale-110
              "
            >
              CG
            </div>

            <div className="leading-tight">

              <h1 className="text-lg font-bold text-white">
                Charmi
              </h1>

              <p className="text-xs text-gray-400">
                AI & ML Student | Full-Stack Developer
              </p>

            </div>

          </div>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="
                  cursor-pointer
                  text-gray-300
                  font-medium
                  capitalize
                  relative
                  transition-all
                  duration-300
                  hover:text-cyan-400

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item}
              </Link>

            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-2xl
            text-white
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            md:hidden
            backdrop-blur-xl
            bg-[#070B14]/95
            border-t
            border-white/10
            px-6
            py-5
          "
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setOpen(false)}
              className="
                block
                py-4
                text-lg
                capitalize
                text-gray-300
                hover:text-cyan-400
                transition
              "
            >
              {item}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}