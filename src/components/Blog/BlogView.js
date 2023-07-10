import React, { useEffect } from 'react'
import ImageMaskGroup from '../../assets/images/ImageMaskGroup.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useBlogByIdQuery } from '../../service';
import { setBlogView } from '../../redux/blogSlice';
import DOMPurify from 'dompurify';


function BlogView() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewData = useSelector((state) => state.blogState.blogView);
  const resBlogById = useBlogByIdQuery(params.id);

  useEffect(() => {
    if (resBlogById?.isSuccess) {
      dispatch(setBlogView(resBlogById?.data?.data));
    }
  }, [resBlogById]);
  return (
   <div className="single_blog_page">
   <div className="container">
       <div className="row">
           <div className="col-lg-8">
               <div className="sing_blog_content">
                   <h3 className="b_card-heading">{viewData?.title}</h3>
                   <img src={viewData?.image?.filepath} className="w-100" alt=""/>
                   <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(viewData?.long_desc,{
                        ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                        ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                        RETURN_TRUSTED_TYPE: true
                        }),
                    }}
                    />
                   {/* <p className="b_text">Summer training programs are a great way for learners to gain practical knowledge and experience in their field of st udy. Obtaining practical experience rather than only theoretical knowledge has a lot of advantages whether you are in College or starting a new job. No matter what your educational background or the career you are pursuing, this 6 weeks of summer training can boost your career in your desired IT technology. Now you must be wondering what this Summer training is all about.</p>
                   <p className="b_text">In this blog you will get all the necessary knowledge regarding this 6 weeks of summer training and how it can benefit your career, what are the challenges faced by graduates in getting a desired job of their interest and how you can become skilled so that renowned and reputed companies seek you for their organisations.</p>
                   <h3 className="b_card-heading">What is this 6 weeks of Summer training all about?</h3>
                   <p className="b_text">This 6 weeks of summer training will not only help you in boosting your knowledge but also your skills and new updates in the latest technology. You will get hands-on training in various technologies like Java, Python, Digital marketing, Mern Stack, Advanced Excel, VBA, Oracle, Ethical Hacking, Cyber Security, .Net, PHP, SQT, Cloud, Autocad and many more as per your interest in these IT domains.</p>
                   <p className="b_text">Every learner will benefit from this 6 weeks summer training program as it allows practical Industrial exposure. This training is designed in such a way that learners can utilise their summer time or summer vacations in learning new concepts and technology from Industry experienced trainers.</p>
                   <p className="b_text">After the completion of this 6 weeks summer training program learners will be awarded course completion certificates which will help them while applying for jobs. After getting training from one of the best institutes like Ducat, here you will get a job opportunity after completion of 6 weeks summer training program through Ducat's campus placement drive and walk-in interviews.</p>
                   <h3 className="b_card-heading">Why this 6 weeks of summer training is best for your career?</h3>
                   <h3 className="b_card-heading">Opportunity to have a better career</h3>
                   <p className="b_text">The opportunity to learn practical skills and new technologies through summer training is one of the many benefits of this 6 weeks summer training program for learners. Technology is developing constantly, without experts learning all these trending and advanced technologies is difficult. Experts are qualified to instruct you in these updated new technologies and help you to understand and master them. Any questions or doubts the learners may have during the training can be swiftly answered by these experts. By mastering new advanced technologies which is the current demand of businesses across the world, you will get more job opportunities.</p>
                   <h3 className="b_card-heading">Leadership skills are improved via summer training</h3>
                   <p className="b_text">Summer training programs are designed to enhance interpersonal, teamwork, leadership, and communication skills. Showcasing and having this knowledge and learning is very important while looking for a job or working with multinational companies. You will master advanced technologies like Java, Python, Advanced Excel, digital marketing, Oracle,.Net, VBA, Ethical hacking, Cyber security and many more in this 6 weeks summer training program.</p>
                   <h3 className="b_card-heading">It opens the way to top companies</h3>
                   <p className="b_text">In this 6 weeks of summer training, learners have the best option to build a strong career foundation. You should enrol in this summer training program from a top and reputed institute, in this way you can get a better chance to boost your career. Obtaining certification from top reputable institutes like Ducat is very important as this certification holds a value which is essential for the way to top companies.</p>
                   <h3 className="b_card-heading">Theoretical knowledge is not sufficient.</h3>
                   <p className="b_text">Theoretical knowledge and having less or no practical experience cannot keep you updated with the newest technology that is flourishing in the market, as everyone is aware. Yet, you might benefit from summer training by learning about the most recent market trends. Your knowledge of upcoming technologies will increase after 6 weeks of training.</p>
                   <h3 className="b_card-heading">Summer training is all about competitive preparation</h3>
                   <p className="b_text">The 6 weeks of summer training is quite important for job searchers as this is the best opportunity they can avail themselves. This summer training program is beneficial for everybody who is interested in a successful career. During the learning journey learners can choose the latest technologies in which they have an interest or want to improve and learn in-demand skills. To advance their abilities in today's competitive environment, candidates must enrol in summer training programs.</p>
                   <p className="b_text">You can avail of these all benefits by enrolling in one of the best IT Institutes like Ducat where you will also get a job opportunity after completing 6 weeks summer training program through Ducat's campus placement drive and walk-in interviews.</p>
                   <h3 className="b_card-heading">Why Choose Ducat for this 6 weeks summer training program?</h3>
                   <p className="b_text">The Summer training program curriculum of Ducat is well-structured and covers a variety of topics. The trainers are experienced professionals who deliver hands-on training and guidance throughout the program.</p>
                   <p className="b_text">One of the highlights of this 6 weeks summer training program is the project work. Learners are provided with a real-world project to work on. This helps the learners to apply the knowledge they have gained and get a taste of what it's like to work on a real project.</p>
                   <p className="b_text">The training program also includes industry experts, which delivers insights into the latest trends and technologies in the latest technology. Learners also have the opportunity to interact with professionals from different companies, which helps them to understand the industry better. Apart from the technical knowledge, the program also helps to develop learners' soft skills.</p>
                   <p className="b_text">From the above information, you must have got an idea of how this 6 weeks summer training is the best opportunity to upskill yourself and get placed in top companies. Ducat's summer training is the best platform for students that create a strong foundation for an excellent career in the future. So stop wondering where and how to start summer training, enrol now in Ducat's 6 weeks summer training program and master the in-demand skills with 100% job assistance from Ducat's campus placement drive and walk-in interviews. For more information connect with Ducat at 70-70-90-50-90 or visit the Ducat Institute.</p> */}
               </div>
           </div>
           <div className="col-lg-4">
               <div className="card">
                   <div className="card-header"><h3 className="card-title">Related Blogs</h3></div>
                   <div className="card-body p-0">
                       <div className="list-catergory">
                           <div className="item-list">
                               <ul className="list-group mb-0">
                                   <li className="list-group-item">
                                       <a className="text-dark" href="#"><img src={ImageMaskGroup} className="w-100" alt=""/>Boost Your Career With Ducat’s 6 Weeks Of Summer Training</a>
                                   </li>
                                   <li className="list-group-item">
                                       <a className="text-dark" href="#"><img src={ImageMaskGroup} className="w-100" alt=""/>How 6 Weeks Of Summer Training Can Benefit Your Career</a>
                                   </li>
                                   <li className="list-group-item">
                                       <a className="text-dark" href="#"><img src={ImageMaskGroup} className="w-100" alt=""/>Boost Your Career With Ducat’s 6 Weeks Of Summer Training</a>
                                   </li>
                                   <li className="list-group-item">
                                       <a className="text-dark" href="#"><img src={ImageMaskGroup} className="w-100" alt=""/>How 6 Weeks Of Summer Training Can Benefit Your Career</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
  )
}

export default BlogView
