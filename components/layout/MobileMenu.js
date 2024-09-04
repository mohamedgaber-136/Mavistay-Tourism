"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [activeItem, setActiveItem] = useState(1);
  console.log(activeItem);

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            <ul>
              <li>
                <Link href="/">الرئيسيه</Link>
              </li>
              <li>
                <Link href="/about">من نحن</Link>
              </li>
              <li>
                <Link href="/news">خدمات</Link>
              </li>
            
              <li className="mean-last">
                <Link href="/contact">اتصل بنا</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
