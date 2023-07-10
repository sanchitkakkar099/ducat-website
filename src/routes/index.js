import { lazy } from "react";

// const CourseView = lazy(() => import("../components/courses/CourseView"));
// const CategoryView = lazy(() =>
//   import("../components/course-category/CategoryView")
// );
// const BatchView = lazy(() => import("../components/batch/BatchView"));
// const CenterView = lazy(() => import("../components/centers/CenterView"));
// const EnquiryView = lazy(() => import("../components/enquiry/EnquiryView"));
const Home = lazy(() => import("../components/Home"));
const Abouts = lazy(() => import("../components/Abouts"));
const CourseView = lazy(() => import("../components/Course/CourseView"));
const CategoryView = lazy(() => import("../components/Category/CategoryView"));
const Certificate = lazy(() => import("../components/Certificate"));
const Placement = lazy(() => import("../components/Placement"));
const BlogList = lazy(() => import("../components/Blog/BlogList"));
const BlogView = lazy(() => import("../components/Blog/BlogView"));
const ContactUs = lazy(() => import("../components/ContactUs"));

export const pageRoutes = [
  { path: "/", Component: Home },
  { path: "/abouts", Component: Abouts },
  { path: "/course/:id", Component: CourseView },
  { path: "/category/:slug", Component: CategoryView },
  { path: "/certificate", Component: Certificate },
  { path: "/placement", Component: Placement },
  { path: "/blog", Component: BlogList },
  { path: "/blog/:id", Component: BlogView },
  { path: "/contact-us", Component: ContactUs },
];
