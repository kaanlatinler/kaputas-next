"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="logo">
              <Link href="/">
                <Image
                  className="logo"
                  src="/assets/images/kaputas/WhiteLogo.png"
                  width={80}
                  height={80}
                  alt=""
                />
              </Link>
            </div>
            <span id="menu-btn"></span>
            <nav>
              <ul id="mainmenu">
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="#cardSection">Ne Yapıyoruz?</Link>
                </li>
                <li>
                  <Link href="#section-testimonial">Hakkımızda</Link>
                </li>
                <li>
                  <Link href="#section-offer">Teknikler</Link>
                </li>
                <li>
                  <Link href="#section-contact">İletişim</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
