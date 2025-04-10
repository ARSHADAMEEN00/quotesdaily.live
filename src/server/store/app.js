import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { get } from "../http";

// New thunk for v1/ayah/24/en.asad API
export const getQuotes = createAsyncThunk(
  "ayah/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get(`/v1/ayah/24/en.asad`);

      if (response?.code === 200) {
        return response?.data;
      }
      return rejectWithValue("Failed to fetch Ayah");
    } catch (error) {
      return rejectWithValue("An error occurred");
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,
    error: {},
    quotes: {}, // Add a new state for Ayah
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // New quotes cases
      .addCase(getQuotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appSlice.reducer;
