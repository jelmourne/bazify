import { createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

interface sessionState {
  user: User | null;
}

const initialState: sessionState = {
  user: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    set: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    clear: (state) => {
      state.user = null;
    },
  },
});

export const { set, clear } = sessionSlice.actions;

export default sessionSlice.reducer;
