import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUserdata";

const usersSlice = createSlice({
  name: "userSList",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
//   reducers: {},
  extraReducer(builder) {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data=action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
        state.isLoading=false;
        state.error=action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
