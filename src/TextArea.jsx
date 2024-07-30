import React from "react";
import { useState } from "react";

export default function TextArea({ name, label, placeholder, required }) {
  const isRequired = required ? "*" : "";

  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const handleBlur = () => {
    console.log(text);
    if (required && text === "") {
      setError(true);
    } else {
      setError(false);
    }
    console.log(error);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-lg text-left">
        {label} <span className="text-red-600">{isRequired}</span>
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`${
            error? "border-red-500 text-red-600" : "border-gray-100"
          } border-2 border-gray-100 px-2 py-1 rounded focus:outline-none focus:shadow-outline invalid:`}
        rows="4"
        cols="50"
        onBlur={handleBlur}
        onChange={(e) => setText(e.target.value)}
      />
      {error && (
        <span className="text-red-600 text-sm text-left">
          This field is required
        </span>
      )}
    </div>
  );
}
