import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SubNavButtonProps {
  title: string;
  link?: string;
  children?: ReactNode;
}

function SubNavButton({ title, link, children }: SubNavButtonProps) {
  return (
    <>
      {link ? (
        <NavigationMenuItem>
          <Link to={`${link}`} className="hover:bg-white/20 p-2 rounded-lg">
            {title}
          </Link>
        </NavigationMenuItem>
      ) : (
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent p-2 hover:bg-white/20">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>{children}</NavigationMenuContent>
        </NavigationMenuItem>
      )}
    </>
  );
}

export default SubNavButton;
