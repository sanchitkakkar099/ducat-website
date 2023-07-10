import { createSlice } from "@reduxjs/toolkit";

const initState = {
  certificateList: [],
  certificateView: null,
  certificateEdit: null,
};

export const certificateSlice = createSlice({
  name: "certificate",
  initialState: initState,
  reducers: {
    getCertificate: (state, { payload }) => {
      state.certificateList = payload;
    },
    setCertificateView: (state, { payload }) => {
      state.certificateView = payload;
    },
    setCertificateEdit: (state, { payload }) => {
      state.certificateEdit = payload;
    },
  },
});

export const { getCertificate, setCertificateView, setCertificateEdit } = certificateSlice.actions;
export default certificateSlice.reducer;
