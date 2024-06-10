'use client'
import React, { useState } from "react";

const Inputform = ({ data }) => {
  const [formData, setFormData] = useState({
    title: data.title,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    seats: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSeatsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= data.max_seats) {
      setFormData({
        ...formData,
        seats: value,
      });
    }
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="flex justify-center">
    <div className="flex flex-col lower">
      <div>
        <h1 className="text-secondary-normal">Ticket Type*</h1>
        <input type="text" value={formData.title} disabled />
      </div>
      <div className="flex gap-3">
        <div>
          <h1 className="text-secondary-normal">First Name*</h1>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h1 className="text-secondary-normal">Last Name*</h1>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div>
          <h1 className="text-secondary-normal">Email*</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h1 className="text-secondary-normal">Phone Number*</h1>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex justify-center mt-6 text-center">
        <input
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleSeatsChange}
          min="1"
          max={data.number}
          required
        />
      </div>
      <div
        className="uppercase border-[1px] border-secondary-normal p-2 hover:text-primary hover:bg-secondary-normal hover:border-primary hover:transition-all w-auto text-center items-center text-secondary-normal cursor-pointer"
        onClick={handleSubmit}
      >
        Confirm my seat
      </div>
      <div>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </div>
    </div>
    </div>
  );
};

export default Inputform;
