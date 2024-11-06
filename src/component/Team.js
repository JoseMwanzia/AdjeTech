import React from 'react';
// import team_1 from "./assets/images/team-1.jpg"
import team_2 from "./assets/images/altTeam1.png"
import team_3 from "./assets/images/team2.png"
// import team_4 from "./assets/images/team-4.jpg"


function Team() {
  return (
    <>
        <section className="module" id="team">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Meet Our Team</h2>
                <div className="module-subtitle font-serif">Meet our dedicated team. Guided by a shared commitment to excellence, we thrive on the synergy of our collective strengths.</div>
              </div>
            </div>

            <div className="row team-row">
              <div className="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onClick={`wow fadeInUp`}>
                <div className="team-item">
                  <div className="team-image"><img className='teamImage' src={team_2} alt="MemberPhoto"/>
                    <div className="team-detail">
                      <h5 className="font-alt">Good day</h5>
                      <p className="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.</p>
                      <div className="team-social"><a href="/"><i className="fa fa-facebook"></i></a><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-dribbble"></i></a><a href="/"><i className="fa fa-skype"></i></a></div>
                    </div>
                  </div>
                  <div className="team-descr font-alt">
                    <div className="team-name">Joseph Mwanzia</div>
                    <div className="team-role">Director</div>
                  </div>
                </div>
              </div>
              <div className="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onClick={`wow fadeInUp`}>
                <div className="team-item">
                  <div className="team-image"><img className='teamImage' src={team_3} alt="MemberPhoto"/>
                    <div className="team-detail">
                      <h5 className="font-alt">Hello</h5>
                      <p className="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.</p>
                      <div className="team-social"><a href="/"><i className="fa fa-facebook"></i></a><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-dribbble"></i></a><a href="/"><i className="fa fa-skype"></i></a></div>
                    </div>
                  </div>
                  <div className="team-descr font-alt">
                    <div className="team-name">Adeke Omaido</div>
                    <div className="team-role">Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Team