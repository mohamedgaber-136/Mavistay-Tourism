'use client'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Pricing1() {
    const { i18n } = useTranslation();

    return (
        <>
            <section className="pricing-section section-bg fix section-padding">
                <div className="left-shape">
                    <img src="/assets/img/pricing-left-shape.png" alt="shape-img" />
                </div>
                <div className="right-shape">
                    <img src="/assets/img/pricing-right-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="pricing-wrapper">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">FLEXIBLE PRICING PLAN</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We’ve Offered the best <br /> pricing for you
                                </h2>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                                <div className="row">
                                    {pricingPlans.map((plan, index) => (
                                        <div className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp `} data-wow-delay={`${0.3 + (index * 0.2)}s`} key={index}>
                                            <div className={`pricing-items ${plan.active ? 'active' : ''}`}>
                                                <div className="tag">
                                                    <h6>{plan.title}</h6>
                                                </div>
                                                <div className="pricing-header">
                                                    <p>{plan.description}</p>
                                                </div>
                                                <ul className="pricing-list">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx}>
                                                            <i className="fa-solid fa-check" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="pricing-button ">
                                                    <Link href="/contact" className="pricing-btn mt-4 d-flex gap-2 justify-content-center">
                                                        choose Plan
                                                        <i 
                                                            className={`fa-solid ${i18n.dir() === 'rtl' ? 'fa-arrow-left-long' : 'fa-arrow-right-long'}`} 
                                                            style={i18n.dir() === 'rtl' ? { marginLeft: '10px' } : { marginRight: '10px' }}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div id="yearly" className="tab-pane fade" role="tabpanel">
                                <div className="row">
                                    {yearlyPlans.map((plan, index) => (
                                        <div className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp `} data-wow-delay={`${0.3 + (index * 0.2)}s`} key={index}>
                                            <div className={`pricing-items   `}>
                                                <div className="tag">
                                                    <h6>{plan.title}</h6>
                                                </div>
                                                <div className="pricing-header">
                                                    <h2>{plan.price}</h2>
                                                    <span>{plan.period}</span>
                                                    <p>{plan.description}</p>
                                                </div>
                                                <ul className="pricing-list">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx}>
                                                            <i className="fa-solid fa-check" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="pricing-button">
                                                    <p>{plan.additionalInfo}</p>
                                                    <Link href="/contact" className="pricing-btn mt-4">
                                                        choose Plan
                                                        <i 
                                                            className={`fa-solid ${i18n.dir() === 'rtl' ? 'fa-arrow-left-long' : 'fa-arrow-right-long'}`} 
                                                            style={i18n.dir() === 'rtl' ? { marginLeft: '10px' } : { marginRight: '10px' }}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const pricingPlans = [
    {
        title: "Basic Plan",
        description: "Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et",
        features: [
            "Branding and design Identity",
            "Web site Marketing Solutions",
            "Free 15 GB Linux Hosting",
            "24/7 system Monitoring",
            "Unlimited Download Data"
        ],
        active: false
    },
    {
        title: "Most Popular",
        description: "Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et",
        features: [
            "Branding and design Identity",
            "Web site Marketing Solutions",
            "Free 15 GB Linux Hosting",
            "24/7 system Monitoring",
            "Unlimited Download Data"
        ],
        active: true
    },
    {
        title: "Premium",
        description: "Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et",
        features: [
            "Branding and design Identity",
            "Web site Marketing Solutions",
            "Free 15 GB Linux Hosting",
            "24/7 system Monitoring",
            "Unlimited Download Data"
        ],
        active: false
    }
];

const yearlyPlans = [
    {
        title: "Basic Plan",
        price: "$99",
        period: "Per month",
        description: "Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et",
        features: [
            "Branding and design Identity",
            "Web site Marketing Solutions",
            "Free 15 GB Linux Hosting",
            "24/7 system Monitoring",
            "Unlimited Download Data"
        ],
        additionalInfo: "Up to 10 users + 1.99 per user",
        active: false
    },
    {
        title: "Most Popular",
        price: "$179",
        period: "Per month",
        description: "Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et",
        features: [
            "Branding and design Identity",
            "Web site Marketing Solutions",
            "Free 15 GB Linux Hosting",
            "24/7 system Monitoring",
            "Unlimited Download Data"
        ],
        additionalInfo: "Up to 10 users + 1.99 per user",
        active: true
    },
    {
        title: "Premium",
        price: "$199",
        period: "Per month",
        description: "Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et",
        features: [
            "Branding and design Identity",
            "Web site Marketing Solutions",
            "Free 15 GB Linux Hosting",
            "24/7 system Monitoring",
            "Unlimited Download Data"
        ],
        additionalInfo: "Up to 20 users + 1.99 per user",
        active: false
    }
];
