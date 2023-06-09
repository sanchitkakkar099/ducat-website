import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import StarImg from "../../assets/images/star.png";
import Rec1Img from "../../assets/images/Rec1.png";
import Rec2Img from "../../assets/images/Rec2.png";
import Rec3Img from "../../assets/images/Rec3.png";
import Rec4Img from "../../assets/images/Rec4.png";
import DownImg from "../../assets/images/down.png";
import ImgFram21 from "../../assets/images/Frame-(21).png";
import ImgFrame19 from "../../assets/images/Frame (19).png";
import ImgFrame17 from "../../assets/images/Group (17).png";
import ImgFrame16 from "../../assets/images/Group (16).png";
import { useCourseListMutation } from "../../service";
import { getCourse } from "../../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CourseList() {
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.courseState.courselist);
  const [reqCourseData, resCourseData] = useCourseListMutation();
  const [isCourseList, setIsCourseList] = useState(false);

  useEffect(() => {
    reqCourseData({
      page: 1,
      limit: 10,
      search: "",
      status: "Active",
    });
  }, []);

  useEffect(() => {
    if (resCourseData?.isSuccess) {
      dispatch(getCourse(resCourseData?.data?.data?.docs));
      // setPageCount(resCourseData?.data?.data?.totalDocs);
    }
  }, [resCourseData]);

  const options = {
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 3.3,
    stageOuterClass: "owl-wrapper-outer",
    stageClass: "owl-wrapper",
    navContainerClass: "owl-controls owl-buttons",
    navClass: ["owl-prev", "owl-next"],
    loop: true,
  };

  useEffect(() => {
    if (courseList && Array.isArray(courseList) && courseList?.length > 0) {
      setIsCourseList(true);
    }
  }, [courseList]);
  return (
    <div className="row pb-3 slider-outer py-5">
      <div className="container">
        <div className="col-md-12">
          <h2 className="text-left pop h23">Find the Right Course for You</h2>
          {courseList && Array.isArray(courseList) && courseList?.length > 0 ? (
            <OwlCarousel
              className="owl-theme fiend_right"
              id="news-slider"
              {...options}
            >
              {courseList?.map((cs, i) => {
                return (
                  <div className="post-slide" key={i}>
                    <div className="post-content">
                      <div className="img_hetch">
                        <img src={ImgFram21} alt="" className="hetch" />
                      </div>
                      <div className="content-in">
                        <h3 className="post-title">
                          <Link to={`/course/${cs?._id}`}>{cs?.title}</Link>
                        </h3>
                        {/* <img
                            src={StarImg}
                            alt=""
                            className="image-fliud"
                            style={{ width: "auto" }}
                          /> */}
                        <p className="post-description">{cs?.subtitle}</p>
                        {/* <p className="post-description">
                            <span>
                              Duration: <strong>6 Months</strong>
                            </span>
                          </p>
                          <p className="post-description">
                            <span>
                              Eligibility:{" "}
                              <strong>10+2 (Recognised Board)</strong>
                            </span>
                          </p> */}
                      </div>
                      <a href="#" className="download">
                        Download Brochure
                        <span>
                          <img
                            src={DownImg}
                            alt=""
                            className="image-fliud"
                            style={{ width: "auto" }}
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFrame19} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Phython</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFrame17} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Data Science</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFrame16} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Graphic Designing</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFram21} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Java Full Stack Developer</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFrame16} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Graphic Designing</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFram21} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Java Full Stack Developer</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div> */}
              {/* <div className="post-slide">
              <div className="post-content">
                <div className="img_hetch">
                  <img src={ImgFram21} alt="" className="hetch" />
                </div>
                <div className="content-in">
                  <h3 className="post-title">
                    <a href="#">Java Expert</a>
                  </h3>
                  <img
                    src={StarImg}
                    alt=""
                    className="image-fliud"
                    style={{ width: "auto" }}
                  />
                  <p className="post-description">
                    Equip yourself with the skills to build applications
                    end-to-end. Master the complete technology stack and
                    techniques of web & mobile development. Become a certified
                    Jack Full Stack Developer.
                  </p>
                  <p className="post-description">
                    <span>
                      Duration: <strong>6 Months</strong>
                    </span>
                  </p>
                  <p className="post-description">
                    <span>
                      Eligibility: <strong>10+2 (Recognised Board)</strong>
                    </span>
                  </p>
                </div>
                <a href="#" className="download">
                  Download Brochure
                  <span>
                    <img
                      src={DownImg}
                      alt=""
                      className="image-fliud"
                      style={{ width: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div> */}
            </OwlCarousel>
          ) : (
            "No Course Found"
          )}
          {/* <div class="owl-controls clickable">
            <div className="owl-buttons">
              <div className="owl-prev">prev</div>
              <div className="owl-next">next</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CourseList;
