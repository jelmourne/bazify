import { createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "@supabase/supabase-js";
import supabase from "../auth";

interface sessionState {
  user: UserResponse;
  session: any;
}

const initialState: sessionState = {
  user: (await supabase.auth.getUser()) || null,
  session: (await supabase.auth.getSession()) || null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    set: (state, action) => {
      const { user, session } = action.payload;
      state.user = user;
      state.session = session;
    },
  },
});

export const { set } = sessionSlice.actions;

export default sessionSlice.reducer;
