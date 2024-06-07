import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import NavLinks from "./NavLinks";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "dracula" : "winter");
  };

  return (
    <div className="bg-base-200">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            MyStore
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dracula"}
              />
              <IoSunny className="swap-on fill-current w-6 h-6" />
              <FaMoon className="swap-off fill-current w-6 h-6" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
