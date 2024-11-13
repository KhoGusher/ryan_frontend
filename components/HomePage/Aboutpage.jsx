"use client"
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          
          <div className="relative">
            <div className="relative w-48">
              <Image
                src="/assets/img/image.png"
                alt="Rayen Limited"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 bg-steelblue text-white p-4 rounded-lg shadow-md"
              style={{ backgroundColor: '#4682B4' }}
            >
              <h3 className="text-3xl font-bold">4+</h3>
              <p className="mb-0">Years of Experience</p>
            </div>
          </div>

          <div>
            <div className="content-box">
              <div className="main-title font-bold text-xl mb-2">
                Rayen Limited <span className="line-left"></span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Trusted Partners in Growth!
              </h2>
              <p className="mb-6 text-gray-700">
                Rayen Limited is dedicated to empowering businesses through sustainable, ethical growth. Established in 2020, we specialize in tailored financial and management services that drive success across multiple sectors.
              </p>

              <div className="mb-6">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold">
                    <span className="text-steelblue">Our</span> Mission
                  </h2>
                  <p className="text-gray-600">
                    To accelerate growth of sustainable and ethical businesses which should have a positive impact on the community.
                  </p>
                </div>

                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold">
                    Our <span className="text-steelblue">Vision</span>
                  </h2>
                  <p className="text-gray-600">
                    To be a leading PE firm with profitable and sustainable businesses.
                  </p>
                </div>

                <div className="text-center">
                  <a
                    href="/about"
                    className="btn-get-started px-6 py-3 bg-steelblue text-white rounded-lg shadow-md hover:bg-blue-700"
                  >
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutSection;
