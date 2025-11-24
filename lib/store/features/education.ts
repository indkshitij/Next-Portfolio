// features/education.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEducation = createAsyncThunk("education/fetch", async () => {
  const { data } = await axios.get("/api/users/education");
  return data.educations;
});

const educationSlice = createSlice({
  name: "education",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed fetching education";
      });
  },
});

export default educationSlice.reducer;
