import React, { useState, useEffect } from "react";
import SearchImg from "../assets/images/search.png";
import TophImg from "../assets/images/top_h.png";
import JavawImg from "../assets/images/javaw.png";
import PythonImg from "../assets/images/Pythonw.png";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryCourseDropDown,
  setCourseDropDown,
} from "../redux/courseSlice";
import {
  useGetAllCourseDropdownQuery,
  useGetCategoryCourseDropdownQuery,
} from "../service";
import { useNavigate } from "react-router-dom";

function Banner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseDropdown = useSelector(
    (state) => state.courseState.courseDropdown
  );
  const categoryCourseDropdown = useSelector(
    (state) => state.courseState.categoryCourseDropdown
  );
  const resCategoryCourseDropdown = useGetCategoryCourseDropdownQuery();
  const resCourseDropdown = useGetAllCourseDropdownQuery();
  const [singleSelections, setSingleSelections] = useState([]);
  const [selectedCategory] = singleSelections;
  console.log("singleSelections", selectedCategory);

  useEffect(() => {
    if (
      resCategoryCourseDropdown?.isSuccess &&
      resCategoryCourseDropdown?.data?.data
    ) {
      dispatch(
        setCategoryCourseDropDown(resCategoryCourseDropdown?.data?.data)
      );
    }
  }, [resCategoryCourseDropdown]);

  useEffect(() => {
    if (resCourseDropdown?.isSuccess && resCourseDropdown?.data?.data) {
      dispatch(setCourseDropDown(resCourseDropdown?.data?.data));
    }
  }, [resCourseDropdown]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      navigate(`/category/${selectedCategory?.name}`, {
        state: {
          categoryView: selectedCategory,
        },
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="top-header d-flex pb-5">
            <div className="col-md-6">
              <p>
                Let us help you kick start your career and achieve your goals.{" "}
              </p>
              <div className="input-group">
                <div className="wrap">
                  <div className="search">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      onChange={setSingleSelections}
                      options={categoryCourseDropdown || []}
                      placeholder="Search your favourite course category today"
                      className="searchTerm"
                      selected={singleSelections}
                      highlightOnlyResult={true}
                    />
                    <button
                      type="button"
                      className="searchButton"
                      onClick={(e) => handleSearch(e)}
                    >
                      <img src={SearchImg} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={TophImg} className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row" style={{ backgroundColor: "#2C72D5" }}>
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
      </div> */}
    </>
  );
}

export default Banner;
