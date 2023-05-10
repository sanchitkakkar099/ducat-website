import React, { Fragment } from "react";
import Banner from "./Banner";
import CourseList from "../components/Course/CourseList";
import CategoryList from "../components/Category/CategoryList";
import BatchList from "./Batch/BatchList";
import OurPartner from "./OurPartner";
import Student from "./Student";
import EnquiryForm from "./EnquiryForm";

function Home() {
  return (
    <Fragment>
      <Banner />
      <EnquiryForm />
      <CategoryList />
      <BatchList />
      <Student />
      <CourseList />
      <OurPartner />
    </Fragment>
  );
}

export default Home;
