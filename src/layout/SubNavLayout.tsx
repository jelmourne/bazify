import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SubNavLayout() {
  return (
    <nav className="bg-secondary flex justify-between px-5">
      <ul className="flex justify-start">
        <li>adsadsa</li>
        <li>Contact</li>
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger
          value={"test"}
          className="outline-none select-none"
        >
          Selected
        </DropdownMenuTrigger>
        <DropdownMenuContent className="overflow-y-scroll">
          <DropdownMenuItem className="w-fit">Profile</DropdownMenuItem>
          <DropdownMenuItem className="w-fit">Billing</DropdownMenuItem>
          <DropdownMenuItem className="w-fit">Team</DropdownMenuItem>
          <DropdownMenuItem className="w-fit">Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default SubNavLayout;
