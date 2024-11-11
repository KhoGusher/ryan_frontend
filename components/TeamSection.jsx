import Link from "next/link";

const TeamSection = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our <strong>Team</strong></h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Jacqueline Haynes</h4>
                <span>Managing Director</span>
                <p>She has extensive experience in both public and private sectors. She excels at planning and execution of strategy, assembling effective teams, stakeholder management and financial management. She is a Finance graduate and studying towards an MBA.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Lyndon Mlinde</h4>
                <span>Operations Lead</span>
                <p>He excels at identifying and evaluating early stage start-ups, conducting due diligence, partnership building, industry analysis and operations management. He is a Chartered Accountant and has worked in Asia and Africa for both MNCs and SMEs in various industries.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Pachawo Bisani</h4>
                <span>Data Manager</span>
                <p>He manages and analyses data for management decision making. He has extensive experience in data management and has worked in various industries in that capacity. He possesses an MSc in Informatics.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Atusaghe Mushani</h4>
                <span>Legal Manager</span>
                <p>She is responsible for compliance, risk management, and offers company secretarial services. She has worked for private and public entities in South Africa and Malawi. She holds an LLB from the University of South Africa.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-5.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Clement Namanya</h4>
                <span>Partnership Manager</span>
                <p>He is the Partnerships Manager with a proven track record of establishing and maintaining strategic partnerships with key stakeholders. He holds a Bachelor of Arts (Humanities) from Unima. He has worked with the Ministry of Foreign Affairs of the Republic of Malawi and African Union.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
