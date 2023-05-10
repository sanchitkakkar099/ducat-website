import React from "react";

function Footer() {
  return (
    <footer className="row py-5 footer" style={{ backgroundColor: "#0C2243" }}>
      <div className="container py-3">
        <div className="row ">
          <div className=" col-md-2 mb-3">
            <h4>Follow Us!</h4>
            <ul className="list-unstyled d-flex social">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-md-2 mb-3">
            <h4>Quick Links</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Courses
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Placement
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Brochure
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-md-2 mb-3">
            <h4>Top Courses</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Digital Marketing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Web Designing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Java Expert
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Data Science
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  PHP
                </a>
              </li>
            </ul>
          </div>
          <div className=" col-md-2 mb-3">
            <h4>Quick links</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Faqs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Admissions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Payments
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Cancellation Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Our Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <form>
              <h4>Connect</h4>
              <p>
                Join our mailing list and get exclusive discounts, early product
                launch access and more.
              </p>
              <div className="w-100  newsl">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary  join" type="button">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
