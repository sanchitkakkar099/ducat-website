import React, { useEffect } from "react";
import ContactUsImage from '../assets/images/context-us.jpeg'
import { useCenterListMutation, useGetAllCenterDropdownQuery, useGetAllCourseDropdownQuery, useSubmitContactUsMutation } from "../service";
import { getBatch } from "../redux/batchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCenter, setCenterDropDown } from "../redux/centerSlice";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { setCourseDropDown } from "../redux/courseSlice";
import { Col, FormFeedback, Input, Label } from "reactstrap";
import Select from "react-select";

function ContactUs() {
  const dispatch = useDispatch()
  const centerList = useSelector((state) => state.centerState.centerList);
  const [reqCenterData, resCenterData] = useCenterListMutation();
  const [reqContactUs, resContactUs] = useSubmitContactUsMutation();
  const courseDropdown = useSelector(
    (state) => state.courseState.courseDropdown
  );
  const centerDropdown = useSelector(
    (state) => state.centerState.centerDropdown
  );
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
    reqContactUs({
      ...state,
      status: 'Pending',
      course: state?.course?.value,
      center: state?.center?.value,
    });
  };

  useEffect(() => {
    if (resContactUs?.isSuccess) {
      toast.success(resContactUs?.data?.message, {
        position: "top-center",
      });
      reset({})
    }
  }, [resContactUs?.isSuccess]);

  useEffect(() => {
    reqCenterData({
      page: 1,
      limit: 10,
      search: "",
      status: "",
    });
  }, []);

  useEffect(() => {
    if (resCenterData?.isSuccess) {
      dispatch(getCenter(resCenterData?.data?.data?.docs));
    }
  }, [resCenterData]);

  return (
    <div className="contect_banner">
      <img src={ContactUsImage} className="w-100" width="auto" height="auto" alt=""/>
      <div className="contect-form">
         <div className="container">
            <div className="form-contect">
               <h2 className="context-heading">Connect with US</h2>
               <p className="desc-contect">For further questions, including partnership opportunities, please email mail to: info@ducatindia.com or contact using our contact form.</p>
               <form onSubmit={handleSubmit(onNext)}>
                  <div className="form-row mt-4">
                     {/* <div className="form-group col-md-6">
                        <label for="inputName">Full Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Full Name"/>
                     </div> */}
                     <Col md="6" className="form-group">
                      <Label className="form-label" for="name">
                        Full Name
                      </Label>
                      <Controller
                        id="name"
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field }) => <Input placeholder="Name" {...field} />}
                      />
                      {errors?.name && (
                        <FormFeedback>{errors?.name?.message}</FormFeedback>
                      )}
                    </Col>
                     {/* <div className="form-group col-md-6">
                        <label for="inputEmail">Password</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="hello@creative-tim.com"/>
                     </div> */}
                     <Col md="6" className="form-group">
                      <Label className="form-label" for="email">
                        Email
                      </Label>
                      <Controller
                        id="email"
                        name="email"
                        control={control}
                        rules={{ required: "Email is required" }}
                        render={({ field }) => <Input type="email" placeholder="Name" {...field} />}
                      />
                      {errors?.email && (
                        <FormFeedback>{errors?.email?.message}</FormFeedback>
                      )}
                    </Col>
                  </div>
                  <div className="form-row mt-4">
                     {/* <div className="form-group col-md-6">
                        <label for="inputContact">Contact Number</label>
                        <input type="number" className="form-control" id="inputContact" placeholder="+91-9999****"/>
                     </div> */}
                     <Col md="6" className="form-group">
                      <Label className="form-label" for="phone">
                      Contact Number
                      </Label>
                      <Controller
                        id="phone"
                        name="phone"
                        control={control}
                        rules={{ required: "Contact Number is required" }}
                        render={({ field }) => (
                          <Input type="number" placeholder="Contact Number" {...field} />
                        )}
                      />
                      {errors?.phone && (
                        <FormFeedback>{errors?.phone?.message}</FormFeedback>
                      )}
                    </Col>
                     {/* <div className="form-group col-md-6">
                        <label for="inputState">Course</label>
                        <select id="inputState" className="form-control">
                          <option selected>Select a course</option>
                          <option>...</option>
                        </select>
                     </div> */}
                     <Col md="6" className="form-group">
                      <Label for="course">Course</Label>
                      <Controller
                        id="course"
                        name="course"
                        control={control}
                        rules={{ required: "Course is required" }}
                        render={({ field: { onChange, value } }) => (
                          <Select
                            isClearable
                            options={courseDropdown || []}
                            className="form-control react-select"
                            classNamePrefix="select"
                            onChange={onChange}
                            value={value ? value : null}
                          />
                        )}
                      />
                      {errors.course && (
                        <FormFeedback>{errors?.course?.message}</FormFeedback>
                      )}
                    </Col>
                  </div>
                  {/* <div className="form-group mt-4">
                     <label for="inputBranch">Branch</label>
                     <input type="text" className="form-control" id="inputBranch" placeholder="Noida.. "/>
                  </div> */}
                  {/* <div className="form-group mt-4">
                     <label for="exampleFormControlTextarea1">How can we help you?</label>
                     <textarea className="form-control" placeholder="Describe your problem in at least 250 characters" id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div> */}
                  <Col className="form-group mt-4">
                    <Label for="center">Branch</Label>
                    <Controller
                      id="center"
                      name="center"
                      control={control}
                      rules={{ required: "Branch is required" }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          isClearable
                          options={centerDropdown || []}
                          className="form-control react-select"
                          classNamePrefix="select"
                          onChange={onChange}
                          value={value ? value : null}
                        />
                      )}
                    />
                    {errors.center && (
                      <FormFeedback>{errors?.center?.message}</FormFeedback>
                    )}
                  </Col>
                  <Col  className="form-group mt-4">
                    <Label className="form-label" for="Message">
                      How can we help you?
                    </Label>
                    <Controller
                      id="message"
                      name="message"
                      control={control}
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <Input type="textarea" className="form-control" placeholder="Message" {...field} />
                      )}
                    />
                    {errors?.message && (
                      <FormFeedback>{errors?.message?.message}</FormFeedback>
                    )}
                  </Col>
                  <button  type="submit" className="send_btn">SEND MESSAGE</button>
               </form>
            </div>
            <div className="contect_info">
               <h2 className="contect_heading">Our Branches</h2>
               <div className="row">
               {(Array.isArray(centerList) && centerList?.length > 0) ? (
                      centerList?.map((bh, i) => {
                        return (
                          <div className="col-md-6">
                            <div className="contact-col">
                                <div className="context-heading">{bh?.title}</div>
                                <p>Phone : <span>{bh?.phone}</span></p>
                                <p>Email : {bh?.email}</p>
                                <p>Address : {bh?.address}</p>
                            </div>
                          </div>
                        )}))
                  :"No Branches Found"}
            </div>
            </div>
         </div>
      </div>
   </div>
  );
}

export default ContactUs;
