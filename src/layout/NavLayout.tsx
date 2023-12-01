import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import NavSearch from "../components/NavSearch";

function NavLayout() {
  return (
    <>
      <nav className="p-3 bg-neutral-800">
        <ul className="flex justify-around">
          <li className="text-3xl w-full mx-3 text-white ">
            <Link to={"/"}>
              <img src="bazify-logo.svg" className="h-12 active:scale-95"></img>
            </Link>
          </li>
          <li className=" w-full flex justify-center">
            <NavSearch />
          </li>
          <li className="w-full flex justify-end">
            <ul className="flex items-center">
              <li className="mx-3">
                <NavButton image="profile" url="/profile" />
              </li>
              <li className="mx-3">
                <NavButton image="order" url="/order" />
              </li>
              <li className="mx-3">
                <NavButton image="bag" url="/cart" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavLayout;
