import { Button } from "./ui/button";
import supabase from "@/config/auth";
import { Provider } from "@supabase/supabase-js";

interface AuthButtonProps {
  provider: string;
}

async function signInWithProvider(method: Provider) {
  await supabase.auth
    .signInWithOAuth({
      provider: method,
    })
    .catch((err) => {
      console.log(err);
    });
}

function AuthButton({ provider }: AuthButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-32"
      onClick={() => {
        signInWithProvider(provider.toLowerCase());
      }}
    >
      <img
        width={20}
        height={20}
        src={`../${provider.toLowerCase()}.svg`}
      ></img>
      {provider}
    </Button>
  );
}

export default AuthButton;
