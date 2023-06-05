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
  }),
});
export const {
  useCourseListMutation,
  useGetAllCourseDropdownQuery,
  useGetCategoryCourseDropdownQuery,
  useCourseByIdQuery,
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
