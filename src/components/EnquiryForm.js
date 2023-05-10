import React from "react";

function EnquiryForm() {
  return (
    <div className="row" style={{ backgroundColor: "#285999" }}>
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="form h-100">
            <form
              className=""
              method="post"
              id="contactForm"
              name="contactForm"
            >
              <div className="row">
                <div className="col-md-2 form-group ">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="col-md-2 form-group ">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-md-2 form-group ">
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    id="phone number"
                    placeholder="Enter Contact Number"
                  />
                </div>

                <div className="col-md-2 form-group ">
                  <select className="custom-select" id="budget" name="budget">
                    <option selected>Select a Course</option>
                    <option value="$1000 below">java</option>
                    <option value="$2,000 - $5,000">Python</option>
                    <option value="$5,000 - $15,000">Digital Marketing</option>
                    <option value="$15,000 - $25,000">Graphic Desginer </option>
                  </select>
                </div>
                <div className="col-md-2 form-group ">
                  <select className="custom-select" id="budget" name="budget">
                    <option selected>Select Branch</option>
                    <option value="$1000 below">Branch 1</option>
                    <option value="$2,000 - $5,000">Branch 2</option>
                    <option value="$5,000 - $15,000">Branch 3</option>
                    <option value="$15,000 - $25,000">Branch 4</option>
                    <option value="$25,000 >">Branch 5</option>
                  </select>
                </div>

                <div className="col-md-2 form-group">
                  <input
                    type="submit"
                    value="submit"
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
  );
}

export default EnquiryForm;
