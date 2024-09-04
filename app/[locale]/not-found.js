import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
                <section className="Error-section section-padding fix">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="error-items">
                                    <div className="error-image">
                                        <img src="/assets/img/404.png" alt="img" />
                                    </div>
                                    <h2>
                                        Whoops! This Page got Lost <br />
                                        in converstion
                                    </h2>
                                    <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        Go Back Home
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

  )
}

export default NotFound
