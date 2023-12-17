import { useSearchParams } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import TabLayout from "../layout/TabLayout";
import SortLayout from "../layout/SortLayout";
import FilterLayout from "../layout/FilterLayout";

function SearchPage() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <NavLayout />
      <div className="flex items-center justify-between bg-gray-100">
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
        <div className="flex m-2">
          <SortLayout />
          <FilterLayout />
        </div>
      </div>
      <div className="bg-gray-100">test: {searchParams.get("q")}</div>
    </>
  );
}

export default SearchPage;
