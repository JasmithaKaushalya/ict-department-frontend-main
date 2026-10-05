import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../../common/ui/Button";
import logo from "../../../assets/logos/uwu-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Academic Staff", path: "/academic-staff" },
  { name: "News & Events", path: "/NewsEvents" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-colors duration-300 ${
      isActive
        ? "text-blue-700"
        : "text-gray-700 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-4">

            <img
              src={logo}
              alt="UWU Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="font-bold text-lg text-gray-900 leading-tight">
                Department of ICT
              </h1>

              <p className="text-sm text-gray-500">
                Uva Wellassa University
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Desktop Login */}

          <div className="hidden lg:block">
            <Button to="/login">
              Login
            </Button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden border-t bg-white">

          <div className="flex flex-col px-6 py-6 gap-5">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>

            ))}

            <Button
              to="/login"
              className="mt-2"
            >
              Login
            </Button>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;