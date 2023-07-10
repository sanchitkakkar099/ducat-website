import React, { useEffect } from 'react'
import BlogBanner from '../../assets/images/blog-banner.png'
import ImageMaskGroup from '../../assets/images/ImageMaskGroup.png'
import Info from '../../assets/images/Info.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogListMutation } from '../../service'
import { getBlog } from '../../redux/blogSlice'
import { useDispatch, useSelector } from 'react-redux'

function BlogList() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogState.blogList);
  const [reqBlogData, resBlogData] = useBlogListMutation();

  useEffect(() => {
    reqBlogData({
      page: 1,
      limit: 10,
      search: "",
      status: "",
    });
  }, []);

  useEffect(() => {
    if (resBlogData?.isSuccess) {
      dispatch(getBlog(resBlogData?.data?.data?.docs));
    }
  }, [resBlogData]);
  return (
    <div>
      <div className="blog_banner">
    <img className="w-100" src={BlogBanner} width="auto" height="auto" alt=""/>
   </div>
   <h4 className="blog-heading">Filter by Interest category</h4>
   <div className="container">
    <div className="filter_button d-flex align-items-center flex-wrap">
        <button className="blog_filter_btn action">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
        <button className="blog_filter_btn">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
        <button className="blog_filter_btn">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
        <button className="blog_filter_btn">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
    </div>
    <div className="blog_sec">
        <div className="row">
        {blogList &&
                    Array.isArray(blogList) &&
                    blogList?.length > 0 ? (
                      blogList?.map((bg, i) => {
                        return (
                          <div className="col-sm-6 col-md-4" key={i}>
                              <Link to={`/blog/${bg?._id}`} className="blog_content">
                                  <img src={bg?.image?.filepath} className="w-100"  width="auto" height="auto" alt=""/>
                                  <div className="blog-title">{bg?.title}</div>
                                  <p className="blog-description">{bg?.short_description}</p>
                                  <p className="rd-more d-flex align-items-center" onClick={() => navigate(`/blog/${bg?._id}`)}>Read More <img src={Info} alt=""/></p>
                              </Link>
                          </div>
                        )})):'No Blog Found'}
            
        </div>
    </div>
   </div>
    </div>
  )
}

export default BlogList
