import React from "react";
import { GoClock } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const CompanyInfo = () => {
  return (
    <div className="flex gap-6 py-5">
      <div className="w-[33.33%] flex items-center gap-4 bg-violet-500 p-6 rounded-lg text-white">
        <div>
          <GoClock className="text-5xl" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Opening Hours</h2>
          <p>09am - 5.00pm</p>
          <p>Sunday to wednesday</p>
        </div>
      </div>
      <div className="w-[33.33%] flex items-center gap-4 bg-slate-600 p-6 rounded-lg text-white">
        <div>
          <MdLocationOn className="text-5xl" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Visit our location</h2>
          <p>House: 8/A, Road No: 9</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="w-[33.33%] flex items-center gap-4 bg-cyan-500 p-6 rounded-lg text-white">
        <div>
          <BiPhoneCall className="text-5xl" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Contact us now</h2>
          <p>+8801xxxxxxxxx</p>
          <p>+880(0)8522 768 8676</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
