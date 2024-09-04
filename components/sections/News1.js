
import Link from 'next/link'

export default function News1() {
    return (
        <div id='blogs'>
            <section className="news-section section-padding fix" id="blog">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">Article</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Read Our Latest Blog</h2>
                    </div>
                </div>
                <div className="news-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-news-items">
                                <div className="news-image " style={{ backgroundImage: 'url("assets/img/news/01.webp")',backgroundSize:'cover  ',backgroundRepeat:'no-repeat' }}>
                                    <div className="post-date">
                                        <span>Nov, 2023</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h4>
                                        <Link href="/news-details">
                                        How to Choose the best platforms for e-commerce
                                        </Link>
                                    </h4>
                                    <p>
                                    The term “e-commerce,” or electronic commerce, describes the exchange of products and services via the World Wide Web.
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover"  style={{ backgroundImage: 'url("assets/img/news/02.webp")',backgroundSize:'cover  ',backgroundRepeat:'no-repeat' }}>
                                    <div className="post-date">
                                        <span>Nov, 2023</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h4>
                                        <Link href="/news-details">
                                        Building Trust and Loyalty Strategies for Effective (CRM)
                                        </Link>
                                    </h4>
                                    <p>
                                    In the current dynamic business environment, clients are presented with an endless array of choices. 
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover"  style={{ backgroundImage: 'url("assets/img/news/03.webp")',backgroundSize:'cover  ',backgroundRepeat:'no-repeat' }}>
                                    <div className="post-date">
                                        <span>Oct, 2023</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-details">
                                        The Best New Social Media Platforms in 2023
                                        </Link>
                                    </h3>
                                    <p>
                                    In the ever-evolving world of social media, new platforms constantly emerge, offering unique features and experiences for users.
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
