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
        <img
          className="absolute right-3 w-5 h-full aspect-square active:scale-95"
          src="./search.svg"
        ></img>
      </Link>
    </form>
  );
}

export default NavSearch;
