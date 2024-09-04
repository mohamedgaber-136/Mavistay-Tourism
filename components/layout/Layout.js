"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import MouseCursor from "./MouseCursor";
import Offcanvas from "./Offcanvas";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import ContactModal from "../elements/Modal";
import LanguageChanger from "../LanguageChanger";

export default function Layout({
  headerStyle,
  footerStyle,
  onePageNav,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);

  const [isOffCanvas, setOffCanvas] = useState(false);
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <MouseCursor />
      <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

      {headerStyle == 1 ? (
        <div className="ltr-container">
          <Header1 scroll={scroll}
          onePageNav={onePageNav}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          handleSearch={handleSearch} />
</div>
      ) : null}

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {children}

      {footerStyle == 1 ? <Footer1 /> : null}
      <ContactModal />
      <BackToTop />
    </>
  );
}
