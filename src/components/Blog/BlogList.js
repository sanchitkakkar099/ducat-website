import React, { useEffect } from 'react'
import BlogBanner from '../../assets/images/blog-banner.png'
import ImageMaskGroup from '../../assets/images/ImageMaskGroup.png'
import Info from '../../assets/images/Info.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogCategoryListMutation, useBlogListMutation } from '../../service'
import { getBlog, getBlogCategory } from '../../redux/blogSlice'
import { useDispatch, useSelector } from 'react-redux'
import DOMPurify from 'dompurify'

function BlogList() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const blogCategoryList = useSelector((state) => state.blogState.blogCategoryList);
  const blogList = useSelector((state) => state.blogState.blogList);
  const [reqBlogData, resBlogData] = useBlogListMutation();
  const [reqBlogCategoryData, resBlogCategoryData] = useBlogCategoryListMutation();

  useEffect(() => {
    reqBlogCategoryData({
      page: 1,
      limit: 10,
      search: "",
      status: "",
    });
  }, []);

  useEffect(() => {
    if (resBlogCategoryData?.isSuccess) {
      dispatch(getBlogCategory(resBlogCategoryData?.data?.data?.docs));
    }
  }, [resBlogCategoryData]);

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

  const filterByCategory = (bcid) => {
    console.log('bcid',bcid);
  }
  return (
    <div>
      <div className="blog_banner">
    <img className="w-100" src={BlogBanner} width="auto" height="auto" alt=""/>
   </div>
   <h4 className="blog-heading">Filter by Interest category</h4>
   <div className="container">
    <div className="filter_button d-flex align-items-center flex-wrap">
    {blogCategoryList &&
                    Array.isArray(blogCategoryList) &&
                    blogCategoryList?.length > 0 ? (
                      blogCategoryList?.map((cl, i) => {
                        return (
                        <button 
                          onClick={() => filterByCategory(cl?._id)}
                          className="blog_filter_btn"
                          key={i}>{cl?.title} 
                          (<span>2</span>)
                         </button>
                      
                        )}
                      )) : '' }
        {/* <button className="blog_filter_btn action">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
        <button className="blog_filter_btn">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
        <button className="blog_filter_btn">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button>
        <button className="blog_filter_btn">Java (<span>2</span>)</button>
        <button className="blog_filter_btn">Phython (<span>1</span>)</button> */}
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
                                  <p className="blog-description"
                                    dangerouslySetInnerHTML={{
                                      __html: DOMPurify.sanitize(bg?.short_desc || '' , {
                                        ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                                        ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                                        RETURN_TRUSTED_TYPE: true
                                      }),
                                    }}
                                  />
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
