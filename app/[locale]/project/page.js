
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Project() {
    const cardsData = [
        {
          img:"/assets/img/service/ser1.webp" ,
        },
        {
          img:"/assets/img/service/ser2.png" ,
        },
        {
          img:"/assets/img/service/ser3.png" ,
        },
        {
          img:"/assets/img/service/ser4.png" ,
        },
        {
          img:"/assets/img/service/ser5.png" ,
        },
       
        {
          img:"/assets/img/service/ser11.png" ,
        },
       
      ]
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
                {/* <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/01.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">Platform Integration</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/02.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Security</p>
                                            <h4>
                                                <Link href="/project-details">Network Security</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/03.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Solution</p>
                                            <h4>
                                                <Link href="/project-details">Web Development</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/04.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">IT Management</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/10.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">Design Solutions</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/11.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">Software Development</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
<div className="HoverCardParent container mx-auto py-5 my-5 position-relative">
  <div className="d-flex gap-2 align-items-center  justify-content-center portfolioTitle">

  <span></span>
  <h5 className='text-center' >Our Projects</h5>
  <span></span>
  </div>
<h2 className=' text-center text-dark'>
Explore Our Best 
Completed Projects
</h2>
        <div  className="d-flex justify-content-center gap-5 flex-wrap">
        {
          cardsData.map((item,ind)=>       

          
          <div key={ind} className=" my-5 container noselect imghoverParent">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card" style={{backgroundImage:`url(${item.img})`}}>
                <div className="subtitle border text-white shadow  p-2">
                Banking Landing Page Design    
           
                  </div>
                
              </div>
            </div>
          </div>
          
          
          
          
          
        )
      }
      </div>
 
</div>
            </Layout>
        </>
    )
}