import { useSearchParams } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import ProductLayout from "@/layout/ProductLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterLayout from "@/layout/FilterLayout";
function SearchPage() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <NavLayout />

      <div className="flex flex-row justify-center">
        <FilterLayout />
        <div className="flex flex-col w-full m-10">
          <h1 className="text-3xl font-light mb-4">
            Results for {searchParams.get("q")}
          </h1>
          <Tabs defaultValue="products" className="flex flex-col">
            <div className="w-full flex justify-between border-b items-center">
              <TabsList>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="shops">Shops</TabsTrigger>
                <TabsTrigger value="collections">Collections</TabsTrigger>
              </TabsList>
              <div>dsasd</div>
            </div>
            <div>
              <TabsContent value="products" className="w-full p-5">
                <ProductLayout title="products" />
              </TabsContent>
              <TabsContent value="shops" className="w-full p-5">
                <ProductLayout title="produ" />
              </TabsContent>
              <TabsContent value="collections" className="w-full p-5">
                <ProductLayout title="pducts" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
