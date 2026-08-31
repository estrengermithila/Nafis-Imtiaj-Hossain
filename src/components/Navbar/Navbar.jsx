
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active Menu
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href, name) => {
    setIsMenuOpen(false);
    setActive(name);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-md
        shadow-md
      "
    >
      <div className="px-6 py-5">

        {/* Mobile Navbar */}

        <div
          className="
            flex
            items-center
            justify-between
            lg:hidden
          "
        >
          <img
            src={logo}
            alt="logo"
            className="
              w-10
              h-10
              rounded-full
              object-cover
            "
          />

          <button
            onClick={() => scrollToSection("#home", "Home")}
            className="
              text-black
              font-bold
              text-lg
            "
          >
            Nafis Imtiaj Hossain
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              text-black
              text-2xl
            "
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navbar */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-[280px_1fr_180px]
            items-center
          "
        >
          {/* Logo + Name */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <img
              src={logo}
              alt="logo"
              className="
                w-12
                h-12
                rounded-full
                object-cover
              "
            />

            <button
              onClick={() => scrollToSection("#home", "Home")}
              className="
                text-black
                text-xl
                xl:text-2xl
                font-bold
                whitespace-nowrap
              "
            >
              Nafis Imtiaj Hossain
            </button>
          </div>

          {/* Desktop Menu */}

          <nav
            className="
              flex
              justify-center
              items-center
              gap-5
            "
          >
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  scrollToSection(item.href, item.name)
                }
                className={`
                  relative
                  pb-2
                  text-sm
                  xl:text-base
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active === item.name
                      ? "bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 bg-clip-text text-transparent"
                      : "text-gray-700 hover:text-black"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-lime-400
                    via-green-400
                    to-cyan-400
                    transition-all
                    duration-300
                    ${
                      active === item.name
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                ></span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}

          <div className="flex justify-end">
            <button
              onClick={() =>
                scrollToSection("#contact", "Contact")
              }
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-lime-400
                via-green-400
                to-cyan-400
                text-[#071426]
                font-semibold
                shadow-md
                hover:shadow-xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}

        {isMenuOpen && (
          <div
            className="
              lg:hidden
              mt-5
              bg-white
              shadow-lg
              rounded-lg
              p-5
            "
          >
            <nav
              className="
                flex
                flex-col
                gap-5
              "
            >
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() =>
                    scrollToSection(
                      item.href,
                      item.name
                    )
                  }
                  className={`
                    text-left
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active === item.name
                        ? "bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 bg-clip-text text-transparent"
                        : "text-gray-700"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Contact Button */}

              <button
                onClick={() =>
                  scrollToSection("#contact", "Contact")
                }
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-gradient-to-r
                  from-lime-400
                  via-green-400
                  to-cyan-400
                  text-[#071426]
                  py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

