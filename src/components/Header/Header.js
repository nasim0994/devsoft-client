import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../ContextApi/AuthContext";
import { GrMenu, GrClose } from "react-icons/gr";

const Header = () => {
  const { user, logout } = useContext(AuthProvider);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="navbar bg-base-200">
      <div className="w-[90%] mx-auto">
        <div className="flex-1">
          <Link to="/home" className="text-2xl font-bold">
            DevSoftBD
          </Link>
        </div>

        <div className="flex-none">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden text-3xl"
          >
            {toggleMenu ? <GrClose /> : <GrMenu />}
          </button>
          <ul
            className={`menu menu-horizontal p-0 gap-1 absolute lg:flex lg:static z-50 ${
              toggleMenu
                ? "top-16 bg-base-200 right-0 w-full block"
                : "top-[-150px]"
            }`}
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointment">Appointment</NavLink>
            </li>
            <li>
              {user ? (
                <>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <button onClick={() => logout()}>Log Out</button>
                  <Link>
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  </Link>
                </>
              ) : (
                <NavLink to="/login">Log In</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
