import { useState } from "react";
import { Provider, createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabase = createClient(
  "https://ubqykmqnzhmwtckkokjp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicXlrbXFuemhtd3Rja2tva2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4ODQ3OTEsImV4cCI6MjAyMzQ2MDc5MX0.1BWiJKM6RBv-mygUq7gcCWsRDx-ai5QkBOKyXfpTqBA"
);
function ProfilePage() {
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");

  //e871cda0-b17d-4e82-9bfa-05dd8b8a6f4c

  async function register() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: first + " " + last,
          phone: phone,
        },
      },
    });
    console.log(data);
    console.log(error);
  }

  async function auth(provider: Provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    console.log(data);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="test"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="test"
        onChange={(e) => {
          setlast(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="pass"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <button onClick={register}>Register</button>
      <button onClick={google}>facebook</button>
    </div>
  );
}

export default ProfilePage;

/*
{
    "user": {
        "id": "607c50dd-3aa7-4a28-b221-459656551a74",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "jelmourne@outlook.com",
        "phone": "",
        "confirmation_sent_at": "2024-02-16T04:11:54.888172316Z",
        "app_metadata": {
            "provider": "email",
            "providers": [
                "email"
            ]
        },
        "user_metadata": {},
        "identities": [
            {
                "identity_id": "442c8980-3011-4301-ba9f-ef4f8eddff4b",
                "id": "607c50dd-3aa7-4a28-b221-459656551a74",
                "user_id": "607c50dd-3aa7-4a28-b221-459656551a74",
                "identity_data": {
                    "email": "jelmourne@outlook.com",
                    "email_verified": false,
                    "phone_verified": false,
                    "sub": "607c50dd-3aa7-4a28-b221-459656551a74"
                },
                "provider": "email",
                "last_sign_in_at": "2024-02-16T04:11:54.886192445Z",
                "created_at": "2024-02-16T04:11:54.886242Z",
                "updated_at": "2024-02-16T04:11:54.886242Z",
                "email": "jelmourne@outlook.com"
            }
        ],
        "created_at": "2024-02-16T04:11:54.876175Z",
        "updated_at": "2024-02-16T04:11:55.676727Z"
    },
    "session": null
}

*/
