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
      {searchParams.get("category") ? "dss" : "tet"}
      <ProductLayout
        title={
          searchParams.get("category")
            ? searchParams.get("category") || ""
            : searchParams.get("tab") || ""
        }
      />
    </>
  );
}

export default ExploreScreen;
