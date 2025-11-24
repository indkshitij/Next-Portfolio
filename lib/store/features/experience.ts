import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExperience = createAsyncThunk(
  "experience/fetch",
  async () => {
    const {data} = await axios.get("/api/users/experience");
    return data.experiences;
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExperience.pending, (state) => {
      state.loading = true;
    });
    
    builder.addCase(fetchExperience.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    
    builder.addCase(fetchExperience.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to load experience";
    });
  },
});

export default experienceSlice.reducer;
