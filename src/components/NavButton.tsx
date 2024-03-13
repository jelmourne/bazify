import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@supabase/supabase-js";
import supabase from "@/config/auth";

interface NavButtonProps {
  name?: string;
  link?: string;
  img: string;
  user?: User;
}

function NavButton({ name, link, img, user }: NavButtonProps) {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className="select-none flex justify-center text-white text-md gap-2 active:scale-95 h-11 transition-all items-center bg-neutral-900 p-2 rounded-lg hover:bg-neutral-700 min-w-[2.75rem]"
        >
          {name ? name : ""}
          <img
            className="fiter invert-[95%]"
            width={25}
            height={25}
            src={"../" + img + ".svg"}
            alt={img}
            title={capitalizeFirstLetter(img)}
          ></img>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="select-none flex justify-center text-white text-md gap-2 active:scale-95 transition-all items-center bg-neutral-900 p-2 outline-none h-11 rounded-lg hover:bg-neutral-700">
            {user?.identities[0].identity_data.name.split(" ")[0]}
            <img
              className="fiter invert-[95%]"
              width={25}
              height={25}
              src={`../${img}.svg`}
              alt={img}
              title={capitalizeFirstLetter(img)}
            ></img>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                supabase.auth.signOut();
              }}
              className="text-red-400"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}

export default NavButton;
