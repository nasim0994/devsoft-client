import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../ContextApi/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthProvider);

  return (
    <header className="navbar bg-base-200">
      <div className="w-[90%] mx-auto">
        <div className="flex-1">
          <Link to="/home" className="text-2xl font-bold">
            DevSoftBD
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
