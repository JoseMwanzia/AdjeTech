import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import work_1 from './assets/images/work-1.jpg'
import work_2 from './assets/images/work-2.jpg'
import work_3 from './assets/images/work-3.jpg'
import work_4 from './assets/images/work-4.jpg'
import work_5 from './assets/images/work-5.jpg'
import work_6 from './assets/images/work-6.jpg'
import { Link } from 'react-router-dom'

function Works() {

    const match= useRouteMatch()

  return (
    <div>
        <section className="module pb-0" id="works">
            <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Our Works</h2>
                <div className="module-subtitle font-serif"></div>
                </div>
            </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <ul className="filter font-alt" id="filters">
                    <li><Link className="current wow fadeInUp" to={`${match.url}/*`} data-filter="*">All</Link></li>
                    <li><Link className="wow fadeInUp" to={`${match.url}/web_design`} data-filter=".illustration" data-wow-delay="0.2s">web design</Link></li>
                    <li><Link className="wow fadeInUp" to={`${match.url}/ecommerce`} data-filter=".marketing" data-wow-delay="0.4s">eCommerce</Link></li>
                    <li><Link className="wow fadeInUp" to={`${match.url}/web_hosting`} data-filter=".photography" data-wow-delay="0.6s">web hosting solutions</Link></li>
                    <li><Link className="wow fadeInUp" to={`${match.url}/business`} data-filter=".webdesign" data-wow-delay="0.6s">business profiles</Link></li>
                </ul>
                </div>
            </div>
            </div>
            <ul className="works-grid works-grid-gut works-grid-3 works-hover-w" id="works-grid">
            <li className="work-item illustration webdesign"><a href="portfolio-single-1.html">
                <div className="work-image"><img src={work_1} alt="Portfolio Item"/></div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">Corporate Identity</h3>
                    <div className="work-descr">Illustration</div>
                </div></a></li>
            <li className="work-item marketing photography"><a href="portfolio-single-1.html">
                <div className="work-image"><img src={work_2} alt="Portfolio Item"/></div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">Bag MockUp</h3>
                    <div className="work-descr">Marketing</div>
                </div></a></li>
            <li className="work-item illustration photography"><a href="portfolio-single-1.html">
                <div className="work-image"><img src={work_3} alt="Portfolio Item"/></div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">Disk Cover</h3>
                    <div className="work-descr">Illustration</div>
                </div></a></li>
            <li className="work-item marketing photography"><a href="portfolio-single-1.html">
                <div className="work-image"><img src={work_4} alt="Portfolio Item"/></div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">Business Card</h3>
                    <div className="work-descr">Photography</div>
                </div></a></li>
            <li className="work-item illustration webdesign"><a href="portfolio-single-1.html">
                <div className="work-image"><img src={work_5} alt="Portfolio Item"/></div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">Business Card</h3>
                    <div className="work-descr">Webdesign</div>
                </div></a></li>
            <li className="work-item marketing webdesign"><a href="portfolio-single-1.html">
                <div className="work-image"><img src={work_6} alt="Portfolio Item"/></div>
                <div className="work-caption font-alt">
                    <h3 className="work-title">Business Cards in paper clip</h3>
                    <div className="work-descr">Marketing</div>
                </div></a></li>
            </ul>
        </section>
    </div>
    
  )
}

export default Works