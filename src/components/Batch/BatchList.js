import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import StarImg from "../../assets/images/star.png";
import Img96 from "../../assets/images/image 96.png";
import Img97 from "../../assets/images/image 97.png";
import Img98 from "../../assets/images/image 98.png";
import Img99 from "../../assets/images/image 99 (1).png";
import Img100 from "../../assets/images/image 100.png";

import AroImg from "../../assets/images/aro.png";
import {
  useBatchListMutation,
  useGetAllCenterDropdownQuery,
} from "../../service";
import { useDispatch, useSelector } from "react-redux";
import { getBatch } from "../../redux/batchSlice";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { setCenterDropDown } from "../../redux/centerSlice";

function BatchList() {
  const dispatch = useDispatch();
  const batchList = useSelector((state) => state.batchState.batchList);
  console.log("batchList", batchList);
  const centerDropdown = useSelector(
    (state) => state.centerState.centerDropdown
  );
  const [firstCenter] = centerDropdown;
  const [reqBatchData, resBathData] = useBatchListMutation();
  const resCenterDropdown = useGetAllCenterDropdownQuery();
  const [selectedCenter, setSelectedCenter] = useState(null);
  useEffect(() => {
    if (resCenterDropdown?.isSuccess && resCenterDropdown?.data?.data) {
      dispatch(setCenterDropDown(resCenterDropdown?.data?.data));
    }
  }, [resCenterDropdown]);

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
    if (resBathData?.isSuccess && !selectedCenter && firstCenter) {
      dispatch(getBatch(resBathData?.data?.data?.docs));
      // setPageCount(resBathData?.data?.data?.totalDocs);
    } else if (resBathData?.isSuccess && selectedCenter) {
      dispatch(getBatch(resBathData?.data?.data?.docs));
      // setPageCount(resBathData?.data?.data?.totalDocs);
    }
  }, [resBathData?.isSuccess, selectedCenter, firstCenter]);

  const options = {
    responsiveClass: true,
    nav:
      batchList && Array.isArray(batchList) && batchList?.length > 2
        ? true
        : false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 4.5,
    stageOuterClass: "owl-wrapper-outer",
    stageClass: "owl-wrapper",
    navContainerClass:
      batchList && Array.isArray(batchList) && batchList?.length > 2
        ? "owl-controls owl-buttons"
        : "",
    navClass: "",
    loop:
      batchList && Array.isArray(batchList) && batchList?.length === 1
        ? false
        : true,
  };

  const filterCenter = (e) => {
    e.preventDefault();
    setSelectedCenter(e.target.value);
  };
  return (
    <div className="row pb-3 py-5">
      <div className="container">
        <div className="col-md-12">
          <h2 className="text-left pop h23">Upcoming Batches</h2>
          <div className="location">
            <span>
              Choose your Location
              <select className="form-select" onChange={(e) => filterCenter(e)}>
                {centerDropdown &&
                Array.isArray(centerDropdown) &&
                centerDropdown?.length > 0 ? (
                  centerDropdown?.map((el, i) => {
                    return (
                      <option key={i} value={el?._id}>
                        {el?.label}
                      </option>
                    );
                  })
                ) : (
                  <options>No Center Found</options>
                )}
              </select>
            </span>
          </div>
          {batchList && Array.isArray(batchList) && batchList?.length > 0 ? (
            <OwlCarousel
              id="course-slider"
              {...options}
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
                            {dayjs(bh?.timing).format("YYYY-MM-DD")}
                          </span>
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
            "No Batch Found"
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
  );
}

export default BatchList;
