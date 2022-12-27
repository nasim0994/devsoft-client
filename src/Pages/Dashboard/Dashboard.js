import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="w-[90%] mx-auto py-5">
      <h2 className="text-2xl font-bold text-center mb-4">
        Appointment Schedule
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-[17px] font-bold">DATE</th>
              <th className="text-[17px] font-bold">TIME</th>
              <th className="text-[17px] font-bold">Edit</th>
              <th className="text-[17px] font-bold">Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Dec 27, 2022</td>
              <td>10.30 AM - 11.00 Am</td>
              <td>
                <button>
                  <AiFillEdit className="text-3xl text-blue-500" />
                </button>
              </td>
              <td>
                <button>
                  <AiFillDelete className="text-3xl text-red-600" />
                </button>
              </td>
            </tr>

            <tr className="hover">
              <th>2</th>
              <td>Dec 29, 2022</td>
              <td>09.00 AM - 09.30 AM</td>
              <td>
                <button>
                  <AiFillEdit className="text-3xl text-blue-500" />
                </button>
              </td>
              <td>
                <button>
                  <AiFillDelete className="text-3xl text-red-600" />
                </button>
              </td>
            </tr>

            <tr>
              <th>3</th>
              <td>Dec 31, 2022</td>
              <td>01.00 PM - 01.30 PM</td>
              <td>
                <button>
                  <AiFillEdit className="text-3xl text-blue-500" />
                </button>
              </td>
              <td>
                <button>
                  <AiFillDelete className="text-3xl text-red-600" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
