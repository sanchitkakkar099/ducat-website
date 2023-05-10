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

export const pageRoutes = [
  { path: "/", Component: Home },
  { path: "/abouts", Component: Abouts },
  { path: "/course/:id", Component: CourseView },
  { path: "/course-category/:id", Component: CategoryView },
];
