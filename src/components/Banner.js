import React from "react";
import SearchImg from "../assets/images/search.png";
import TophImg from "../assets/images/top_h.png";
import JavawImg from "../assets/images/javaw.png";
import PythonImg from "../assets/images/Pythonw.png";

function Banner() {
  return (
    <>
      <div className="row ">
        <div className="container">
          <div className="top-header d-flex pb-5">
            <div className="col-md-6">
              <p>
                Let us help you kick start your career and achieve your goals.{" "}
              </p>
              <div className="input-group">
                <div className="wrap">
                  <div className="search">
                    <input
                      type="text"
                      className="searchTerm"
                      placeholder="Search your favourite course today"
                    />
                    <button type="submit" className="searchButton">
                      <img src={SearchImg} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 top-im">
              <img src={TophImg} className="img-responsive" />
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
    </>
  );
}

export default Banner;
