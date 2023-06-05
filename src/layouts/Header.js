import React from "react";
import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const courseDropdown = (e) => {
    setShowDropdown(!showDropdown);
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
              <a className="navbar-brand" href="#">
                <img
                  src={Logo}
                  atl="head-logo"
                  width="90px"
                  className="image-fliud"
                />
              </a>
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
                    <a className="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
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
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          Submenu
                          <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 2
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 3{" "}
                            </a>
                            <ul class="dropdown-menu dropdown-submenu">
                              <li>
                                <a class="dropdown-item" href="#">
                                  Multi level 1
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Multi level 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 4
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 5
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          Submenu
                          <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 2
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 3{" "}
                            </a>
                            <ul class="dropdown-menu dropdown-submenu">
                              <li>
                                <a class="dropdown-item" href="#">
                                  Multi level 1
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Multi level 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 4
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Submenu item 5
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Certificate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Placements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled btn_contact"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Contact Us
                    </a>
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
