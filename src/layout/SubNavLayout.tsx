import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import data from "./store/Counties.json";
import { useState } from "react";

function SubNavLayout() {
  const [country, setCountry] = useState("CA");
  const [language, setLanguage] = useState("EN");
  return (
    <nav className="bg-secondary flex justify-between px-5">
      <ul className="flex justify-start gap-7 items-center">
        <li>adsadsa</li>
        <li>Contact</li>
      </ul>
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
