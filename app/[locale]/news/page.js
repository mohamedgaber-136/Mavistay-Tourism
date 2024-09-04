'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function News() {
    const {i18n} = useTranslation()
  const data = [
    {
      img: "assets/img/news/01.webp",
      title: "How to Choose the best platforms for e-commerce",
      content:
        "The term “e-commerce,” or electronic commerce, describes the exchange of products and services via the World Wide Web. It includes electronic fund transfers, internet commercial activities, and online transactions. E-commerce is a key component of the modern economy since it has completely changed how consumers and organizations conduct business. Different kinds of e-commerce models exist",
    },
    {
      img: "assets/img/news/02.webp",
      title:
        "Building Trust and Loyalty Strategies for Effective Customer Relationship Management (CRM)",
      content:
        "In the current dynamic business environment, clients are presented with an endless array of choices. Establishing brand loyalty must be a top priority for businesses looking to grow sustainably. Customer relationship management (CRM) techniques are among the best ways to accomplish this. What is CRM",
    },
    {
      img: "assets/img/news/03.webp",
      title: "The Best New Social Media Platforms in 2023",
      content:
        "In the ever-evolving world of social media, new platforms constantly emerge, offering unique features and experiences for users. As technology advances and user preferences evolve, it is exciting to explore the best new social media platforms that have gained popularity in 2023.  These platforms offer fresh opportunities for connection, creativity, and community engagement",
    },
    {
      img: "assets/img/news/04.webp",
      title: "Why is a brand important for your business?",
      content:
        "The visible and distinct elements that represent and differentiate a brand from others in the market are called brand identity. The combination of tangible and intangible aspects that shape how a brand is perceived by its target audience is what it encompasses. Creating a recognizable and memorable brand image requires a strong brand identity",
    },
    {
      img: "assets/img/news/05.webp",
      title:
        "Unveiling the Power of Customer Journey Mapping.. A Comprehensive Guide to Enhance Customer Experience",
      content:
        "The customer journey refers to the complete path a customer takes when interacting with a business, from their initial awareness of a product or service to post-purchase support and beyond. It encompasses all touchpoints and experiences that shape the customer’s perception and satisfaction. By understanding and optimizing the customer journey,",
    },
    {
      img: "assets/img/news/06.webp",
      title:
        "The Evolution of the Customer Journey.. Navigating the Path to Success",
      content:
        "In the dynamic and ever-evolving landscape of modern business, understanding and harnessing the potential of the customer journey has become paramount for marketing success. Today’s customers are not merely passive recipients of advertising messages; they are sophisticated, discerning individuals who expect personalized experiences and meaningful connections with the brands they choose to engage with",
    },
    {
      img: "assets/img/news/07.webp",
      title: "Comprehensive Guide about the Types of Digital Marketing",
      content:
        "To effectively reach and interact with their target audience in the modern digital age, firms must adjust their marketing methods to the online environment and digital marketing encompasses a range of techniques and strategies aimed at promoting products and services through digital channels. What is Digital Marketing in Simple Terms?",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="خدماتنا ">
        <div className="container py-5 mx-auto">
          <div className="d-flex gap-2 align-items-center  justify-content-center portfolioTitle">
            <span></span>
            <h5 className="text-center">Our Blogs</h5>
            <span></span>
          </div>
          <h2 className=" text-center text-dark">Latest From the Blog</h2>
          <div className=" py-2 mx-auto">
            {data.map((item, ind) => (
              <div
                key={ind}
                className={`row my-5 justify-content-center wow blogsData ${
                  ind % 2 ? "fadeInRight" : "fadeInLeft"
                } `}
                data-wow-delay=".3s"
              >
                <div className="col-11  col-md-12 col-lg-5 p-0 rounded-3 overflow-hidden  h-100">
                  <img
                    src={item.img}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-6 blogContent d-flex flex-column gap-3 align-items-start position-relative ">
                  <div className={`d-flex  blogPillsCont justify-content-center align-items-center ${i18n.dir()=='rtl'?'rtlBlogPills':''} `}>
                    <div className="pill">8 october 6,2023</div>
                    <div className="linePill"></div>
                    <div className="starBlog">
                      <img src={"/assets/img/star2.png"} alt="" />
                    </div>
                  </div>
                  <h2 className="text-dark">{item.title} </h2>
                  <p className="text-dark">{item.content}</p>
                  <Link className="hero-button" href={"news-details"}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
