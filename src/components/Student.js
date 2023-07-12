import React, { useDebugValue, useEffect } from "react";
import E1Img from "../assets/images/E1.png";
import { useDispatch, useSelector } from "react-redux";
import { useTestimonialListMutation } from "../service";
import { getTestimonial } from "../redux/testimonialSlice";

function Student() {
  const dispatch = useDispatch()
  const testimonialList = useSelector((state) => state.testimonialState.testimonialList);
  const [reqTestimonialData, resTestiminailData] = useTestimonialListMutation();
  useEffect(() => {
    reqTestimonialData({
      page: 1,
      limit: 10,
      search: "",
      status: "",
    });
  }, []);

  useEffect(() => {
    if (resTestiminailData?.isSuccess) {
      dispatch(getTestimonial(resTestiminailData?.data?.data?.docs));
    }
  }, [resTestiminailData]);

  return (
    <div className="row pb-3 py-5" style={{ backgroundColor: "#F6F6F6" }}>
      <div className="container py-5">
        <div className="col-md-12 post-outer">
          <div className="post-content">
            <div className="post-content-first">
              <h2 className="text-left pop1  h23">
                Hundreds of Happy Students
              </h2>
              <p>
                Several of them where asked how satisfied they are from our
                courses. Here are the statements
              </p>
              <a href="#" className="read-more-v">
                View All
              </a>
            </div>
          </div>
          {testimonialList &&
                    Array.isArray(testimonialList) &&
                    testimonialList?.length > 0 ? (
                      testimonialList?.map((cl, i) => {
                        return (
                          <div className="post-content" key={i}>
                            <div className="content-in">
                              <div className="post-news">
                              {cl?.image?.filepath &&
                                <img src={cl?.image?.filepath} alt="" className="hetchs1" />
                              }
                                <p>{cl?.name}</p>
                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                              </div>
                              <p className="post-description">
                                {cl?.message}
                              </p>
                              <a href="#" className="read-more-m">
                                Read more
                              </a>
                            </div>
                          </div>
                        )})): "No Testimonial Found" }
          
          <div className="post-content">
            <div className="content-in">
              <div className="post-news">
                <img src={E1Img} alt="" className="hetchs1" />
                <p>Rakesh Jaiswal</p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
              <p className="post-description">
                Awesome learning experience of digital marketing with full
                practical exposure at Mohan Nagar branch. Have good way of
                teaching practically by shasank sir on live project.
              </p>
              <a href="#" className="read-more-m">
                Read more
              </a>
            </div>
          </div>
          <div className="post-content">
            <div className="content-in">
              <div className="post-news">
                <img src={E1Img} alt="" className="hetchs1" />
                <p>Rakesh Jaiswal</p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
              <p className="post-description">
                Awesome learning experience of digital marketing with full
                practical exposure at Mohan Nagar branch. Have good way of
                teaching practically by shasank sir on live project.
              </p>
              <a href="#" className="read-more-m">
                Read more
              </a>
            </div>
          </div>
          <div className="post-content">
            <div className="content-in">
              <div className="post-news">
                <img src={E1Img} alt="" className="hetchs1" />
                <p>Rakesh Jaiswal</p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
              <p className="post-description">
                Awesome learning experience of digital marketing with full
                practical exposure at Mohan Nagar branch. Have good way of
                teaching practically by shasank sir on live project.
              </p>
              <a href="#" className="read-more-m">
                Read more
              </a>
            </div>
          </div>
          <div className="post-content">
            <div className="content-in">
              <div className="post-news">
                <img src={E1Img} alt="" className="hetchs1" />
                <p>Rakesh Jaiswal</p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
              <p className="post-description">
                Awesome learning experience of digital marketing with full
                practical exposure at Mohan Nagar branch. Have good way of
                teaching practically by shasank sir on live project.
              </p>
              <a href="#" className="read-more-m">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
