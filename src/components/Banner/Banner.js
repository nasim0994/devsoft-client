import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner h-[250px] lg:h-[450px] flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-white mb-6">
        Develop Your Business
      </h2>
      <Link to="/appointment">
        <button className="btn btn-primary">Make Appointment</button>
      </Link>
    </div>
  );
};

export default Banner;
