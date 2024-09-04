"use client";
import Link from "next/link";
import Menu from "../Menu";
import OnePageNav from "../OnePageNav";
import LanguageChanger from "@/components/LanguageChanger";
import { useTranslation } from "react-i18next";

export default function Header1({
  scroll,
  isOffCanvas,
  handleOffCanvas,
  onePageNav,
}) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <header className="">
        <div className="header-top-section  fix ">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <Link
                    href="/mailto:İnfo@mavistay.com "
                    className="link"
                  >
                    {" "}
                    İnfo@mavistay.com                   </Link>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link
                    href="/tel:+90 554 017 22 22
"
                  >
                    {" "}
                    +90 554 017 22 22                  </Link>
                </li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <Link href="https://www.facebook.com/profile.php?id=61555710505927&mibextid=opq0tG">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://x.com/mavistayagency">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link href="https://www.instagram.com/mavistay.agency">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link href="https://www.youtube.com/@mavistay.agency">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky "
          className={`header-1 ltr-elements  ${scroll ? "sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div
                className={`header-main  style-2 ${
                  i18n.dir() == "rtl" && "reverseDir"
                }`}
              >
                <div className="header-left ">
                  <div className="logo  ">
                    <Link href="/" className="header-logo">
                      <img
                        src="/assets/img/Icons/mavistay-Logo.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={`header-right d-flex justify-content-around align-items-center ${
                    i18n.dir() == "rtl" && "reverseDir"
                  }`}
                >
                  <div className="mean__menu-wrapper ">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        {onePageNav ? <OnePageNav /> : <Menu />}
                      </nav>
                    </div>
                  </div>
                  <div
                    className={` d-flex align-items-center  justify-content-center gap-5 ${
                      i18n.dir() == "rtl" && "reverseDir"
                    }`}
                  >
                    <div className="header-button ">
                      <Link href="/contact" className="theme-btn d-flex gap-2 ">
                        get A Quote
                        <span>
                          {i18n.dir() == "rtl" ? (
                            <i className="fa-solid fa-arrow-left-long" />
                          ) : (
                            <i className="fa-solid fa-arrow-right-long" />
                          )}{" "}
                        </span>
                      </Link>
                    </div>
                    {/* <LanguageChanger /> */}
                    <div className="header__hamburger d-xl-block my-auto barsRtl   ">
                      <div
                        className="sidebar__toggle"
                        onClick={handleOffCanvas}
                      >
                        <i className="fas fa-bars " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
