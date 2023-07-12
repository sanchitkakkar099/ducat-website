import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URL
    : "/api";
export const courseApi = createApi({
  tagTypes: ["course"],
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    courseList: builder.mutation({
      query: (payload) => ({
        url: "course/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["course"],
    }),
    getAllCourseDropdown: builder.query({
      query: () => ({
        url: "course/dropdown",
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    getCategoryCourseDropdown: builder.query({
      query: () => ({
        url: "course/category/home/list",
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    courseById: builder.query({
      query: (id) => ({
        url: `course/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    relatedCourseByCategoryId: builder.mutation({
      query: (payload) => ({
        url: "course/list/relatedcategory",
        method: "POST",
        body: payload,
      }),
      providesTags: ["course"],
    }),
  }),
});
export const {
  useCourseListMutation,
  useGetAllCourseDropdownQuery,
  useGetCategoryCourseDropdownQuery,
  useCourseByIdQuery,
  useRelatedCourseByCategoryIdMutation,
} = courseApi;

export const categoryApi = createApi({
  tagTypes: ["category"],
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    categoryList: builder.mutation({
      query: (payload) => ({
        url: "course/category/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["category"],
    }),
    homeCategoryList: builder.mutation({
      query: (payload) => ({
        url: "course/category/drop/down/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["category"],
    }),
    getAllCategoryDropdown: builder.query({
      query: () => ({
        url: "course/category/dropdown",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    categoryById: builder.query({
      query: (id) => ({
        url: `course/category/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});
export const {
  useCategoryListMutation,
  useHomeCategoryListMutation,
  useGetAllCategoryDropdownQuery,
  useCategoryByIdQuery,
} = categoryApi;

export const centerApi = createApi({
  tagTypes: ["center"],
  reducerPath: "centerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    centerList: builder.mutation({
      query: (payload) => ({
        url: "center/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["center"],
    }),
    getAllCenterDropdown: builder.query({
      query: () => ({
        url: "center/dropdown",
        method: "GET",
      }),
      providesTags: ["center"],
    }),
    centerById: builder.query({
      query: (id) => ({
        url: `center/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["center"],
    }),
  }),
});
export const {
  useCenterListMutation,
  useGetAllCenterDropdownQuery,
  useCenterByIdQuery,
} = centerApi;

export const batchApi = createApi({
  tagTypes: ["batch"],
  reducerPath: "batchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    batchList: builder.mutation({
      query: (payload) => ({
        url: "batch/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["batch"],
    }),
    batchById: builder.query({
      query: (id) => ({
        url: `batch/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["batch"],
    }),
  }),
});
export const { useBatchListMutation, useBatchByIdQuery } = batchApi;

export const enquiryApi = createApi({
  tagTypes: ["enquiry"],
  reducerPath: "enquiryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    submitEnquiry: builder.mutation({
      query: (payload) => ({
        url: "enquiry",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["enquiry"],
    }),
  }),
});

export const { useSubmitEnquiryMutation } = enquiryApi;

export const clientApi = createApi({
  tagTypes: ["client"],
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    clientList: builder.mutation({
      query: (payload) => ({
        url: "client/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["client"],
    }),
  }),
});
export const {
  useClientListMutation,
} = clientApi;

export const aboutUsApi = createApi({
  tagTypes: ["aboutUs"],
  reducerPath: "aboutUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    fetchAboutUs: builder.query({
      query: (payload) => ({
        url: "appsetting/aboutUs",
        method: "GET",
      }),
      providesTags: ["aboutUs"],
    }),
  }),
});
export const {
  useFetchAboutUsQuery,
} = aboutUsApi;

export const certificateApi = createApi({
  tagTypes: ["certificate"],
  reducerPath: "certificateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    certificateList: builder.mutation({
      query: (payload) => ({
        url: "certificate/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["certificate"],
    }),
    submitCertificate: builder.mutation({
      query: (payload) => ({
        url: "certificate",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["certificate"],
    }),
    certificateById: builder.query({
      query: (id) => ({
        url: `certificate/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["certificate"],
    }),
    deleteCertificate: builder.mutation({
      query: (id) => ({
        url: `certificate/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["certificate"],
    }),
    downloadCertificateCsv: builder.mutation({
      query: (payload) => ({
        url: "certificate/csv",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["certificate"],
    }),
  }),
});
export const {
  useCertificateListMutation,
  useSubmitCertificateMutation,
  useCertificateByIdQuery,
  useDeleteCertificateMutation,
  useDownloadCertificateCsvMutation,
} = certificateApi;

export const blogApi = createApi({
  tagTypes: ["blog","blog-category"],
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    blogList: builder.mutation({
      query: (payload) => ({
        url: "blog/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["blog"],
    }),
    blogById: builder.query({
      query: (id) => ({
        url: `blog/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    blogCategoryList: builder.mutation({
      query: (payload) => ({
        url: "blog/category/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["blog-category"],
    }),
    blogCategoryById: builder.query({
      query: (id) => ({
        url: `blog/category/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["blog-category"],
    }),
  }),
});
export const {
  useBlogListMutation,
  useBlogByIdQuery,
  useBlogCategoryListMutation,
  useBlogCategoryByIdQuery,
} = blogApi;

export const contactUsApi = createApi({
  tagTypes: ["contactUs"],
  reducerPath: "contactUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    submitContactUs: builder.mutation({
      query: (payload) => ({
        url: "contactUs",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["contactUs"],
    }),
    
  }),
});
export const {
  useSubmitContactUsMutation,
} = contactUsApi;

export const testimonialApi = createApi({
  tagTypes: ["testimonial"],
  reducerPath: "testimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (builder) => ({
    testimonialList: builder.mutation({
      query: (payload) => ({
        url: "testimonial/list",
        method: "POST",
        body: payload,
      }),
      providesTags: ["testimonial"],
    }),
    testimonialById: builder.query({
      query: (id) => ({
        url: `testimonial/byid/${id}`,
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),
  }),
});
export const {
  useTestimonialListMutation,
  useTestimonialByIdQuery,
} = testimonialApi;
