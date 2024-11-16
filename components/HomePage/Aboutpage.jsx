import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-img position-relative">
              <div className="image-box">
                <div className="image-1">
                  <Image
                    src="/assets/img/image.png"
                    alt="About Us"
                    className="rounded"
                    width={500} // Adjust size as necessary
                    height={500}
                  />
                </div>

              </div>
              <div
  className="card text-center position-absolute text-white"
  style={{
    position: 'absolute',
    color: 'white',
    left: '150px',
    bottom: '55px',
    borderRadius: '5px', 
    backgroundColor: '#285cb1',
    padding: '30px 20px',
    width: '180px',
    textAlign: 'center'
  }}
>
  <h3 className="h1 mb-1">4+</h3>
  <p className="mb-0">Years of Experience</p>
</div>


            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6 ps-lg-4 ps-xl-7">
            <div className="content-box">
              <div className="main-title title-left">
                Rayen Limited <span className="line-left"></span>
              </div>
              <h2 className="w-lg-90 mb-1-6 mb-lg-1-9">Trusted Partners in Growth!</h2>
              <p className="mb-1-9 mb-lg-6">
                Rayen Limited is dedicated to empowering businesses through sustainable, ethical growth. Established in
                2020, we specialize in tailored financial and management services that drive success across multiple
                sectors.
              </p>

              {/* Mission and Vision */}
              <div className="row border-md-bottom clearfix pb-md-5 mb-5 mb-md-7">
                <div className="tab-style1 horizontaltab">
                  <div className="resp-tabs-container hor_1">
                    <div className="text-center mb-5">
                      <h2>
                        <span style={{ color: "steelblue" }}>Our</span> Mission
                      </h2>
                      <p>
                        To accelerate the growth of sustainable and ethical businesses that positively impact the
                        community.
                      </p>
                    </div>

                    <div className="text-center mb-5">
                      <h2>
                        Our <span style={{ color: "steelblue" }}>Vision</span>
                      </h2>
                      <p>To be a leading PE firm with profitable and sustainable businesses.</p>
                    </div>

                    <div className="text-center">
                      <Link href="/about" className="btn-get-started">
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-5">
          <h2>
            <span style={{ color: "steelblue" }}>CORE</span> VALUES
          </h2>
          <p>Trust, Integrity, Teamwork, and Inclusive Growth</p>

          <div className="d-flex justify-content-center align-items-center">
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

export default AboutSection;

