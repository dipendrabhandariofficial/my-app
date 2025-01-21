import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5wgd7jg", // Replace with your EmailJS service ID
        "template_kz0ejnu", // Replace with your EmailJS template ID
        formData,
        "JJ8Std97AJ7s0RwSl" // Replace with your EmailJS public key
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send the message, please try again later.")
      );
  };

  return (
    <Element
      id="contact"
      className="pb-12 w-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-orange-100 to-white"
    >
      {/* Header Section */}
      <div className="w-full pt-12 sm:w-[80%] md:w-[70%] lg:w-[50%] mb-2">
        <h1 className="text-4xl font-bold font-[sansserif] pt-8">Contact Me</h1>
        <p className="text-sm mt-2">
          Feel free to reach out if you're interested in working together, being
          friends, or discussing the best matka chai spots! You can also email
          me at{" "}
          <a
            href="mailto:dipendrabhandari0000@gmail.com"
            className="text-blue-500 hover:underline"
          >
            dipendrabhandari0000@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form
        className="contact w-full sm:w-[80%] md:w-[70%] lg:w-[50%] space-y-6 px-4 pb-3"
        onSubmit={handleSubmit}
      >
        {/* First Name and Last Name */}
        <div className="flex space-x-4">
          {["firstName", "lastName"].map((name) => (
            <div className="relative w-1/2" key={name}>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="peer border border-gray-400 w-full p-2 rounded-md focus:outline-none"
                required
              />
              <label
                htmlFor={name}
                className={`absolute left-2 transition-all ${
                  formData[name]
                    ? "top-[-10px] text-sm text-orange-500"
                    : "top-2 text-base text-gray-400"
                }`}
              >
                {name === "firstName" ? "First Name" : "Last Name"}
              </label>
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer border border-gray-400 w-full p-2 rounded-md focus:outline-none"
            required
          />
          <label
            htmlFor="email"
            className={`absolute left-2 transition-all ${
              formData.email
                ? "top-[-10px] text-sm text-orange-500"
                : "top-2 text-base text-gray-400"
            }`}
          >
            Email
          </label>
        </div>

        {/* Subject */}
        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="peer border border-gray-400 w-full p-2 rounded-md focus:outline-none"
            required
          />
          <label
            htmlFor="subject"
            className={`absolute left-2 transition-all ${
              formData.subject
                ? "top-[-10px] text-sm text-orange-500"
                : "top-2 text-base text-gray-400"
            }`}
          >
            Subject
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="peer border border-gray-400 w-full p-2 rounded-md focus:outline-none h-32 resize-none"
            required
          ></textarea>
          <label
            htmlFor="message"
            className={`absolute left-2 transition-all ${
              formData.message
                ? "top-[-10px] text-sm text-orange-500"
                : "top-2 text-base text-gray-400"
            }`}
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-[#8A3D03] transition"
        >
          Submit
        </button>
      </form>
    </Element>
  );
};

export default Contact;
