import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import StarImg from "../../assets/images/star.png";
import Img96 from "../../assets/images/image 96.png";
import Img97 from "../../assets/images/image 97.png";
import Img98 from "../../assets/images/image 98.png";
import Img99 from "../../assets/images/image 99 (1).png";
import Img100 from "../../assets/images/image 100.png";

import AroImg from "../../assets/images/aro.png";

function BatchList() {
  useEffect(() => {
    document.getElementById("course-slider").style.opacity = 1;
    document.getElementById("course-slider").style.display = "block";
  }, []);
  const options = {
    responsiveClass: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 4.5,
    stageOuterClass: "owl-wrapper-outer",
    stageClass: "owl-wrapper",
  };
  return (
    <div className="row pb-3 py-5">
      <div className="container">
        <div className="col-md-12">
          <h2 className="text-left pop h23">Upcoming Batches</h2>
          <div className="location">
            <span>
              Choose your Location
              <select className="form-select">
                <option>Sector 16, Noida</option>
                <option>Sector 8, Faridabad</option>
                <option>Sector 5, Gurugram</option>
                <option>Rohini Dehli</option>
              </select>
            </span>
          </div>
          <OwlCarousel id="course-slider" {...options}>
            {/* <div id="new-slider" className="owl-carousel   slider-first"> */}
            <div className="post-slide">
              <div className="post-content">
                <div className="star_img_outer">
                  <img src={Img96} alt="" className="hetchs" />
                </div>
                <div className="content-in ">
                  <div className="post-news">
                    <h3 className="post-title">
                      <a href="#">PHP</a>
                    </h3>
                    <img
                      src={StarImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </div>
                  <p className="post-description">
                    <span>Branch: Sector 63, Noida</span>
                  </p>
                  <p className="post-description">
                    <span>Starting Date: 2023-04-01</span>
                  </p>
                  <p
                    style={{
                      color: "#F58733",
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "5px",
                    }}
                  >
                    No of students registered: 450
                  </p>
                  <a href="#" className="register">
                    Request a call back
                    <span>
                      <img
                        src={AroImg}
                        alt=""
                        className="image-fliud"
                        style={{ width: "auto" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="star_img_outer">
                  <img src={Img97} alt="" className="hetchs" />
                </div>
                <div className="content-in">
                  <div className="post-news">
                    <h3 className="post-title">
                      <a href="#">Digital Marketing</a>
                    </h3>
                    <img
                      src={StarImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </div>
                  <p className="post-description">
                    <span>Branch: Sector 63, Noida</span>
                  </p>
                  <p className="post-description">
                    <span>Starting Date: 2023-04-01</span>
                  </p>
                  <p
                    style={{
                      color: "#F58733",
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "5px",
                    }}
                  >
                    No of students registered: 450
                  </p>
                  <a href="#" className="register">
                    Request a call back
                    <span>
                      <img
                        src={AroImg}
                        alt=""
                        className="image-fliud"
                        style={{ width: "auto" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="star_img_outer">
                  <img src={Img98} alt="" className="hetchs" />
                </div>
                <div className="content-in">
                  <div className="post-news">
                    <h3 className="post-title">
                      <a href="#">Web Designing</a>
                    </h3>
                    <img
                      src={StarImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </div>
                  <p className="post-description">
                    <span>Branch: Sector 63, Noida</span>
                  </p>
                  <p className="post-description">
                    <span>Starting Date: 2023-04-01</span>
                  </p>
                  <p
                    style={{
                      color: "#F58733",
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "5px",
                    }}
                  >
                    No of students registered: 450
                  </p>
                  <a href="#" className="register">
                    Request a call back
                    <span>
                      <img
                        src={AroImg}
                        alt=""
                        className="image-fliud"
                        style={{ width: "auto" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="star_img_outer">
                  <img src={Img99} alt="" className="hetchs" />
                </div>
                <div className="content-in">
                  <div className="post-news">
                    <h3 className="post-title">
                      <a href="#">Java Script</a>
                    </h3>
                    <img
                      src={StarImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </div>
                  <p className="post-description">
                    <span>Branch: Sector 63, Noida</span>
                  </p>
                  <p className="post-description">
                    <span>Starting Date: 2023-04-01</span>
                  </p>
                  <p
                    style={{
                      color: "#F58733",
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "5px",
                    }}
                  >
                    No of students registered: 450
                  </p>
                  <a href="#" className="register">
                    Request a call back
                    <span>
                      <img
                        src={AroImg}
                        alt=""
                        className="image-fliud"
                        style={{ width: "auto" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="star_img_outer">
                  <img src={Img100} alt="" className="hetchs" />
                </div>
                <div className="content-in">
                  <div className="post-news">
                    <h3 className="post-title">
                      <a href="#">Ethnical Hacking</a>
                    </h3>
                    <img
                      src={StarImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </div>
                  <p className="post-description">
                    <span>Branch: Sector 63, Noida</span>
                  </p>
                  <p className="post-description">
                    <span>Starting Date: 2023-04-01</span>
                  </p>
                  <p
                    style={{
                      color: "#F58733",
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "5px",
                    }}
                  >
                    No of students registered: 450
                  </p>
                  <a href="#" className="register">
                    Request a call back
                    <span>
                      <img
                        src={AroImg}
                        alt=""
                        className="image-fliud"
                        style={{ width: "auto" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* </div> */}
          </OwlCarousel>
          <div class="owl-controls clickable">
            <div className="owl-buttons">
              <div className="owl-prev">prev</div>
              <div className="owl-next">next</div>
            </div>
          </div>
          {/* <!-- <div className="btm_btn"><a href="#"> Explore More</a></div> --> */}
        </div>
      </div>
    </div>
  );
}

export default BatchList;
