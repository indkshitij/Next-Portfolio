import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const {data} = await axios.get("/api/users/projects");
  return data.projects;
});

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      
      builder.addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      
      builder.addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed loading projects";
      });
  },
});

export default projectSlice.reducer;
