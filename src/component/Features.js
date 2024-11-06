import React from 'react'
import promoImgae from "./assets/images/promo.png"

function Features() {
  return (
    <section className="module" id="alt-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Our features</h2>
                <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-strategy"></span></div>
                  <h3 className="alt-features-title font-alt">Branding</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-tools-2"></span></div>
                  <h3 className="alt-features-title font-alt">Development</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-target"></span></div>
                  <h3 className="alt-features-title font-alt">Marketing</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-tools"></span></div>
                  <h3 className="alt-features-title font-alt">Design</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
              </div>
              <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
                <div className="alt-services-image align-center"><img src={promoImgae} alt="Feature"/></div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-camera"></span></div>
                  <h3 className="alt-features-title font-alt">Photography</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-mobile"></span></div>
                  <h3 className="alt-features-title font-alt">Mobile</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-linegraph"></span></div>
                  <h3 className="alt-features-title font-alt">Music</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div className="alt-features-item">
                  <div className="alt-features-icon"><span className="icon-basket"></span></div>
                  <h3 className="alt-features-title font-alt">Shop</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Features