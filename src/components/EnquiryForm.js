import React, { useEffect } from "react";
import {
  useGetAllCenterDropdownQuery,
  useGetAllCourseDropdownQuery,
  useSubmitEnquiryMutation,
} from "../service";
import { Controller, useForm } from "react-hook-form";
import { setCourseDropDown } from "../redux/courseSlice";
import { setCenterDropDown } from "../redux/centerSlice";
import { useDispatch, useSelector } from "react-redux";
import { FormFeedback, Input } from "reactstrap";
import Select from "react-select";
import { toast } from "react-hot-toast";

function EnquiryForm() {
  const dispatch = useDispatch();
  const courseDropdown = useSelector(
    (state) => state.courseState.courseDropdown
  );
  const centerDropdown = useSelector(
    (state) => state.centerState.centerDropdown
  );
  const [reqEnquiry, resEnquiry] = useSubmitEnquiryMutation();
  const resCourseDropdown = useGetAllCourseDropdownQuery();
  const resCenterDropdown = useGetAllCenterDropdownQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
      status: state?.status?.value,
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
    }
    reset({});
  }, [resEnquiry?.isSuccess]);

  return (
    <div className="row" style={{ backgroundColor: "#285999" }}>
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="form h-100">
            <form
              className="home_contact"
              method="post"
              id="contactForm"
              name="contactForm"
              onSubmit={handleSubmit(onNext)}
            >
              <div className="row">
                <div className="col-md-2 form-group ">
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
                <div className="col-md-2 form-group ">
                  <Controller
                    id="email"
                    name="email"
                    className="form-control"
                    control={control}
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
                <div className="col-md-2 form-group ">
                  <Controller
                    id="phone"
                    name="phone"
                    className="form-control"
                    control={control}
                    rules={{ required: "Phone Number is required" }}
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

                <div className="col-md-2 form-group ">
                  {/* <select className="custom-select" id="budget" name="budget">
                    <option selected>Select a Course</option>
                    <option value="$1000 below">java</option>
                    <option value="$2,000 - $5,000">Python</option>
                    <option value="$5,000 - $15,000">Digital Marketing</option>
                    <option value="$15,000 - $25,000">Graphic Desginer </option>
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
                      />
                    )}
                  />
                  {errors.course && (
                    <FormFeedback>{errors?.course?.message}</FormFeedback>
                  )}
                </div>
                <div className="col-md-2 form-group ">
                  {/* <select className="custom-select" id="budget" name="budget">
                    <option selected>Select Branch</option>
                    <option value="$1000 below">Branch 1</option>
                    <option value="$2,000 - $5,000">Branch 2</option>
                    <option value="$5,000 - $15,000">Branch 3</option>
                    <option value="$15,000 - $25,000">Branch 4</option>
                    <option value="$25,000 >">Branch 5</option>
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
                      />
                    )}
                  />
                  {errors.center && (
                    <FormFeedback>{errors?.center?.message}</FormFeedback>
                  )}
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
