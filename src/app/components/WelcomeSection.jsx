"use client";
import React from "react";

const WelcomeSection = () => {
  return (
    <section
      id="section-welcome"
      className="full-height text-light"
      data-bgimage="url(/assets/images/foto/kaputas_welcome_bg.webp)"
    >
      <div className="center-y">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="spacer-double"></div>
              <h2 className="style-3">Kaputaş İnşaat</h2>
              <div className="spacer-double"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
