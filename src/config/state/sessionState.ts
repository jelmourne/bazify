import { createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "@supabase/supabase-js";
import supabase from "../auth";

interface sessionState {
  user: UserResponse | null;
}

const initialState: sessionState = {
  user: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    set: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    clear: (state) => {
      state.user = null;
    },
  },
});

export const { set, clear } = sessionSlice.actions;

export default sessionSlice.reducer;
