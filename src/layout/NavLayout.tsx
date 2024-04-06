import { Link } from "react-router-dom";
import NavSearch from "../components/NavSearch";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "@/components/forms/LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "@/components/forms/RegisterForm";
import AuthButton from "@/components/AuthButton";
import NavButton from "@/components/NavButton";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store";

function NavLayout() {
  const user = useSelector((state: RootState) => state.session.user);
  return (
    <>
      <nav className="p-3 bg-neutral-800">
        <ul className="flex justify-between flex-wrap lg:flex-nowrap items-center">
          <li className="text-3xl me-3 lg:w-1/3  text-white ">
            <Link to={"/"}>
              <img
                src="../bazify-logo.svg"
                className="h-12 active:scale-95"
              ></img>
            </Link>
          </li>
          <li className="flex justify-center order-3 lg:order-2 lg:w-1/3 w-full m-1 items-center">
            <NavSearch />
          </li>
          <li className="flex justify-end order-2 lg:w-1/3 w-2/3 gap-3 items-center me-1">
            {user ? (
              <NavButton name="Profile" img="profile" user={user} />
            ) : (
              <Dialog>
                <DialogTrigger className="select-none flex justify-center text-white text-md gap-2 active:scale-95 transition-all items-center bg-neutral-900 p-2 outline-none h-11 rounded-lg hover:bg-neutral-700">
                  Login
                  <img
                    className="fiter invert-[95%] active:scale-95"
                    src="../profile.svg"
                  ></img>
                </DialogTrigger>
                <DialogContent>
                  <Tabs
                    defaultValue="login"
                    className="flex flex-col items-center"
                  >
                    <TabsList className="w-fit flex justify-center">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="register">Resgister</TabsTrigger>
                    </TabsList>
                    <div className="flex justify-center gap-5 m-5">
                      <AuthButton provider="Google" />
                      <AuthButton provider="Facebook" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <TabsContent value="login" className="w-full p-5">
                      <LoginForm />
                    </TabsContent>
                    <TabsContent value="register" className="w-full p-5">
                      <RegisterForm />
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            )}
            <NavButton name="Orders" img="order" link="/orders" />
            <NavButton img="bag" link="/cart" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavLayout;
