import { Link } from "react-router-dom";
import NavSearch from "../components/NavSearch";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavButton from "@/components/NavButton";
import LoginForm from "@/components/forms/LoginForm";

function NavLayout() {
  return (
    <>
      <nav className="p-3 bg-neutral-800 w-full">
        <ul className="flex justify-between flex-wrap lg:flex-nowrap items-center">
          <li className="text-3xl mx-3 w-1/3 text-white ">
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
          <li className="flex justify-end order-2 w-1/3">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-neutral-950 hover:bg-current data-[state=open]:bg-neutral-700 p-3">
                    <p className="text-white text-xl">Login</p>
                    <img
                      className="fiter invert-[95%] active:scale-95 ms-1"
                      src="../profile.svg"
                    ></img>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-red-500">
                    <LoginForm />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-neutral-950 hover:bg-current data-[state=open]:bg-neutral-700 p-3">
                    <p className="text-white text-xl">Orders</p>
                    <img
                      className="fiter invert-[95%] active:scale-95 ms-1"
                      src="../profile.svg"
                    ></img>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-neutral-800 border-none ">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              testre
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavButton image="bag" url="/cart" />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavLayout;
