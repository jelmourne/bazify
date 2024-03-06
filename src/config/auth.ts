import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_IN") {
    console.log(session);
    location.reload();
  } else if (event == "SIGNED_OUT") {
    console.log("signed out");
  }
});

export default supabase;
