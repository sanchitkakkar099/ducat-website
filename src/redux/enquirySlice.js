import { createSlice } from "@reduxjs/toolkit";

const initState = {
  enquiryList: [],
  enquiryView: null,
};

export const enquirySlice = createSlice({
  name: "enquiry",
  initialState: initState,
  reducers: {
    getEnquiry: (state, { payload }) => {
      state.enquiryList = payload;
    },
    setEnquiryView: (state, { payload }) => {
      state.enquiryView = payload;
    },
  },
});

export const { getEnquiry, setEnquiryView } = enquirySlice.actions;
export default enquirySlice.reducer;
