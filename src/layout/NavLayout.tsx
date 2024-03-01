import { Link } from "react-router-dom";
import NavButton from "../temp/NavButton";
import NavSearch from "../temp/NavSearch";

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
            <ul className="flex items-center">
              <li className="mx-3">
                <NavButton image="profile" url="/profiles" />
              </li>
              <li className="mx-3">
                <NavButton image="order" url="/orders" />
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
