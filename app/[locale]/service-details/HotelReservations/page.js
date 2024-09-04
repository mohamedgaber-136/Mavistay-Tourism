"use client";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import ServiceLayout from "../ServiceLayout";
import { data } from "./data";
import HotelModal from "./HotelModal";

const AppDevelopment = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [hotels, setHotels] = useState(data);
  const [activeRate, setActiveRate] = useState(null); // State to track active rate
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const filterHotelsByRate = (rate) => {
    const filteredHotels = rate ? data.filter(hotel => hotel.rate === rate) : data;
    setActiveRate(rate); // Set the active rate
    setHotels(filteredHotels);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHotels = hotels.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="حجوزات فنادق">
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <ServiceLayout PgNum={2} />
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <img
                      src="/assets/img/subService/hotelReservations/main.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="details-content">
                    <h3>الفنادق</h3>
                    <p className="mt-3">
                      هل سئمت من الوجهات السياحية النموذجية وتتطلع إلى الخروج من
                      منطقة الراحة الخاصة بك؟ قد يكون سفر المغامرات هو الحل
                      الأمثل لك! فيما يلي أربعة أسباب تدفعك إلى حجز تجربة سفر
                      المغامرة:{" "}
                    </p>
                    <div className="buttonsGroups d-flex justify-content-center gap-3">
                      <button className={`btn btn-outline-dark px-4 py-2 rounded ${activeRate === null ? 'active' : ''}`} onClick={() => filterHotelsByRate(null)}>
                        الجميع
                      </button>
                      <button className={`btn btn-outline-dark px-4 py-2 rounded ${activeRate === 's' ? 'active' : ''}`}>
                        شقق فندقيه
                      </button>
                      <button className={`btn btn-outline-dark px-4 py-2 rounded ${activeRate === 5 ? 'active' : ''}`} onClick={() => filterHotelsByRate(5)}>
                        5 نجوم
                      </button>
                      <button className={`btn btn-outline-dark px-4 py-2 rounded ${activeRate === 4 ? 'active' : ''}`} onClick={() => filterHotelsByRate(4)}>
                        4 نجوم
                      </button>
                    </div>
                    <div className="image-area">
                      <div className="row g-4">
                        {currentHotels.map((item, ind) => (
                          <div key={ind} className="col-lg-6 col-md-6">
                            <HotelModal item={item} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pagination">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index}
                          className={`btn btn-outline-dark px-4 py-2 rounded ${index + 1 === currentPage ? 'active' : ''}`}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppDevelopment;
