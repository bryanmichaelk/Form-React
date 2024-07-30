import React from "react";
import { useState } from "react";

export default function Input({ name, label, placeholder, required, state, useStateChild }) {
  const isRequired = required ? "*" : "";

  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleBlur = (e) => {
    if (!e.target.value.includes("@gmail.com") && e.target.name === "email") {
      setInvalid(true);

    } else {
      setInvalid(false);
    }
    if (required && e.target.value === "") {
      setError(true);
      setInvalid(false);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    if (
      !e.target.value.includes("@gmail.com") &&
      e.target.name === "email" &&
      !error
    ) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-lg text-left">
        {label} <span className="text-red-600">{isRequired}</span>
      </label>
      <input
        id="input"
        type="text"
        name={name}
        placeholder={placeholder}
        className={`${
          error || invalid ? "border-red-500 text-red-600" : "border-gray-100"
        } border-2 border-gray-100 px-2 py-1 rounded focus:outline-none focus:shadow-outline invalid:`}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && (
        <span className="text-red-600 text-sm text-left">
          This field is required
        </span>
      )}
      {invalid && (
        <span className="text-red-600 text-sm text-left">Email is invalid</span>
      )}
    </div>
  );
}
