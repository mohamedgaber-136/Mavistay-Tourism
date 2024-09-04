"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function Footer1() {
  const { i18n } = useTranslation();
  return (
    <>
      <footer className="footer-section">
        <div className="footer-widgets-wrapper footer-bg" >
          <div className="shape-1">
            <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
          </div>
          <div className="shape-2">
            <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/">
                      <img
                        src="/assets/img/Icons/mavistay-Logo2.png"
                        alt="logo-img"
                        width={"30%"}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      مع MaviStay، استمتع بتجربة سياحية لا تُنسى حيث يجتمع
                      الرفاهية مع المغامرة.
                    </p>
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
     

              <div
                className="col-xl-6 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>تواصل معنا</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info  text-end" dir="ltr">
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        Şişli Sk., Türkiye
                      </li>
                      <li>
                        <i className="fa-solid fa-phone-volume" />
                        <Link
                          href="/tel:+90 554 017 22 22
"
                        >
                          {" "}
                          +90 554 017 22 22
                        </Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-envelope" />
                        <Link
                          href="/mailto:İnfo@mavistay.com 
"
                        >
                          {" "}
                          İnfo@mavistay.com 
                        </Link>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
           
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">الشروط و الاحكام</Link>
                </li>
                <li>
                  <Link href="/contact">سياسه الخصوصيه </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="#" id="scrollUp" className="scroll-icon">
            <i className="far fa-arrow-up" />
          </Link>
        </div>
      </footer>
    </>
  );
}
