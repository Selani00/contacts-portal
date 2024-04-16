"use client";
import Link from "next/link";
import React from "react";
import { useState, FormEvent } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return (window.location.href = "/home");
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const payload = JSON.stringify(Object.fromEntries(formData.entries()));
      const response = await fetch(`http://localhost:5000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw alert(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      if (result.error) {
        alert(result.error);
        console.log(result.error);
      } else {
        alert("Login Successful");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Failed to login. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full text-main text-base px-5 py-2 rounded-full placeholder:text-main font-semibold "
        placeholder="e-mail"
        name="email"
      />
      <input
        type="password"
        className="w-full text-main text-base px-5 py-2 rounded-full placeholder:text-main font-semibold"
        placeholder="password"
        name="password"
      />
      <div className="flex gap-5 md:gap-15 items-center md:text-base text-sm">
        <button
          className="mt-4 px-5 py-2 rounded-full  bg-transparent border-2  bg-blue-500 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <p className="text-white text-center mt-4 ">
          
          or{" "}
          <Link href="/register" className="underline">
            Click here to Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
