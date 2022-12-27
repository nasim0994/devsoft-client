import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthProvider } from "../../../ContextApi/AuthContext";

const AppointmentModal = ({ selectedDate, setModal }) => {
  const { user } = useContext(AuthProvider);
  const date = format(selectedDate, "PP");

  const slots = [
    "09.00 AM - 9.30 AM",
    "09.30 AM - 10.00 AM",
    "10.00 AM - 10.30 AM",
    "10.30 AM - 11.00 AM",
    "11.00 AM - 11.30 AM",
    "11.30 AM - 12.00 AM",
    "2.30 PM - 3.00 PM",
    "3.00 PM - 3.30 PM",
    "3.30 PM - 4.00 PM",
    "4.00 PM - 4.30 PM",
    "4.30 PM - 5.00 PM",
  ];

  const handelAppointmentModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const date = format(selectedDate, "PP");
    const time = form.slot.value;

    const appointmentData = {
      time,
      name,
      email,
      date,
    };
    console.log(appointmentData);
    toast.success("Appointment Success");
    setModal(null);
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl text-center font-semibold">
            Appointment Form
          </h2>

          <form onSubmit={handelAppointmentModal} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                defaultValue={user.displayName}
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                defaultValue={user?.email}
                disabled
              />
            </div>

            <div className="form-control">
              <p className="input flex items-center bg-gray-100 font-semibold">
                {date}
              </p>
            </div>

            <div className="form-control">
              <select name="slot" className="select w-full input-bordered">
                {slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
