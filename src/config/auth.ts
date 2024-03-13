import { createClient } from "@supabase/supabase-js";
import { store } from "./store";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event == "SIGNED_IN") {
    store.dispatch({
      type: "session/set",
      payload: session?.user,
    });
  } else if (event == "SIGNED_OUT") {
    store.dispatch({ type: "session/clear" });
    location.reload();
  } else if (event == "INITIAL_SESSION") {
    store.dispatch({
      type: "session/set",
      payload: session?.user,
    });
  } else if (event == "TOKEN_REFRESHED") {
    console.log("Refreshed");
  }
});

export default supabase;
