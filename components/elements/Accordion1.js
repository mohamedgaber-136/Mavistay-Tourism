'use client'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Accordion1() {
    const { i18n } = useTranslation();
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (index) => {
        setActiveItem(index);
    };

    const isRTL = i18n.dir() === 'rtl';

    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={`${activeItem === 1 ? "accordion-button" : "accordion-button collapsed"} ${isRTL ? "rtl-accordion-button" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                        ما هي أهمية الشحن الشخصي في الوقت الحالي؟
                        </button>
                    </h5>
                    <div id="faq1" className={activeItem === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        ما هي الاتجاهات الحالية في مجال الشحن الشخصي؟
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={`${activeItem === 2 ? "accordion-button" : "accordion-button collapsed"} ${isRTL ? "rtl-accordion-button" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        ما هي أهم التحديات التي تواجه شركات الشحن التجاري؟
                        </button>
                    </h5>
                    <div id="faq2" className={activeItem === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                        </div>
                    </div>
                </div>
              
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={`${activeItem === 3 ? "accordion-button" : "accordion-button collapsed"} ${isRTL ? "rtl-accordion-button" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="#faq3">
                        ما هي أفضل الوجهات السياحية للسفر بميزانية محدودة؟
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    );
}
