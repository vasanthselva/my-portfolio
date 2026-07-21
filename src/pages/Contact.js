import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactImg from "../assets/contact.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nspdntn", // Your Service ID
        "template_5jpka3b", // Your Template ID
        formData,
        "tu944T-klWerga_QU" // Your Public Key
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(`Failed to send message: ${error.text}`);
      });
  };

  return (
    <section
      className="flex flex-col md:flex-row px-5 py-32 justify-center"
      id="contact"
    >
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-[250px] pb-5"
          src={ContactImg}
          alt="Contact"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl border-b-4 border-[#4169d8] mb-5 w-[135px] font-bold">
          Contact
        </h1>

        <form onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="p-3 btn rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
