import CategoryCard from "@/components/CategoryCard";
import data from "../store/Counties.json";

function CategoryLayout() {
  return (
    <div className="m-10 flex flex-col items-start">
      <h1 className="font-bold text-2xl my-5">Categories</h1>
      <div className="flex gap-6 w-full overflow-y-scroll">
        {data.categories.map((e, i) => {
          return <CategoryCard key={i} category={e} />;
        })}
      </div>
    </div>
  );
}

export default CategoryLayout;
