import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { handleSearchSubmit } from "../utils/handleSearchSubmit";

function NavSearch() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="w-full flex relative"
      onSubmit={(e: FormEvent) => {
        navigate(handleSearchSubmit(e, search));
      }}
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="search"
        className="w-full rounded-full focus:outline-none focus:ring focus:border-blue-500 [&::placeholder]:text-center [&::-webkit-search-cancel-button]:appearance-none pl-3 flex items-center"
        placeholder="Search"
      ></input>
      <Link to={{ pathname: "/search", search: "?q=" + search }}>
        <div className="absolute right-6 h-full flex items-center">
          <div className="bg-black rounded-full h-4/5 aspect-square  active:scale-95 flex justify-center items-center">
            <img
              className=" w-5 h-full aspect-square fiter invert-[95%]"
              src="./search.svg"
            ></img>
          </div>
        </div>
      </Link>
    </form>
  );
}

export default NavSearch;
