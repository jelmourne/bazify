import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginForm() {
  return (
    <form className="w-full">
      <Input placeholder="shadcn" type="email" />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default LoginForm;
