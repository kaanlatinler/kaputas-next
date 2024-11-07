import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="section-contact" className="no-bottom bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center wow fadeInUp">
            <h1 className="text-white">
              Sorunuz mu var? <span className="text-body">Çekinmeyin</span>
            </h1>
            <div className="separator ">
              <span>
                <i className="fa fa-circle"></i>
              </span>
            </div>
            <div className="spacer-single"></div>
          </div>

          <div className="col-md-8 offset-md-2 wow fadeInLeft">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="spacer-double"></div>

      <div className="map-container map-fullwidth">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12755.851044907466!2d30.833095309958!3d36.93905709979254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3816423cd16c1%3A0x7037dac71bbb4ba7!2zSGFjxLFhbGlsZXIsIE3EsXPEsXJsxLFsYXIgQ2QuIE5vOjQ5LCAwNzExMiBBa3N1L0FudGFseWE!5e0!3m2!1str!2str!4v1730850160008!5m2!1str!2str"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
