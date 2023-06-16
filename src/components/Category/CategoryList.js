import React, { Fragment, useEffect } from "react";
import Img8 from "../../assets/images/Frame (8).png";
import Img9 from "../../assets/images/Frame (9).png";
import Img10 from "../../assets/images/Frame (10).png";
import Img15 from "../../assets/images/Group (15).png";
import Img12 from "../../assets/images/Frame (12).png";
import Img11 from "../../assets/images/Frame (11).png";
import SlideImg14 from "../../assets/images/image14.png";
import SlideImg15 from "../../assets/images/image15.png";
import SlideImg16 from "../../assets/images/image16.png";
import SlideImg17 from "../../assets/images/image17.png";
import SlideImg18 from "../../assets/images/image18.png";
import SlideImg19 from "../../assets/images/image19.png";
import OwlCarousel from "react-owl-carousel";
import {
  useCategoryListMutation,
  useHomeCategoryListMutation,
} from "../../service";
import { getCategory } from "../../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CategoryList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryList = useSelector((state) => state.categoryState.categoryList);
  const [reqCategoryList, resCategoryList] = useHomeCategoryListMutation();
  console.log("categoryList", categoryList);

  useEffect(() => {
    reqCategoryList({
      page: 1,
      limit: 10,
      search: "",
      status: "Active",
    });
  }, []);

  useEffect(() => {
    if (resCategoryList?.isSuccess) {
      dispatch(getCategory(resCategoryList?.data?.data?.docs));
      // setPageCount(resCategoryData?.data?.data?.totalDocs);
    }
  }, [resCategoryList]);

  const options = {
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    items: 6,
    navContainerClass: "owl-controls clickable",
    controlsClass: "owl-buttons",
    loop: true,
  };

  const navToCategoryView = (e, category) => {
    e.preventDefault();
    navigate(`/category/${category?.name}`, {
      state: {
        categoryView: category,
      },
    });
  };
  return (
    <Fragment>
      <div className="row py-5 ">
        <div className="container pb-5">
          <div className="col-md-12">
            <h2
              className="md-text-center pt-5  h23 our-h2"
              style={{ fontWeight: 600 }}
            >
              Explore our course categories{" "}
              {/* <span>
                <a href="#">View All</a>
              </span> */}
            </h2>
            <div className="box-outer pt-5">
              {categoryList &&
              Array.isArray(categoryList) &&
              categoryList?.length > 0 ? (
                categoryList?.map((cd, i) => {
                  return (
                    <div
                      key={i}
                      className="box"
                      onClick={(e) => navToCategoryView(e, cd)}
                    >
                      <img src={cd?.logo?.filepath} />
                      <p>{cd?.name}</p>
                    </div>
                  );
                })
              ) : (
                <p className="not_found">No Cetgory Found</p>
              )}
            </div>
            {/* <div className="box-outer pt-5">
              <div className="box">
                <img src={Img8} />
                <p>java</p>
              </div>
              <div className="box">
                <img src={Img9} />
                <p>Python</p>
              </div>
              <div className="box">
                <img src={Img10} />
                <p>Software Testing</p>
              </div>
              <div className="box">
                <img src={Img15} />
                <p>CAD Training</p>
              </div>
              <div className="box">
                <img src={Img12} />
                <p>Network & Security</p>
              </div>
              <div className="box">
                <img src={Img11} />
                <p>Microsoft Dynamic</p>
              </div>
            </div>
            <div className="btn_outer">
              <a href="#">Explore more courses</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row  pt-5 pb-5">
        <div className="container pb-3">
          <div className="col-md-12">
            <h2 className="text-center  h23" style={{ fontWeight: 700 }}>
              Our Learners Work At
            </h2>
            <p className="text-center">
              Ducat learners work at some of the leading and innovative
              organizations of today,
              <br /> solving core business problems.
            </p>
            <OwlCarousel
              className="owl-carousel  carousel_logo owl-theme"
              {...options}
            >
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg14} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg15} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg16} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg17} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg18} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg19} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg14} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg15} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg16} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg17} alt="" className="hetchs" />
                </div>
              </div>
              <div className="post-slide">
                <div className="post-content">
                  <img src={SlideImg18} alt="" className="hetchs" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryList;
