import React from "react";
import JavawImg from "../../assets/images/javaw.png";
import PythonImg from "../../assets/images/Pythonw.png";
import Img8 from "../../assets/images/Frame (8).png";
import ImgE1 from "../../assets/images/E1.png";

import OwlCarousel from "react-owl-carousel";

function CourseView() {
  const options = {
    responsiveClass: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 3.5,
    stageOuterClass: "owl-wrapper-outer",
    stageClass: "owl-wrapper",
    // callbacks: true,
  };
  return (
    <>
      <div class="row" style={{ backgroundColor: "E8F7FF" }}>
        <div class="container">
          <div class="top-header d-flex top-header-singal">
            <div class="col-md-8 pr-5">
              <span class="d-flex " style={{ alignItems: "center" }}>
                <img src={Img8} />
                <p class="ml-3 mb-0" style={{ fontSize: "32px" }}>
                  java
                </p>
              </span>
              <img
                src="images/star.png"
                alt=""
                class="image-fliud py-3"
                style={{ width: "auto" }}
              />
              <p>
                Equip yourself with the skills to build applications end-to-end.
                Master the complete technology stack and techniques of web &
                mobile development. Become a certified Jack Full Stack
                Developer.
              </p>
              <a href="#" class="btn-enroll">
                <p>
                  <b>Enroll Now</b>
                </p>
                <p>Starting 8th May</p>
              </a>
              <p style={{ fontSize: "#1B4584" }} class="pt-3 pb-3 pb-md-0">
                50 already enrolled
              </p>
            </div>
            <div class="col-md-4 top-im ml-md-5">
              <div class="form h-100">
                <p class="now">Enquire Now</p>
                <form
                  class="custom_contact home_custom"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div class="row">
                    <div class="col-md-12 form-group ">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div class="col-md-12 form-group ">
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="col-md-12 form-group ">
                      <input
                        type="number"
                        class="form-control"
                        name="number"
                        id="phone number"
                        placeholder="Enter Contact Number"
                      />
                    </div>
                    <div class="col-md-12 form-group ">
                      <select class="custom-select" id="budget" name="budget">
                        <option selected>Select a Course</option>
                        <option value="$1000 below">java</option>
                        <option value="$2,000 - $5,000">Python</option>
                        <option value="$5,000 - $15,000">
                          Digital Marketing
                        </option>
                        <option value="$15,000 - $25,000">
                          Graphic Desginer{" "}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-12 form-group ">
                      <select class="custom-select" id="budget" name="budget">
                        <option selected>Select Branch</option>
                        <option value="$1000 below">Branch 1</option>
                        <option value="$2,000 - $5,000">Branch 2</option>
                        <option value="$5,000 - $15,000">Branch 3</option>
                        <option value="$15,000 - $25,000">Branch 4</option>
                        <option value="$25,000">Branch 5</option>
                      </select>
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="submit"
                        value="submit "
                        class="btn btn-primary submit_bt  py-2 px-5"
                      />
                      <span class="submitting"></span>
                    </div>
                  </div>
                </form>
                <div id="form-message-warning mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container py-md-5">
          <div class="col-md-12 py-5">
            <h2 class="text-left  h23 pb-5" style={{ fontWeight: "700" }}>
              Explore Courses
            </h2>
            <div class="box-outer-flex">
              <div class="flex-box_1">
                <p>
                  Data Structure & Algorithms <br />
                  using Java
                </p>
              </div>
              <div class="flex-box_1">
                <p>Java for Beginners</p>
              </div>
              <div class="flex-box_1">
                <p>Java Expert</p>
              </div>
              <div class="flex-box_1">
                <p>Java Full Stack Developer</p>
              </div>
              <div class="flex-box_1">
                <p>
                  Spring Boot Micro services <br />
                  security with Hibernate & JPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#2C72D5" }}>
        <div className="container">
          <div className="col-md-12">
            <div className="box-outer_1">
              <div className="box_1">
                <img src={JavawImg} />
                <p>Learn The Essential Skills</p>
              </div>
              <div className="box_1">
                <img src={PythonImg} />
                <p>Earn Cerficate And Degrees</p>
              </div>
              <div className="box_1">
                <img src={JavawImg} />
                <p>Get Ready for The Next Career</p>
              </div>
              <div className="box_1">
                <img src={PythonImg} />
                <p>Master at Diffrent Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-5 ">
        <div class="container pb-5">
          <div class="col-md-12">
            <ul class="nav nav-tabs tab_ul">
              <li class="active">
                <a data-toggle="tab" href="#home">
                  About
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu1">
                  Eligibility
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu2">
                  Enrollment options
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu3">
                  FAQS
                </a>
              </li>
            </ul>
            <div class="tab-content pt-5">
              <div id="home" class="tab-pane fade show in active">
                <h4>What you will learn?</h4>
                <ul class="basic pb-5">
                  <li>
                    Learn the basic syntax and functions of the Java programming
                    language
                  </li>
                  <li>
                    Apply object-oriented programming techniques to building
                    classes, creating objects, and understanding how solutions
                    are packaged in Java.
                  </li>
                  <li>
                    Learn how to implement inheritance and polymorphism in Java.
                  </li>
                  <li>
                    Use selected parts of the vast Java SE class library to
                    enhance your Java programming techniques.
                  </li>
                </ul>
                <h4 class="pb-3">Skill you will gain</h4>
                <div class="basic-tab pb-3 mb-5">
                  <div>Computer Programming</div>
                  <div>Java Programming</div>
                  <div>Computer Programming</div>
                  <div>Java Programming</div>
                  <div>Computer Programming</div>
                </div>
                <h4 class="pb-3 pt-3"> About the specialization</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
              <div id="menu1" class="tab-pane fade">
                <h4>Menu 1</h4>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div id="menu2" class="tab-pane fade">
                <h3>Menu 2</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div id="menu3" class="tab-pane fade">
                <h3>Menu 3</h3>
                <p>
                  Eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row pb-3 py-5" style={{ backgroundColor: "#F6F6F6" }}>
        <div class="container-fluid py-5 Post-outer-course">
          <div class="col-md-12 ">
            <OwlCarousel id="news-slide" {...options}>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="post-slide course-slide">
                <div class="post-content">
                  <div class="content-in">
                    <div class="post-news post-course">
                      <img src={ImgE1} alt="" class="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p class="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" class="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div class="owl-controls clickable">
              <div className="owl-buttons">
                <div className="owl-prev">prev</div>
                <div className="owl-next">next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseView;
