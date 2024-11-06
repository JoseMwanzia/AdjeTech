import React from 'react'
import image1 from "./assets/images/portfolio/grid-portfolio1.jpg"
import image2 from "./assets/images/portfolio/grid-portfolio2.jpg"
import image3 from "./assets/images/portfolio/grid-portfolio3.jpg"
import image4 from "./assets/images/portfolio/grid-portfolio4.jpg"
import image5 from "./assets/images/portfolio/grid-portfolio5.jpg"
import image6 from "./assets/images/portfolio/grid-portfolio6.jpg"
import imageBackground from "./assets/images/portfolio/portfolio_header_bg.jpg"

function Portfolio() {
  return (
    <div>
        <section class="module bg-dark-60 portfolio-page-header" data-background={imageBackground}>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Portfolio Boxed</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="filter font-alt" id="filters">
                  <li><a className="current wow fadeInUp" href="#default" data-filter="*">All</a></li>
                  <li><a className="wow fadeInUp" href="#default" data-filter=".illustration" data-wow-delay="0.2s">Illustration</a></li>
                  <li><a className="wow fadeInUp" href="#default" data-filter=".marketing" data-wow-delay="0.4s">Marketing</a></li>
                  <li><a className="wow fadeInUp" href="#default" data-filter=".photography" data-wow-delay="0.6s">Photography</a></li>
                  <li><a className="wow fadeInUp" href="#default" data-filter=".webdesign" data-wow-delay="0.6s">Web Design</a></li>
                </ul>
              </div>
            </div>
            <ul className="works-grid works-grid-gut works-hover-w" id="works-grid">
              <li className="work-item illustration webdesign"><a href="pdefaultortfolio_single_featured_image1.html">
                  <div className="work-image"><img src={image1} alt="Portfolio Item"/></div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Corporate Identity</h3>
                    <div className="work-descr">Illustration</div>
                  </div></a></li>
              <li className="work-item marketing photography"><a href="pdefaultortfolio_single_featured_image2.html">
                  <div className="work-image"><img src={image2} alt="Portfolio Item"/></div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Bag MockUp</h3>
                    <div className="work-descr">Marketing</div>
                  </div></a></li>
              <li className="work-item illustration photography"><a href="pdefaultortfolio_single_featured_slider1.html">
                  <div className="work-image"><img src={image3} alt="Portfolio Item"/></div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Disk Cover</h3>
                    <div className="work-descr">Illustration</div>
                  </div></a></li>
              <li className="work-item marketing photography"><a href="pdefaultortfolio_single_featured_slider2.htmll">
                  <div className="work-image"><img src={image4} alt="Portfolio Item"/></div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Business Card</h3>
                    <div className="work-descr">Photography</div>
                  </div></a></li>
              <li className="work-item illustration webdesign"><a href="pdefaultortfolio_single_featured_video1.html">
                  <div className="work-image"><img src={image5} alt="Portfolio Item"/></div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Web Design</h3>
                    <div className="work-descr">Webdesign</div>
                  </div></a></li>
              <li className="work-item marketing webdesign"><a href="pdefaultortfolio_single_featured_video2.html">
                  <div className="work-image"><img src={image6} alt="Portfolio Item"/></div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Paper clip</h3>
                    <div className="work-descr">Marketing</div>
                  </div></a></li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default Portfolio