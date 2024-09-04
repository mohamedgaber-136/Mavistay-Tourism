import { PG } from "country-flag-icons/react/3x2";
import Link from "next/link";
import React from "react";

const ServiceLayout = ({ PgNum }) => {
  return (
    <div className="col-12 col-lg-4 order-2 order-md-1">
      <div className="main-sidebar">
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>جميع الخدمات</h3>
          </div>
          <div className="widget-categories">
            <ul>
              <li className={`${PgNum == 1 && "active"}`}>
                <Link href="/service-details/BusinessMen">
                  خدمات رجال اعمال
                </Link>
                <i className="fa-solid fa-arrow-left-long" />
              </li>
              <li className={`${PgNum == 2 && "active"}`}>
                <Link href="/service-details/HotelReservations">
                  حجوزات فنادق
                </Link>
                <i className="fa-solid fa-arrow-left-long" />
              </li>
              <li className={`${PgNum == 3 && "active"}`}>
                <Link href="/service-details/HoneyMoon">برامج شهر العسل</Link>
                <i className="fa-solid fa-arrow-left-long" />
              </li>
              <li className={`${PgNum == 4 && "active"}`}>
                <Link href="/service-details/CarWithDriver">سائق مع سياره</Link>
                <i className="fa-solid fa-arrow-left-long" />
              </li>
            </ul>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>ساعات العمل</h3>
          </div>
          <div className="opening-category">
            <ul>
              <li>
                <i className="fa-regular fa-clock" />
                Sun - Thur: 10.00 AM - 4.00 PM
              </li>
              <li>
                <i className="fa-regular fa-clock" />
                Friday: Closed
              </li>
              <li>
                <i className="fa-regular fa-clock" />
                Saturday: Closed
              </li>
            </ul>
          </div>
        </div>
        <div
          className="single-sidebar-image bg-cover"
          style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}
        >
          <div className="contact-text">
            <div className="icon">
              <i className="fa-solid fa-phone" />
            </div>
            <h4>Need Help? Call Here</h4>
            <h5>
              <Link dir="ltr" href="/tel:+90 554 017 22 22">
                +90 554 017 22 22
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceLayout;
