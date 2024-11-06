import React from 'react'

function Pricing() {
  return (
    <section className="module" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Our Prices</h2>
                <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div className="row multi-columns-row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="price-table font-alt">
                  <h4>Light</h4>
                  <div className="borderline"></div>
                  <p className="price"><span>$</span>9
                  </p>
                  <ul className="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li><span>Newsletter</span></li>
                    <li><span>Working Contact Form</span></li>
                    <li><span>Unlimited Domains</span></li>
                  </ul><a className="btn btn-d btn-round" href="/">Sign Up</a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="price-table font-alt">
                  <h4>Basic</h4>
                  <div className="borderline"></div>
                  <p className="price"><span>$</span>29
                  </p>
                  <ul className="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li>Newsletter</li>
                    <li><span>Working Contact Form</span></li>
                    <li><span>Unlimited Domains</span></li>
                  </ul><a className="btn btn-d btn-round" href="/">Sign Up</a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="price-table font-alt best">
                  <h4>Advanced</h4>
                  <p className="small">Best Choice</p>
                  <div className="borderline"></div>
                  <p className="price"><span>$</span>64
                  </p>
                  <ul className="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li>Newsletter</li>
                    <li>Working Contact Form</li>
                    <li><span>Unlimited Domains</span></li>
                  </ul><a className="btn btn-d btn-round" href="/">Sign Up</a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="price-table font-alt">
                  <h4>Ultimate</h4>
                  <div className="borderline"></div>
                  <p className="price"><span>$</span>119
                  </p>
                  <ul className="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li>Newsletter</li>
                    <li>Working Contact Form</li>
                    <li>Unlimited Domains</li>
                  </ul><a className="btn btn-d btn-round" href="/">Sign Up</a>
                </div>
              </div>
            </div>
            <div className="row mt-40">
              <div className="col-sm-6 col-sm-offset-3 align-center">
                <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Pricing