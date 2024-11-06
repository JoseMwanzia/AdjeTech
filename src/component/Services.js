import React from "react";
import { Link } from "react-router-dom";

function Services({ onScrollFunction }) {
  return (
    <div onScrollFunction={onScrollFunction}>
    <section className="module" id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2 className="module-title font-alt">Our Services</h2>
            <div className="module-subtitle font-serif">
              Explore Our Services: Tailored Solutions Crafted for Your
              Success..
            </div>
          </div>
        </div>
        <div className="row multi-columns-row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-browser"></span>
              </div>
              <h3 className="features-title font-alt">
                Web Application Development
              </h3>
              <p>
                Scalable and responsive web applications for enhanced user
                experiences and seamless functionality.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-laptop"></span>
              </div>
              <h3 className="features-title font-alt">
                Custom Software Development
              </h3>
              <p>
                Tailored solutions designed to meet unique business needs, from
                conception to implementation.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-tools"></span>
              </div>
              <h3 className="features-title font-alt">Designs & interfaces</h3>
              <p>
                Intuitive and visually appealing user interface and experience
                design for optimal user engagement (UI/UX).
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-layers"></span>
              </div>
              <h3 className="features-title font-alt">
                Database Design and Development
              </h3>
              <p>
                Designing and implementing scalable databases, optimizing
                queries, and ensuring efficient data storage and retrieval.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-tools-2"></span>
              </div>
              <h3 className="features-title font-alt">Coding & development</h3>
              <p>
                Careful attention to detail and clean, well structured code
                ensures a smooth user experience for all your visitors.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-briefcase"></span>
              </div>
              <h3 className="features-title font-alt">Business Profiles</h3>
              <p>
                Strategic advice and solutions to align technology with business
                goals, fostering growth and innovation.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-cloud"></span>
              </div>
              <h3 className="features-title font-alt">web hosting solutions</h3>
              <p>
                Strategic guidance and implementation for cloud adoption,
                optimizing efficiency, and ensuring scalability.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="features-item">
              <div className="features-icon">
                <span className="icon-phone"></span>
              </div>
              <h3 className="features-title font-alt">Mobile App Development</h3>
              <p>
                Crafting innovative and user-friendly mobile applications for
                iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="module-small bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
                <div className="callout-text font-alt">
                  <h3 className="callout-title">Want to see more works?</h3>
                  <p>We are always open to interesting projects.</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2">
                <div className="callout-btn-box"><Link className="btn btn-w btn-round" to="/portfolio">Lets view portfolio</Link></div>
              </div>
            </div>
          </div>
    </section>
  </div>
  );
}

export default Services;
