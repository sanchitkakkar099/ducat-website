import React, { useEffect, useState } from "react";
import {
  useCourseByIdQuery,
  useGetAllCenterDropdownQuery,
  useGetAllCourseDropdownQuery,
  useRelatedCourseByCategoryIdMutation,
  useSubmitEnquiryMutation,
} from "../../service";
import { Controller, useForm } from "react-hook-form";
import { setCourseDropDown, setCourseView } from "../../redux/courseSlice";
import { setCenterDropDown } from "../../redux/centerSlice";
import { useDispatch, useSelector } from "react-redux";
import { FormFeedback, Input } from "reactstrap";
import Select from "react-select";
import { toast } from "react-hot-toast";
import JavawImg from "../../assets/images/javaw.png";
import PythonImg from "../../assets/images/Pythonw.png";
import Img8 from "../../assets/images/Frame (8).png";
import ImgE1 from "../../assets/images/E1.png";

import OwlCarousel from "react-owl-carousel";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { handleValidatePhone } from "../../constants/formConstant";

function CourseView() {
  const dispatch = useDispatch();
  const params = useParams();
  const courseDropdown = useSelector(
    (state) => state.courseState.courseDropdown
  );
  const centerDropdown = useSelector(
    (state) => state.centerState.centerDropdown
  );
  const courseViewData = useSelector((state) => state.courseState.courseView);

  const [reqEnquiry, resEnquiry] = useSubmitEnquiryMutation();
  const resCourseDropdown = useGetAllCourseDropdownQuery();
  const resCenterDropdown = useGetAllCenterDropdownQuery();
  const resCourseById = useCourseByIdQuery(params?.id);
  const [reqCourseByCategoryId, resCourseByCategoryId] =
    useRelatedCourseByCategoryIdMutation();
  console.log("resCourseByCategoryId", resCourseByCategoryId);

  const [activeTab, setActiveTab] = useState("about");
  const [relatedCourse, setRelatedCourse] = useState([]);
  console.log("relatedCourse", relatedCourse);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (courseViewData?.course_category?.value) {
      reqCourseByCategoryId({
        categoryid: courseViewData?.course_category?.value,
      });
    }
  }, [courseViewData]);

  useEffect(() => {
    if (resCourseByCategoryId?.isSuccess && resCourseByCategoryId?.data?.data) {
      const filterCourse = resCourseByCategoryId?.data?.data?.filter(
        (el) => el?._id !== courseViewData?._id
      );
      setRelatedCourse(filterCourse);
    }
  }, [resCourseByCategoryId]);

  useEffect(() => {
    if (resCourseById?.isSuccess) {
      dispatch(setCourseView(resCourseById?.data?.data));
    }
  }, [resCourseById]);

  useEffect(() => {
    if (resCourseDropdown?.isSuccess && resCourseDropdown?.data?.data) {
      dispatch(setCourseDropDown(resCourseDropdown?.data?.data));
    }
    if (resCenterDropdown?.isSuccess && resCenterDropdown?.data?.data) {
      dispatch(setCenterDropDown(resCenterDropdown?.data?.data));
    }
  }, [resCourseDropdown, resCenterDropdown]);

  const onNext = (state) => {
    const reqData = {
      ...state,
      status: "Active",
      course: state?.course?.value,
      center: state?.center?.value,
    };
    reqEnquiry(reqData);
  };

  useEffect(() => {
    if (resEnquiry?.isSuccess) {
      toast.success(resEnquiry?.data?.message, {
        position: "top-center",
      });
      reset();
    }
  }, [resEnquiry?.isSuccess]);

  const options = {
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 3.5,
    stageOuterClass: "owl-wrapper-outer",
    stageClass: "owl-wrapper",
    navContainerClass: "owl-controls owl-buttons",
    navClass: ["owl-prev", "owl-next"],
    // callbacks: true,
  };

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    control: (base) => ({
      ...base,
      height: "32px",
      minHeight: "32px",
    }),
    singleValue: (base) => ({
      ...base,
      marginBottom: "5px",
      fontSize: "12px",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontSize: "13px",
        marginBottom: "5px",
      };
    },
  };

  useEffect(() => {
    reset({
      course:{label:courseViewData?.title,value:courseViewData?._id},
    })
  },[courseViewData])
  console.log('courseViewData',courseViewData);
  return (
    <>
      <div className="bg-light-course">
        <div className="row" style={{ backgroundColor: "E8F7FF" }}>
          <div className="container">
            <div className="top-header d-flex top-header-singal">
              <div className="col-md-8 pr-5">
                <span className="d-flex " style={{ alignItems: "center" }}>
                  {courseViewData?.image?.filepath ? (
                    <img
                      src={courseViewData?.image?.filepath}
                      height={65}
                      width={81}
                    />
                  ) : (
                    <img src={Img8} />
                  )}
                  <p className="ml-3 mb-0" style={{ fontSize: "32px" }}>
                    {courseViewData?.title}
                  </p>
                </span>
                <img
                  src="images/star.png"
                  alt=""
                  className="image-fliud py-3"
                  style={{ width: "auto" }}
                />
                <p>{courseViewData?.subtitle}</p>
                {/* <a href="#" className="btn-enroll">
                  <p>
                    <b>Enroll Now</b>
                  </p>
                  <p>Starting 8th May</p>
                </a>
                <p style={{ fontSize: "#1B4584" }} className="pt-3 pb-3 pb-md-0">
                  50 already enrolled
                </p> */}
              </div>
              <div className="col-md-4 top-im ml-md-5">
                <div className="form h-100">
                  <p className="now">Enquire Now</p>
                  <form
                    className="custom_contact home_custom"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                    onSubmit={handleSubmit(onNext)}
                  >
                    <div className="row">
                      <div className="col-md-12 form-group ">
                        <Controller
                          id="name"
                          name="name"
                          className="form-control"
                          control={control}
                          rules={{ required: "Name is required" }}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              placeholder="Enquiry Name"
                              onChange={onChange}
                              value={value ? value : ""}
                            />
                          )}
                        />
                        {errors?.name && (
                          <FormFeedback>{errors?.name?.message}</FormFeedback>
                        )}
                      </div>
                      <div className="col-md-12 form-group ">
                        <Controller
                          id="email"
                          name="email"
                          className="form-control"
                          control={control}
                          rules={{ 
                            required: "Email is required",
                            validate: {
                              matchPattern: (v) =>
                                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v) ||
                                "Email address must be a valid address",
                            },
                          }}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              type="email"
                              placeholder="Email"
                              onChange={onChange}
                              value={value ? value : ""}
                            />
                          )}
                        />
                        {errors?.email && (
                          <FormFeedback>{errors?.email?.message}</FormFeedback>
                        )}
                      </div>
                      <div className="col-md-12 form-group ">
                        {/* <input
                          type="number"
                          className="form-control"
                          name="number"
                          id="phone number"
                          placeholder="Enter Contact Number"
                        /> */}
                        <Controller
                          id="phone"
                          name="phone"
                          className="form-control"
                          control={control}
                          rules={{ 
                          validate: (value) => handleValidatePhone(value)
                          }}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              type="number"
                              placeholder="Enquiry Phone Number"
                              onChange={onChange}
                              value={value ? value : ""}
                            />
                          )}
                        />
                        {errors?.phone && (
                          <FormFeedback>{errors?.phone?.message}</FormFeedback>
                        )}
                      </div>
                      <div className="col-md-12 form-group ">
                        {/* <select className="custom-select" id="budget" name="budget">
                          <option selected>Select a Course</option>
                          <option value="$1000 below">java</option>
                          <option value="$2,000 - $5,000">Python</option>
                          <option value="$5,000 - $15,000">
                            Digital Marketing
                          </option>
                          <option value="$15,000 - $25,000">
                            Graphic Desginer{" "}
                          </option>
                        </select> */}
                        <Controller
                          id="course"
                          name="course"
                          control={control}
                          rules={{ required: "Course is required" }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              isClearable
                              options={courseDropdown || []}
                              className="react-select"
                              classNamePrefix="Select a Course"
                              onChange={onChange}
                              value={value ? value : null}
                              styles={selectStyles}
                            />
                          )}
                        />
                        {errors.course && (
                          <FormFeedback>{errors?.course?.message}</FormFeedback>
                        )}
                      </div>
                      <div className="col-md-12 form-group ">
                        {/* <select className="custom-select" id="budget" name="budget">
                          <option selected>Select Branch</option>
                          <option value="$1000 below">Branch 1</option>
                          <option value="$2,000 - $5,000">Branch 2</option>
                          <option value="$5,000 - $15,000">Branch 3</option>
                          <option value="$15,000 - $25,000">Branch 4</option>
                          <option value="$25,000">Branch 5</option>
                        </select> */}
                        <Controller
                          id="center"
                          name="center"
                          control={control}
                          rules={{ required: "Center is required" }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              isClearable
                              options={centerDropdown || []}
                              className="react-select"
                              classNamePrefix="select"
                              onChange={onChange}
                              value={value ? value : null}
                              styles={selectStyles}
                            />
                          )}
                        />
                        {errors.center && (
                          <FormFeedback>{errors?.center?.message}</FormFeedback>
                        )}
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          type="submit"
                          value="Submit "
                          className="btn btn-primary submit_bt  py-2 px-5"
                        />
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                  <div id="form-message-warning mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="container py-md-5">
          <div className="col-md-12 py-5">
            <h2 className="text-left  h23 pb-5" style={{ fontWeight: "700" }}>
              Explore Courses
            </h2>
            <div className="box-outer-flex">
              <div className="flex-box_1">
                <p>
                  Data Structure & Algorithms <br />
                  using Java
                </p>
              </div>
              <div className="flex-box_1">
                <p>Java for Beginners</p>
              </div>
              <div className="flex-box_1">
                <p>Java Expert</p>
              </div>
              <div className="flex-box_1">
                <p>Java Full Stack Developer</p>
              </div>
              <div className="flex-box_1">
                <p>
                  Spring Boot Micro services <br />
                  security with Hibernate & JPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row" style={{ backgroundColor: "#2C72D5" }}>
        <div className="container">
          <div className="col-md-12">
            <div className="box-outer_1">
              {relatedCourse &&
                Array.isArray(relatedCourse) &&
                relatedCourse?.length > 0 &&
                relatedCourse?.map((el) => {
                  return (
                    <div className="box_1" key={el?._id}>
                      {el?.image?.filepath ? (
                        <img src={el?.image?.filepath} height={45} width={90} />
                      ) : (
                        <img src={JavawImg} height={45} width={90} />
                      )}
                      <p>{el?.title}</p>
                    </div>
                  );
                })}
              {/* 
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row py-5 ">
        <div className="container pb-5">
          <div className="col-md-12">
            <ul className="nav nav-tabs tab_ul">
              <li className={activeTab === "about" ? "active" : ""}>
                <Link to="" onClick={() => setActiveTab("about")}>
                  About
                </Link>
              </li>
              <li className={activeTab === "eligiblity" ? "active" : ""}>
                <Link to="" onClick={() => setActiveTab("eligiblity")}>
                  Eligibility
                </Link>
              </li>
              <li className={activeTab === "eop" ? "active" : ""}>
                <Link to="" onClick={() => setActiveTab("eop")}>
                  Enrollment options
                </Link>
              </li>
              <li className={activeTab === "faqs" ? "active" : ""}>
                <Link to="" onClick={() => setActiveTab("faqs")}>
                  FAQS
                </Link>
              </li>
            </ul>
            <div className="tab-content pt-5">
              <div
                id="home"
                className={`tab-pane fade ${
                  activeTab === "about" ? "show in active" : ""
                }`}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(courseViewData?.description,{
                      ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                      RETURN_TRUSTED_TYPE: true
                    }),
                  }}
                />
                {/* <h4>What you will learn?</h4>
                <ul className="basic pb-5">
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
                <h4 className="pb-3">Skill you will gain</h4>
                <div className="basic-tab pb-3 mb-5">
                  <div>Computer Programming</div>
                  <div>Java Programming</div>
                  <div>Computer Programming</div>
                  <div>Java Programming</div>
                  <div>Computer Programming</div>
                </div>
                <h4 className="pb-3 pt-3"> About the specialization</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p> */}
              </div>
              <div
                id="menu1"
                className={`tab-pane fade ${
                  activeTab === "eligiblity" ? "show in active" : ""
                }`}
              >
              <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(courseViewData?.eligibility,{
                      ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                    }),
                  }}
                />
                {/* <h4>Menu 1</h4>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}
              </div>
              <div
                id="menu2"
                className={`tab-pane fade ${
                  activeTab === "eop" ? "show in active" : ""
                }`}
              >
              <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(courseViewData?.enrollment_option,{
                      ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                    }),
                  }}
                />
                {/* <h3>Menu 2</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p> */}
              </div>
              <div
                id="menu3"
                className={`tab-pane fade ${
                  activeTab === "faqs" ? "show in active" : ""
                }`}
              >
              <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(courseViewData?.faqs,{
                      ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                    }),
                  }}
                />
                {/* <h3>Menu 3</h3>
                <p>
                  Eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-3 py-5" style={{ backgroundColor: "#F6F6F6" }}>
        <div className="container-fluid py-5 Post-outer-course">
          <div className="col-md-12 ">
            <OwlCarousel
              className="testimonial_slide"
              id="news-slide"
              {...options}
            >
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-slide course-slide">
                <div className="post-content">
                  <div className="content-in">
                    <div className="post-news post-course">
                      <img src={ImgE1} alt="" className="hetchs1" />
                      <p>Rakesh Jaiswal</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </div>
                    <p className="post-description">
                      Awesome learning experience of digital marketing with full
                      practical exposure at Mohan Nagar branch. Have good way of
                      teaching practically by shasank sir on live project.
                    </p>
                    <a href="#" className="read-more-m">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            {/* <div className="owl-controls clickable">
              <div className="owl-buttons">
                <div className="owl-prev">prev</div>
                <div className="owl-next">next</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseView;
