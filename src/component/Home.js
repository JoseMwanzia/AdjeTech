import React from 'react'
import { Link } from 'react-router-dom'
// import scoreBoard from "./assets/images/section-3.jpg"
import landingPage from "./assets/images/section-1.png"
import whyAdjeIsBest from "./assets/images/landing/speaker.png"
import whyTitanIsBestBg from "./assets/images/landing/why_choose_bg.png"
import screenshot1 from "./assets/images/landing/adjeSCREENSHOT.png"
import screenshot2 from "./assets/images/landing/adjeSCREENSHOT.png"
import screenshot3 from "./assets/images/landing/adjeSCREENSHOT.png"
import screenshot4 from "./assets/images/landing/adjeSCREENSHOT.png"
import screenshot5 from "./assets/images/landing/adjeSCREENSHOT.png"
import screenshot6 from "./assets/images/landing/adjeSCREENSHOT.png"
import screenshotBg from "./assets/images/landing/screenshot_bg.png"
import conversation from "./assets/images/landing/conversation.png"
import landscap from "./assets/images/landing/landscap-mockup.png"
// import howItWorks from "./assets/images/landing/iphone-mockup.png"

function Home() {

  return (
    <>
      {/* Start Hero sections */}
      <section className="home-section home-full-height bg-dark bg-gradient" id="home" data-background={landingPage}>
        <div className="titan-caption">
          <div className="caption-content">
            <div className="font-alt mb-30 titan-title-size-1">Hello & welcome</div>
            <div className="font-alt mb-40 titan-title-size-4">We are adje tech</div>
            <Link className="section-scroll btn btn-border-w btn-round" to="/contact">get in touch with us</Link>
          </div>
        </div>
      </section>
      {/* End Hero sections */}

      <div className="main">
        <section className="module-medium" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2 className="module-title font-alt">Welcome to Adje tech</h2>
                <div className="module-subtitle font-serif large-text">"Welcome to Adje Tech, where innovation meets excellence! We're thrilled to have you join our journey towards cutting-edge digital solutions and technological advancement."
                  <div className="text-center">
                    {/* <div className="btn-group mt-30"><a className="btn btn-border-d btn-circle" href="default"><i className="fa fa-android"></i> Play Store</a><a className="btn btn-border-d btn-circle" href="default"><i className="fa fa-apple"></i> App Store</a><a className="btn btn-border-d btn-circle" href="default"><i className="fa fa-windows"></i> Windows</a></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="module pb-0 bg-dark landing-reason parallax-bg" data-background={whyTitanIsBestBg}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6"><img src={whyAdjeIsBest} alt=""/></div>
              <div className="col-sm-6">
                <h2 className="module-title font-alt align-left">Why Adje Tech is the best</h2>
                <p className="module-subtitle font-serif align-left">Embark on a transformative journey with Adje Tech, where excellence is not just a goal but a standard we consistently surpass. Our unwavering dedication to innovation, coupled with unparalleled customer service, ensures that your needs are not just met, but exceeded at every turn. </p>
                <p>Join us and experience firsthand why Adje Tech is the undeniable leader in the tech industry.</p><a className="btn btn-border-w btn-round video-pop-up" href="https://www.youtube.com/watch?v=TTxZj3DZiIM"><i className="icon-video"></i> Watch our video</a>
              </div>
            </div>
          </div>
        </section>

        {/* START OF KEEP THE CONVERSATION GOING */}
        <section>
          <div className="container">
            <div className="row landing-image-text">
              <div className="col-sm-6 col-sm-push-6">
                <img className="center-block" style={{height: '25em'}} src={conversation} alt=""/>
              </div>
              <div className="col-sm-6 col-sm-pull-6">
                <h2 className="font-alt">Keep the conversation going</h2>
                <p>Join the dialogue and keep the conversation alive! Share your thoughts, ideas, and experiences
                   with us. Your voice matters, and together, we can inspire, learn, and grow. Let's continue the 
                   conversation and foster meaningful connections.</p>
                   {/* <a className="btn btn-border-d btn-circle m-5" href="default"><i className='fa fa-facebook'></i></a> */}
                   <a className="btn btn-border-d btn-circle" href="default" style={{fontSize: '26px'}}><i className='fa fa-facebook'></i></a>
                   <a className="btn btn-border-d btn-circle" href="default" style={{fontSize: '26px'}}><i className='fa fa-instagram'></i></a>
                   <a className="btn btn-border-d btn-circle" href="default" style={{fontSize: '26px'}}><i className='fa fa-twitter'></i></a>
              </div>
            </div>
            {/* <div className="row landing-image-text">
              <div className="col-sm-6"><img className="center-block" src={howItWorks} alt=""/></div>
              <div className="col-sm-6">
                <h2 className="font-alt">How it works</h2>
                <p className="font-serif">Lorem ipsum dolor sitamet consectetur adipisicing elit ullamut consequatur repellendus amet nemo dignissimos possimus eius fugiat</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
                  <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                  <li>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                </ul><a className="btn btn-border-d btn-circle" href="default">Download App</a>
              </div>
            </div> */}
          </div>
        </section>
        {/* END OF KEEP THE CONVERSATION GOING */}

        {/* START OF SCREENSHOTS */}
        <section className="module bg-dark parallax-bg landing-screenshot" data-background={screenshotBg}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">ScreenShots</h2>
                <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div className="row client">
              <div className="owl-carousel text-center" data-items="4" data-pagination="true" data-navigation="false">
                <div className="owl-item">
                  <div className="col-sm-12"><img src={screenshot1} alt="App Screenshot"/></div>
                </div>
                <div className="owl-item">
                  <div className="col-sm-12"><img src={screenshot2} alt="App Screenshot"/></div>
                </div>
                <div className="owl-item">
                  <div className="col-sm-12"><img src={screenshot3} alt="App Screenshot"/></div>
                </div>
                <div className="owl-item">
                  <div className="col-sm-12"><img src={screenshot4} alt="App Screenshot"/></div>
                </div>
                <div className="owl-item">
                  <div className="col-sm-12"><img src={screenshot5} alt="App Screenshot"/></div>
                </div>
                <div className="owl-item">
                  <div className="col-sm-12"><img src={screenshot6} alt="App Screenshot"/></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF SCREENSHOTS */}

        {/*  */}
        <section className="module download pb-0">
          <div className="container text-center">
            <h2 className="module-title font-alt">What are you waiting for?</h2>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <p className="module-subtitle">Explore a world of tailored solutions designed just for you. Choose excellence, choose innovation, choose a partnership that goes beyond. </p>
                <div className="btn-group d-flex mt-30">
                  <Link className="btn  btn-border-d btn-circle" to="/services"><i className="fa fa-server"></i> services</Link>
                  <Link className="btn  btn-border-d btn-circle" to="/pricing"><i className="fa fa-money"></i> pricing</Link>
                  <Link className="btn  btn-border-d btn-circle" to="/contact"><i className="fa fa-address-book"></i> contact us</Link>
                </div>

                {/* <a href="default"><img className="image-button" src={appleStore} alt=''/></a><a href="default"><img className="image-button" src={playstore} alt=''/></a><a href="default"><img className="image-button" src={windowStore} alt=''/></a> */}
                
              </div>
            </div><img src={landscap} alt=''/>
          </div>
        </section>
      </div>
      {/*  */}


      {/* Start ScoreBoard sections */}
      {/* <section className="module bg-dark-60" data-background={scoreBoard}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Scoreboard</h2>
                <div className="module-subtitle font-serif"></div>
              </div>
            </div>
            <div className="row multi-columns-row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="count-item mb-sm-40">
                  <div className="count-icon"><span className="icon-wallet"></span></div>
                  <h3 className="count-to font-alt" data-countto="6543">works</h3>
                  <h5 className="count-title font-serif">Dollars raised for charity</h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="count-item mb-sm-40">
                  <div className="count-icon"><span className="icon-wine"></span></div>
                  <h3 className="count-to font-alt" data-countto="8">Hello World</h3>
                  <h5 className="count-title font-serif">Cups of wine consumed</h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="count-item mb-sm-40">
                  <div className="count-icon"><span className="icon-camera"></span></div>
                  <h3 className="count-to font-alt" data-countto="184">works</h3>
                  <h5 className="count-title font-serif">Photographs taken</h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="count-item mb-sm-40">
                  <div className="count-icon"><span className="icon-map-pin"></span></div>
                  <h3 className="count-to font-alt" data-countto="32">works</h3>
                  <h5 className="count-title font-serif">Locations covered</h5>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End ScoreBoard sections */}
    </>
  )
}

export default Home
// Some resource load requests were throttled while the tab was in background, and no request was sent from the queue in the last 1 minute. This means previously requested in-flight requests haven't received any response from servers. See https://www.chromestatus.com/feature/5527160148197376 for more details