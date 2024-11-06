import React from 'react'
// import NavBar from './NavBar'
import typographyLogo from "./assets/images/about_bg.jpg"
// import logo from '../component/assets/images/logo/ADJETECH-LOGO.png'

function LearnMore() {


  return (
    <>
<div className="main" style={{zIndex: 0}}>
        {/* <NavBar/> */}
        {/* <div className="logo" style={{width: '15%', position: 'fixed', zIndex: 1}}>
          <a href="/"><img className="main-logo" src={logo} alt="main-logo"/></a>
        </div> */}
        <section className="module bg-dark-30 about-page-header" data-background={typographyLogo}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1 className="module-title font-alt mb-0">Typography</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h4 className="font-alt mb-0">Paragraph Examples</h4>
                <hr className="divider-w mt-10 mb-20"/>
                <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LearnMore