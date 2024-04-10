import FilterLayout from "@/layout/FilterLayout";
import NavLayout from "@/layout/NavLayout";
import ProductLayout from "@/layout/ProductLayout";
import { useSearchParams } from "react-router-dom";

function ExploreScreen() {
  const [searchParams] = useSearchParams();

  const params: Array<string> = [];

  searchParams.forEach((e) => {
    params.push(e);
  });

  return (
    <>
      <NavLayout />
      <div className="flex">
        <FilterLayout
          showCategories={searchParams.get("category") ? false : true}
        />
        <ProductLayout
          title={
            searchParams.get("category")
              ? searchParams.get("category") || ""
              : searchParams.get("tab") || ""
          }
        />
      </div>
    </>
  );
}

export default ExploreScreen;
