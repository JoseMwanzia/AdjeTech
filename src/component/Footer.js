import React from 'react'
import postImage1 from "./assets/images/rp-1.jpg"
import postImage2 from "./assets/images/rp-2.jpg"

function Footer() {
  const currentYear = new Date().getUTCFullYear()
  return (
    <>
        <div className="module-small bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">About ADJE TECH</h5>
                  <p>Adje Tech is a dynamic and innovative technology company dedicated to pushing the boundaries of 
                    technological advancements. With a relentless commitment to excellence, Adje Tech specializes 
                    in software development, web applications, web hosting, UI/UX and more.</p>
                  <p>Phone: +254 748 817 855</p>
                  <p>Email:<a href="#default">adjetech@gmail.com</a></p>
                </div>
              </div>
              {/* <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Recent Comments</h5>
                  <ul className="icon-list">
                    <li>Maria on <a href="#">Designer Desk Essentials</a></li>
                    <li>John on <a href="#">Realistic Business Card Mockup</a></li>
                    <li>Andy on <a href="#">Eco bag Mockup</a></li>
                    <li>Jack on <a href="#">Bottle Mockup</a></li>
                    <li>Mark on <a href="#">Our trip to the Alps</a></li>
                  </ul>
                </div>
              </div> */}
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Categories</h5>
                  <ul className="icon-list">
                    <li><a href="default">Software Development - 7</a></li>
                    <li><a href="default">Database storage - 3</a></li>
                    <li><a href="default">Design Interface - 12</a></li>
                    <li><a href="default">Mobile Applications - 1</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Popular Posts</h5>
                  <ul className="widget-posts">
                    <li className="clearfix">
                      <div className="widget-posts-image"><a href="default"><img src={postImage1} alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="default">Designer Desk Essentials</a></div>
                        <div className="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="widget-posts-image"><a href="default"><img src={postImage2} alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="default">Realistic Business Card Mockup</a></div>
                        <div className="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="divider-d"/>
        <footer className="footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p className="copyright font-alt">{currentYear} <a href="index.html">adje tech</a>, All Rights Reserved</p>
              </div>
              <div className="col-sm-6">
                <div className="footer-social-links"><a href="default"><i className="fa fa-facebook"></i></a><a href="default"><i className="fa fa-twitter"></i></a><a href="default"><i className="fa fa-dribbble"></i></a><a href="default"><i className="fa fa-skype"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
    </>
  )
}

export default Footer