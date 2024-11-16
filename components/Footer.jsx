import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                <span style={{ color: 'steelblue' }}>Rayen</span> Limited
              </h3>
              <p>
                Synergy Co-Works, <br />
                Plot 526, Songwe Street,
                <br />
                New Area 12, Lilongwe, Malawi. <br />
                <br />
                <strong>Phone:</strong> +265 99 440 74 51
                <br />
                <strong>Email:</strong> lyndon@rayenlimited.com
                <br />
              </p>
            </div>

            
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/" className="text-decoration-none">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/about" className="text-decoration-none">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/services" className="text-decoration-none">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="#">Subsidiaries</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link className="text-decoration-none" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/services">Management Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link href="/services" className="text-decoration-none">Venture Capital Financing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/services" className="text-decoration-none">Dept Financing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/services" className="text-decoration-none">Private Equity</Link>
                </li>
              </ul>
            </div>

            
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Subsidiaries</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/susidiaries/food">Tara Foods Ltd</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/susidiaries/dairy">Rayen Dairy Ltd</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/susidiaries/poultry">Rayen Poultry Ltd</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span style={{ color: 'steelblue' }}>Rayen Limited</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <Link href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </Link>
          <Link href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
