import { createSlice } from "@reduxjs/toolkit";

const initState = {
  blogList: [],
  blogView: null,
  blogCategoryList: [],
  blogCategoryView: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: initState,
  reducers: {
    getBlog: (state, { payload }) => {
      state.blogList = payload;
    },
    setBlogView: (state, { payload }) => {
      state.blogView = payload;
    },
    getBlogCategory: (state, { payload }) => {
        state.blogCategoryList = payload;
      },
      setBlogCategoryView: (state, { payload }) => {
        state.blogCategoryView = payload;
      },

  },
});

export const { getBlog, setBlogView,
getBlogCategory,setBlogCategoryView
} =
  blogSlice.actions;
export default blogSlice.reducer;
