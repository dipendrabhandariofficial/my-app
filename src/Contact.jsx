import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

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
    <>
    <motion.div
      id="contact"
      className="flex flex-col items-center justify-center w-screen pb-12 text-center bg-gradient-to-b to-pink-800 from-purple-800"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.6 }}>
    
      {/* Header Section */}
      <div className="w-full pt-12 sm:w-[80%] md:w-[70%] lg:w-[50%] mb-2">
        <h1 className="text-4xl font-bold font-[sansserif] pt-8">Contact Me</h1>
        <p className="mt-2 text-sm">
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
        className="contact w-full sm:w-[80%] md:w-[70%] lg:w-[50%] space-y-6 px-4 py-4"
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
                className="w-full p-2 border border-white rounded-md peer focus:outline-none"
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
            className="w-full p-2 border border-white rounded-md peer focus:outline-none"
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
            className="w-full p-2 border border-white rounded-md peer focus:outline-none"
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
            className="w-full h-32 p-2 border border-white rounded-md resize-none peer focus:outline-none "
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
    </motion.div>
    </>
  );
};

export default Contact;
