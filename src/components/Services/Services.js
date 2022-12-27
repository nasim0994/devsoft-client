import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarked } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div className="my-5 bg-base-200 py-8">
      <h2 className="text-center text-3xl font-semibold">Our Services</h2>

      <div className="lg:flex gap-6 p-4">
        <div className="lg:w-[33.33%] bg-white p-4 rounded-md shadow-md mb-3 lg:mb-0">
          <GiReceiveMoney className="text-5xl pb-2 text-red-500" />
          <Link>
            <h2 className="text-2xl font-semibold py-3">Financial Planning</h2>
          </Link>
          <p className=" text-gray-600">
            Obtain pain of because is pain, but because you nally circumstances
          </p>
        </div>

        <div className="lg:w-[33.33%] shadow-md bg-white p-4 rounded-md mb-3 lg:mb-0">
          <MdAnalytics className="text-5xl pb-2 text-red-500" />
          <Link>
            <h2 className="text-2xl font-semibold py-3">Project Analysis</h2>
          </Link>
          <p className=" text-gray-600">
            Obtain pain of because is pain, but because you nally circumstances
          </p>
        </div>
        <div className="lg:w-[33.33%] shadow-md bg-white p-4 rounded-md">
          <FaMapMarked className="text-5xl pb-2 text-red-500" />
          <Link>
            <h2 className="text-2xl font-semibold py-3">PR & MARKETING</h2>
          </Link>
          <p className=" text-gray-600">
            Obtain pain of because is pain, but because you nally circumstances
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
