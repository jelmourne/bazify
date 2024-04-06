import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import data from "../config/Counties.json";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SubNavButton from "@/components/SubNavButton";
import { Link } from "react-router-dom";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";

function SubNavLayout() {
  const [country, setCountry] = useState("CA");
  const [language, setLanguage] = useState("EN");
  return (
    <nav className="bg-secondary flex justify-between px-5">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 items-center">
          <SubNavButton title="Categories">
            <ul className="grid p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {data.categories.map((e, i) => {
                return (
                  <NavigationMenuItem key={i}>
                    <Link to={"/products?category=" + e.title}>
                      <NavigationMenuLink className="inline-flex h-10 w-full items-center justify-start rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {e.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </ul>
          </SubNavButton>
          <SubNavButton title="Buisness">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to={"/shop"}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Bazify Buisness
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn why our platform is the right one for your buisness
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <SubNavButton title="Get Started" link="/shop/create" />
              <SubNavButton title="Dashboard" link="/shop" />
              <SubNavButton title="Pricing" link="/shop/pricing" />
            </ul>
          </SubNavButton>
          <SubNavButton title="Deals" link="/products?tab=deals" />
          <SubNavButton title="New Products" link="/products?tab=new" />
          <SubNavButton title="Your Area" link="/products?tab=local" />
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger
            value={language}
            className="outline-none select-none"
          >
            {language}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="overflow-y-scroll h-96 m-0">
            {data.languages.map((e, i) => {
              return (
                <DropdownMenuItem
                  onClick={() => {
                    setLanguage(e[0]);
                  }}
                  key={i}
                >
                  {e[1]}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            value={country}
            className="outline-none select-none"
          >
            <img
              loading="lazy"
              src={"https://flagsapi.com/" + country + "/flat/32.png"}
            ></img>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="overflow-y-scroll h-96 m-0">
            {data.countries.map((e, i) => {
              return (
                <DropdownMenuItem
                  onClick={() => {
                    setCountry(e[1]);
                  }}
                  key={i}
                >
                  <img
                    src={"https://flagsapi.com/" + e[1] + "/flat/24.png"}
                  ></img>
                  {e[0]}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default SubNavLayout;
