import React, { useState } from "react";
import appointmentImg from "../../Images/Making-Appointments.jpg";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import AppointmentModal from "./AppointmentModal/AppointmentModal";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modal, setModal] = useState(null);

  return (
    <div className="w-[90%] mx-auto py-5">
      <div className="flex py-5 gap-10 flex-col-reverse lg:flex-row">
        <div className="lg:w-[50%] flex lg:justify-end justify-center">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        <div className="lg:w-[50%]">
          <img src={appointmentImg} alt="" className="lg:w-[80%]" />
        </div>
      </div>

      <div className="lg:flex gap-4 justify-center items-center">
        <p className="text-center text-primary font-semibold text-xl">
          Your Selected Date: {format(selectedDate, "PP")}.
        </p>

        {/* The button to open modal */}
        <div className="flex justify-center mt-3 lg:mt-0">
          <label
            htmlFor="my-modal-3"
            className="btn btn-primary "
            onClick={() => setModal(selectedDate)}
          >
            Confirm Appointment
          </label>
        </div>
        {modal && (
          <AppointmentModal
            selectedDate={selectedDate}
            setModal={setModal}
          ></AppointmentModal>
        )}
      </div>
    </div>
  );
};

export default Appointment;
