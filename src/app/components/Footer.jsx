"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Image
              src="/assets/images/kaputas/2.png"
              className="logo-small"
              width={150}
              height={50}
              alt=""
            />
            <br />
            Proje talepleriniz, sorularınız veya daha fazla bilgi almak için
            bizimle iletişime geçebilirsiniz. Kaputaş İnşaat olarak,
            Antalya’daki en prestijli projelere imza atmak için hazırız.
          </div>

          <div className="col-md-6">
            <h3>İletişim</h3>
            <div className="widget widget-address">
              <address>
                <span>Hacıaliler, Mısırlılar Cad. No:49 Aksu, Antalya</span>
                <span>
                  <strong>Phone:</strong>
                  <a href="tel:0 532 742 00 52">0 532 742 00 52</a>
                </span>
                <span>
                  <strong>Email:</strong>
                  <a href="mailto:satis@kaputas.com">satis@kaputasinsaat.com</a>
                </span>
                <span>
                  <strong>Web:</strong>
                  <a href="http://kaputasinsaat.com">
                    https://kaputasinsaat.com
                  </a>
                </span>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              &copy; Copyright 2024 - Archi Interior Design Template by{" "}
              <span className="id-color">Designesia</span>
            </div>
            <div className="col-md-6 text-right">
              <div className="social-icons">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-skype"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" id="back-to-top"></a>
    </footer>
  );
};

export default Footer;
