import Link from 'next/link';

const MissionVision = () => {
  return (
    <section className="pt-0 text-center">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="content-box">
              <div className="row border-bottom pb-md-5 mb-5 mb-md-7">
                <div className="tab-style1 horizontaltab">
                  <div className="resp-tabs-container hor_1">
                    <div className="mb-5">
                      <h2>
                        <span style={{ color: 'steelblue' }}>Our</span> Mission
                      </h2>
                      <p>
                        To accelerate growth of sustainable and ethical businesses
                        which should have a positive impact on the community.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h2>
                        Our <span style={{ color: 'steelblue' }}>Vision</span>
                      </h2>
                      <p>
                        To be a leading PE firm with profitable and sustainable businesses.
                      </p>
                    </div>

                    <div className="mt-4">
                      <Link href="/about" className="btn btn-primary">
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2>
            <span style={{ color: 'steelblue' }}>CORE</span> VALUES
          </h2>
          <p>Trust, Integrity, Teamwork, and Inclusive Growth</p>

          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="circle">Trust</div>
            <div className="circle">Integrity</div>
            <div className="circle">Teamwork</div>
            <div className="circle">Inclusive Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
