"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img
                      src="/assets/img/Icons/mavistay-Logo.png"
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={handleOffCanvas}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                نخدمكم بحجوزات الفنادق -المنتجعات السياحية الخمس نجوم والخدمات
                السياحية المرافقة بخصومات عالية
              </p>
              <div className=" d-md-block d-lg-none">
                <MobileMenu />
              </div>

              <div className="offcanvas__contact">
                <h4> تواصل معنا</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="/">
                        Şişli Sk., Türkiye
                      </Link>
                    </div>
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-text">
                      <Link href="/mailto:İnfo@mavistay.com ">
                        <span className="mailto:info@example.com">
                          İnfo@mavistay.com{" "}
                        </span>
                      </Link>
                    </div>
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-text">
                      <Link
                        href="/tel:+90 554 017 22 22

"
                        dir="ltr"
                      >
                        +90 554 017 22 22{" "}
                      </Link>
                    </div>
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                  </li>
                </ul>

                <div className="social-icon d-flex align-items-center">
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
      </div>
      <div
        className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
