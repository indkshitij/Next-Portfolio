import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfileData = createAsyncThunk("profile/fetch", async () => {
  const {data} = await axios.get("/api/users/profile-info");
  return data.profileData;
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.loading = true;
    });
    
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to load profile data";
    });
  },
});

export default profileSlice.reducer;
