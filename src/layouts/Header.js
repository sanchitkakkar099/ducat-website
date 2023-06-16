import React, { useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetCategoryCourseDropdownQuery } from "../service";
import { setCategoryCourseDropDown } from "../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "../hooks/useOutsideClick ";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryCourseDropdown = useSelector(
    (state) => state.courseState.categoryCourseDropdown
  );
  console.log("categoryCourseDropdown", categoryCourseDropdown);
  const resCategoryCourseDropdown = useGetCategoryCourseDropdownQuery();

  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

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

  const courseDropdown = (e) => {
    setShowDropdown(!showDropdown);
  };

  const onCourseSelect = (cs) => {
    setShowDropdown(false);
  };
  return (
    <header>
      <div className="row">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid pl-0">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to={"/"}>
                <img
                  src={Logo}
                  atl="head-logo"
                  width="90px"
                  className="image-fliud"
                />
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 ">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/abouts"}>
                      About us
                    </Link>
                  </li>
                  <li className="nav-item dropdown" ref={ref}>
                    <Link
                      className="nav-link dropdown-toggle"
                      to=""
                      onClick={(e) => courseDropdown(e)}
                    >
                      {" "}
                      Courses
                    </Link>
                    <ul
                      className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                      aria-labelledby="dropdownMenuButton"
                    >
                      {/* <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li> */}
                      {categoryCourseDropdown &&
                        Array.isArray(categoryCourseDropdown) &&
                        categoryCourseDropdown?.length > 0 &&
                        categoryCourseDropdown?.map((el, i) => {
                          return (
                            <li key={i}>
                              <Link
                                to={""}
                                className="dropdown-item d-flex justify-content-between"
                              >
                                {el?.name}
                                <i className="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                              </Link>
                              {el?.course &&
                                Array.isArray(el?.course) &&
                                el?.course?.length > 0 && (
                                  <ul className="dropdown-menu dropdown-submenu">
                                    {el?.course &&
                                    Array.isArray(el?.course) &&
                                    el?.course?.length > 0
                                      ? el?.course?.map((cs) => {
                                          return (
                                            <li key={cs?._id}>
                                              <Link
                                                className="dropdown-item"
                                                to={`/course/${cs?._id}`}
                                                onClick={() =>
                                                  onCourseSelect(cs)
                                                }
                                              >
                                                {cs?.title}
                                              </Link>
                                            </li>
                                          );
                                        })
                                      : ""}
                                  </ul>
                                )}
                            </li>
                          );
                        })}
                      {/* <li>
                        <a
                          className="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          Submenu
                          <i className="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Submenu item 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Submenu item 2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Submenu item 3{" "}
                            </a>
                            <ul className="dropdown-menu dropdown-submenu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Multi level 1
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Multi level 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Submenu item 4
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Submenu item 5
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/certificate">
                      Certificate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/placement">
                      Placements
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn_contact" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
