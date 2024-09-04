"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Team1() {
  const { i18n } = useTranslation();

  const followImageCursor = (event, teamItem) => {
    const contentBox = teamItem.getBoundingClientRect();
    let dx, dy;

    // Calculate position based on document direction
    // if (document.dir === 'rtl') {
    //     dx = Math.min(Math.max(contentBox.right - event.clientX, 0), contentBox.width);
    // } else {
    // }
    dx = Math.min(
      Math.max(event.clientX - contentBox.left, 0),
      contentBox.width
    );
    dy = Math.min(
      Math.max(event.clientY - contentBox.top, 0),
      contentBox.height
    );
    teamItem.querySelector(
      ".team-hover"
    ).style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
  };

  useEffect(() => {
    const teamItems = document.querySelectorAll(".team-items");

    const handleMouseMove = (event) => {
      teamItems.forEach((item) => {
        followImageCursor(event, item);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const Cities = [
    {
      name: "Istanbul",
      description:"إسطنبول، المدينة التي تجمع بين قارتي آسيا وأوروبا، هي جوهرة تركيا النابضة بالحياة",
      image: "assets/img/Cities/Istanbul.jpg",
    },
    {
      name: "Antalya",
      description:
        "أنطاليا، عروس البحر الأبيض المتوسط في تركيا،",
      image: "assets/img/Cities/antalya.jpg",
    },
    {
      name: "Bursa",
      description:
        "بورصة، لؤلؤة الأناضول الخضراء، هي مدينة تجمع بين سحر الطبيعة الخلابة وعراقة التاريخ العريق.",
      image: "assets/img/Cities/bursa.jpg",
    },
    {
      name: "Ankara",
      description:
        "أنقرة، قلب تركيا النابض وعاصمتها الحديثة، هي مدينة تجمع بين الحاضر والماضي بامتياز.",
      image: "assets/img/Cities/ankara.jpg",
    },
  ];
  return (
    <div id="team" dir="ltr">
      <section
        className="team-section  section-padding  section-bg-2"
        id="team"
      >
       
        <div className="container" >
          <div className="section-title-area w-100">
            <div className="section-title w-100">
              <h2 className="text-white wow fadeInUp  w-100 text-end" >اجمل المناطق</h2>
             
            </div>
          
          </div>
          <div className="team-wrapper">
            {Cities.map((member, index) => (
              <div
                className="team-items bor-top bor-bottom wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.2}s`}
                key={index}
              >
                <div className="team-title text-white">
                  <h4>
                    <Link href="/service-details/HotelReservations">{member.name}</Link>
                  </h4>
                </div>
                <p>{member.description}</p>
                <div
                  className="team-hover d-none d-md-block bg-cover"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
