import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTechnology = createAsyncThunk(
  "technology/fetch",
  async () => {
    const { data } = await axios.get("/api/users/technology");
    return data.technologies;
  }
);

const technologySlice = createSlice({
  name: "technology",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTechnology.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTechnology.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchTechnology.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed loading technology";
    });
  },
});

export default technologySlice.reducer;
