import { createSlice } from "@reduxjs/toolkit";

const initState = {
  courselist: [],
  courseView: null,
  courseDropdown: [],
  categoryCourseDropdown: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState: initState,
  reducers: {
    getCourse: (state, { payload }) => {
      state.courselist = payload;
    },
    setCourseView: (state, { payload }) => {
      state.courseView = payload;
    },
    setCourseDropDown: (state, { payload }) => {
      state.courseDropdown = payload;
    },
    setCategoryCourseDropDown: (state, { payload }) => {
      state.categoryCourseDropdown = payload;
    },
  },
});

export const {
  getCourse,
  setCourseView,
  setCourseDropDown,
  setCategoryCourseDropDown,
} = courseSlice.actions;
export default courseSlice.reducer;
