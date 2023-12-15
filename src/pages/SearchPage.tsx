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
        <SortLayout />
        <FilterLayout />
      </div>
      <div>test: {searchParams.get("q")}</div>
    </>
  );
}

export default SearchPage;
