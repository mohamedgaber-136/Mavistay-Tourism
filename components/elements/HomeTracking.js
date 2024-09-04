'use client'
import React, { useEffect, useState } from 'react';

const sections = [
  
  {
    title:"الرئيسيه",
    nav:'home'
  },
  {
    title:  "من نحن",
    nav:"about"
  },
  {
    title:  " خدماتنا",
    nav:"services"
  },
  {
    title:  " الدول",
    nav:"projects"
  },
  
  
  
  

];

export default function HomeTracking() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set the initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="vertical-nav">
      <ul>
        {sections.map((section, index) => (
          <li key={index} className={activeSection === section ? 'active d-flex justify-content-center' : 'd-flex justify-content-center'}>
            <a href={`#${section.nav}`}> {section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
