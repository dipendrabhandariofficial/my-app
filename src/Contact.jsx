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
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message, please try again later.");
        }
      );
  };

  return (
    <Element
      id="contact"
      className="h-screen w-screen flex flex-col items-center justify-center  text-center bg-gradient-to-b from-orange-100 to-white"
    >
      {/* Header Section */}
      <div className="w-[50%] mb-8 " id="contact">
        <h1 className="text-3xl font-bold ">Contact Me</h1>
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
          . All fields are required!
        </p>
      </div>

      {/* Contact Form */}
      <form className="contact w-[50%] space-y-6" onSubmit={handleSubmit}>
        {/* First Name and Last Name */}
        <div className="flex space-x-4   ">
          <div className="relative w-1/2">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="peer border border-gray-400 focus:border-transparent w-full p-2 rounded-md focus:outline-none placeholder-transparent"
              placeholder="First name"
              required
            />
            <label
              htmlFor="firstName"
              className="absolute  left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-orange-500"
            >
              First Name
            </label>
          </div>

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-400 w-1/2 p-2 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-400 w-full p-2 rounded-md"
          required
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-400 w-full p-2 rounded-md"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-400 w-full p-2 rounded-md h-32 resize-none"
          required
        ></textarea>

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
