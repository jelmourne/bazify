import { useSearchParams } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import TabLayout from "../layout/TabLayout";

function SearchPage() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <NavLayout />
      <div className="flex items-center">
        <TabLayout
          tabs={[
            "Discover",
            "Shop",
            "Categories",
            "Products",
            "Services",
            "Software",
          ]}
        />
        <div className="flex items-center bg-neutral-200">
          <img src="./sort.svg"></img>
          <select className="appearance-none text-black bg-neutral-200">
            <option selected>Test</option>
          </select>
        </div>
      </div>
      <div>test: {searchParams.get("q")}</div>
    </>
  );
}

export default SearchPage;
