import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import StarImg from "../../assets/images/star.png";
import Img96 from "../../assets/images/image 96.png";
import Img97 from "../../assets/images/image 97.png";
import Img98 from "../../assets/images/image 98.png";
import Img99 from "../../assets/images/image 99 (1).png";
import Img100 from "../../assets/images/image 100.png";
import Select from "react-select";
import { toast } from "react-hot-toast";

import AroImg from "../../assets/images/aro.png";
import {
  useBatchListMutation,
  useGetAllCenterDropdownQuery,
  useGetAllCourseDropdownQuery,
  useSubmitEnquiryMutation,
} from "../../service";
import { useDispatch, useSelector } from "react-redux";
import { getBatch } from "../../redux/batchSlice";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { setCenterDropDown } from "../../redux/centerSlice";
import {
  Button,
  FormFeedback,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { setCourseDropDown } from "../../redux/courseSlice";
import { handleValidatePhone } from "../../constants/formConstant";

function BatchList() {
  const dispatch = useDispatch();
  const batchList = useSelector((state) => state.batchState.batchList);
  console.log("batchList", batchList);
  const courseDropdown = useSelector(
    (state) => state.courseState.courseDropdown
  );
  const centerDropdown = useSelector(
    (state) => state.centerState.centerDropdown
  );
  const [firstCenter] = centerDropdown;
  const [reqBatchData, resBathData] = useBatchListMutation();
  const resCourseDropdown = useGetAllCourseDropdownQuery();
  const resCenterDropdown = useGetAllCenterDropdownQuery();
  const [reqEnquiry, resEnquiry] = useSubmitEnquiryMutation();

  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);


  const [owlOption, setOwlOption] = useState({
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 4.5,
    stageOuterClass: "owl-wrapper-outer",
    stageClass: "owl-wrapper",
    navContainerClass: "owl-controls owl-buttons",
    loop:
      batchList && Array.isArray(batchList) && batchList?.length > 1
        ? true
        : false,
  });
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (resCenterDropdown?.isSuccess && resCenterDropdown?.data?.data) {
      dispatch(setCenterDropDown(resCenterDropdown?.data?.data));
    }
    if (resCourseDropdown?.isSuccess && resCourseDropdown?.data?.data) {
      dispatch(setCourseDropDown(resCourseDropdown?.data?.data));
    }
  }, [resCenterDropdown, resCourseDropdown]);

  useEffect(() => {
    if (selectedCenter) {
      reqBatchData({
        page: 1,
        limit: 10,
        search: "",
        center_id: selectedCenter,
        status: "Active",
      });
    } else if (firstCenter) {
      reqBatchData({
        page: 1,
        limit: 10,
        search: "",
        center_id: firstCenter?._id,
        status: "Active",
      });
    }
  }, [selectedCenter, firstCenter]);

  useEffect(() => {
    if (resBathData?.isSuccess) {
      dispatch(getBatch(resBathData?.data?.data?.docs));
      setOwlOption({
        responsiveClass: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        items: 4.5,
        stageOuterClass: "owl-wrapper-outer",
        stageClass: "owl-wrapper",
        navContainerClass: "owl-controls owl-buttons",
        loop:
          batchList && Array.isArray(batchList) && batchList?.length > 1
            ? true
            : false,
      });
      // setPageCount(resBathData?.data?.data?.totalDocs);
    }
  }, [resBathData?.isSuccess]);

  const filterCenter = (e) => {
    e.preventDefault();
    setSelectedCenter(e.target.value);
  };
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
      reset();
      toast.success(resEnquiry?.data?.message, {
        position: "top-center",
      });
      reset();
      setModal(false);
    }
  }, [resEnquiry?.isSuccess]);

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

  const reqEnquiryForm = (bh) => {
    setSelectedBatch(bh)
    setModal(true)
  }

  useEffect(() => {
    reset({
      course:{label:selectedBatch?.course?.title,value:selectedBatch?.course?._id},
      center:{label:selectedBatch?.center?.title,value:selectedBatch?.center?._id}
    })
  },[selectedBatch])
  console.log('selectedBatch',selectedBatch,courseDropdown);
  return (
    <>
      <div className="row pb-3 py-5">
        <div className="container">
          <div className="col-md-12">
            <h2 className="text-left pop h23">Upcoming Batches</h2>
            <div className="location">
              {centerDropdown &&
                Array.isArray(centerDropdown) &&
                centerDropdown?.length > 0 && (
                  <span>
                    Choose your Location
                    <select
                      className="form-select"
                      onChange={(e) => filterCenter(e)}
                    >
                      {centerDropdown?.map((el, i) => {
                        return (
                          <option key={i} value={el?._id}>
                            {el?.label}
                          </option>
                        );
                      })}
                    </select>
                  </span>
                )}
            </div>
            {batchList && Array.isArray(batchList) && batchList?.length > 0 ? (
              <OwlCarousel
                id="course-slider"
                {...owlOption}
                className="slider-first"
              >
                {batchList?.map((bh, i) => {
                  return (
                    <div className="post-slide" key={i}>
                      <div className="post-content">
                        <div className="star_img_outer">
                          {bh?.course?.image?.filepath ? (
                            <img
                              src={bh?.course?.image?.filepath}
                              alt=""
                              className="hetchs"
                            />
                          ) : (
                            <img src={Img96} alt="" className="hetchs" />
                          )}
                        </div>
                        <div className="content-in ">
                          <div className="post-news">
                            <h3 className="post-title">
                              <Link to="#">{bh?.course?.title}</Link>
                            </h3>
                            {/* <img
                              src={StarImg}
                              alt=""
                              className="image-fliud"
                              style={{ width: "auto" }}
                            /> */}
                          </div>
                          <p className="post-description">
                            <span>
                              Branch: {bh?.center?.title}, {bh?.center?.address}
                            </span>
                          </p>
                          <p className="post-description">
                            <span>
                              Starting Date:{" "}
                              {dayjs(bh?.start_date).format("YYYY-MM-DD")}
                            </span>
                            <p>
                              Batch Time :{" "}
                              {bh?.timing
                                ? dayjs(bh?.timing).format("hh:mm A")
                                : "-"}
                            </p>
                          </p>
                          {/* <p
                            style={{
                              color: "#F58733",
                              fontSize: "11px",
                              textAlign: "center",
                              marginTop: "5px",
                            }}
                          >
                            No of students registered: 450
                          </p> */}
                          <Button
                            // href="#"
                            className="register"
                            onClick={() => reqEnquiryForm(bh)}
                          >
                            Request a call back
                            {/* <span>
                              <img
                                src={AroImg}
                                alt=""
                                className="image-fliud"
                                style={{ width: "auto" }}
                              />
                            </span> */}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="post-slide">
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
            </div> */}
              </OwlCarousel>
            ) : (
              <p className="not_found">No Batch Found</p>
            )}
            {/* <div class="owl-controls clickable">
            <div className="owl-buttons">
              <div className="owl-prev"></div>
              <div className="owl-next"></div>
            </div>
          </div> */}
            {/* <!-- <div className="btm_btn"><a href="#"> Explore More</a></div> --> */}
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="sm">
        <ModalHeader className="enquire_modal">
        Enquire Now
        </ModalHeader>
        <ModalBody>
          <div className="bg-light-course" style={{ backgroundColor: "#fff" }}>
            <div className="form h-100">
              {/* <p className="now">Enquire Now</p> */}
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
                      // defaultValue={watch("name")}
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
        </ModalBody>
      </Modal>
    </>
  );
}

export default BatchList;
