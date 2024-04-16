"use client";
import React, { FormEvent, useState } from "react";
import PopUp from "../components/PopUp";

const AddUserForm = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const payload = JSON.stringify(Object.fromEntries(formData.entries()));
      const response = await fetch(`http://localhost:5000/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });
      const result = await response.json();
      console.log(result);

      if (result.error) {
        alert(result);
      } else {
        alert("Login Successful");
        setShowModal(true);
      }
    } catch (error) {
      alert("Failed to login. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between text-base  gap-2 md:gap-10 ">
          <input
            type="text"
            name="fullName"
            placeholder="full name"
            className="w-full text-main  px-5 py-2 rounded-full placeholder:text-main font-semibold"
          />
          <input
            type="email"
            name="e-mail"
            placeholder="e-mail"
            className="w-full text-main  px-5 py-2 rounded-full placeholder:text-main font-semibold"
          />
        </div>
        <div className="flex items-center justify-between text-base  gap-2 md:gap-10 ">
          <input
            type="text"
            name="fullName"
            placeholder="phone number"
            className="w-1/2 text-main  px-5 py-2 rounded-full placeholder:text-main font-semibold"
          />
          <div className="flex items-center gap-5 w-1/2 text-white justify-between">
            <p>Gender</p>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="female" />
              Female
            </label>
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="male" />
              Male
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="mt-8 px-5 py-2 rounded-full text-base bg-transparent border-2  bg-blue-500 text-white"
        >
          add your first contact
        </button>
        <PopUp isVisible={showModal} onClose={() => setShowModal(false)}>
          <div>
            <h3>Your contact has been saved Successfully</h3>
            <button>Yes</button>
          </div>
        </PopUp>
      </div>
    </form>
  );
};

export default AddUserForm;
