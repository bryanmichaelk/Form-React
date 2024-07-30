import React from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import FileInput from "./FileInput";
import TextArea from "./TextArea";  

export default function Form() {
  const handleReset = (e) => {
    e.target.reset();
  };
  
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <form
      action=""
      className="bg-white max-w-[800px] m-auto px-8 py-6 rounded-xl shadow-xl"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <h1 className="w-full text-center text-green-500 font-bold text-2xl">
        Form in React
      </h1>
      <div className="mt-8 flex flex-col gap-2">
        <Input
          name="first-name"
          label="First Name"
          placeholder="Enter First Name"
          required
        />
        <Input
          name="last-name"
          label="Last Name"
          placeholder="Enter Last Name"
          required
        />
        <Input name="email" label="Email" placeholder="Enter Email" required />
        <Input
          name="phone"
          label="Contact"
          placeholder="Enter Mobile Number"
          required
        />
        <Radio
          name="gender"
          label="Gender"
          input={["Male", "Female"]}
          required
        />
        <Checkbox
          name="subject"
          label="Your Best Subject"
          input={["English", "Maths", "Physics"]}
          required
        />
        <FileInput
          name="resume"
          label="Upload Resume"
          placeholder=""
          required
        />
        <Input name="url" label="Enter Url" placeholder="Enter url" required />
        <TextArea
          name="about"
          label="About"
          placeholder="About yourself"
          required
        />
        <div className="w-full flex justify-center items-center gap-8 mt-4">
          <button
            type="reset"
            className="bg-white border-2 border-green-500 w-[35%] py-2 sm:py-4 text-green-500 rounded-xl text-md sm:text-xl font-semibold hover:scale-105 transform transition duration-300 ease-in-out active:scale-100"
          >
            Reset
          </button>
          <button
            type="submit"
            className=" bg-green-500 w-[35%] py-2 sm:py-4 text-white rounded-xl text-md sm:text-xl font-semibold hover:scale-105 transform transition duration-300 ease-in-out active:scale-100"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
