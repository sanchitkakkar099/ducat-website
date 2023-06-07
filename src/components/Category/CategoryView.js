import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Img8 from "../../assets/images/Frame (8).png";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllCenterDropdownQuery,
  useGetAllCourseDropdownQuery,
  useSubmitEnquiryMutation,
} from "../../service";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FormFeedback, Input } from "reactstrap";
import Select from "react-select";

function CategoryView() {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const viewData = location?.state?.categoryView;
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
    watch,
  } = useForm();

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
      reset();
      toast.success(resEnquiry?.data?.message, {
        position: "top-center",
      });
      reset();
    }
  }, [resEnquiry?.isSuccess]);

  return (
    <>
      <div className="bg-light-course">
        <div className="row" style={{ backgroundColor: "E8F7FF" }}>
          <div className="container">
            <div className="top-header d-flex top-header-singal">
              <div className="col-md-8 pr-5">
                <span className="d-flex " style={{ alignItems: "center" }}>
                  <img src={Img8} />
                  <p className="ml-3 mb-0" style={{ fontSize: "32px" }}>
                    {viewData?.name}
                  </p>
                </span>
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
                          value="submit "
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
      <div className="row">
        <div className="container py-md-5">
          <div className="col-md-12 py-5">
            <h2 className="text-left  h23 pb-5" style={{ fontWeight: "700" }}>
              Explore Courses
            </h2>
            <div className="box-outer-flex">
              {viewData?.course &&
              Array.isArray(viewData?.course) &&
              viewData?.course?.length > 0
                ? viewData?.course?.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="flex-box_1"
                        onClick={() => navigate(`/course/${el?._id}`)}
                      >
                        <p>{el?.title}</p>
                      </div>
                    );
                  })
                : "No Any Course Found"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryView;
