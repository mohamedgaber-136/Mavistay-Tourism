'use client'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

export default function Cta1() {
    const { i18n } = useTranslation();

    return (
        <>
            <section className="cta-section">
                <div className="container">
                    <div className="cta-wrapper ">
                     
                       
                        <div className="cta-image wow fadeInUp " data-wow-delay=".3s">
                            <img src="/assets/img/cta1.png" alt="cta-img" />
                        </div>
                        <div className="cta-items">
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">تواصل معنا في اي وقت</h3>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
