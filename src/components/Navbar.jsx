// react-router-dom
import { Link } from "react-router-dom";

// components 
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="bg-base-200">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            MyStore
          </Link>
        </div>
        <div className="nabar-center">
         <ul className="menu menu-horizantal">
         <NavLinks/>
         </ul>
        </div>
        <div className="navbar-end">3</div>
      </div>
    </div>
  );
}

export default Navbar;
