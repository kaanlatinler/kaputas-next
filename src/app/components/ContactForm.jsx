"use client";

import React, { useState } from "react";
import SendMail from "@/Services/SendMail";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await SendMail({ formData });
    if (res.success) {
      alert("Your message has been sent successfully.");
    } else {
      alert("There was an error sending your message.");
    }
  };

  return (
    <div>
      <form
        name="contactForm"
        id="contact_form"
        onSubmit={(e) => handleSubmit(e)}
        method="post"
      >
        <div className="row">
          <div className="col-md-4">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Adınız"
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Eposta Adresiniz"
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Telefon Numaranız"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <textarea
                name="message"
                id="message"
                className="form-control"
                onChange={(e) => handleChange(e)}
                placeholder="Sorunuz"
              ></textarea>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-line">
              {" "}
              Gönder{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
