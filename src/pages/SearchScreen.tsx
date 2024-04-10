import { useSearchParams } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import ProductLayout from "@/layout/ProductLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterLayout from "@/layout/FilterLayout";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sortItems = [
  "Featured",
  "Newest",
  "Price High-Low",
  "Price Low-High",
  "Rating",
];

function SearchPage() {
  const [sort, setSort] = useState<string>(sortItems[0]);
  const [searchParams] = useSearchParams();

  return (
    <>
      <NavLayout />

      <div className="flex flex-row justify-center">
        <FilterLayout showCategories={true} />
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

              <DropdownMenu>
                <DropdownMenuTrigger className="font-medium active:border-none">
                  Sort By: <span className="text-black/70">{sort}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {sortItems.map((e, i) => {
                    return (
                      <DropdownMenuItem
                        className="cursor-pointer"
                        key={i}
                        onClick={() => {
                          setSort(e);
                        }}
                      >
                        {e}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
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
