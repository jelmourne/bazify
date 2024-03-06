import CategoryCard from "@/components/CategoryCard";
import data from "../config/Counties.json";

function CategoryLayout() {
  return (
    <div className="m-10 flex flex-col items-start">
      <h1 className="font-bold text-2xl my-5">Categories</h1>
      <div className="flex gap-6 w-full overflow-y-hidden overflow-x-scroll">
        {data.categories.map((e, i) => {
          return (
            <CategoryCard
              key={i}
              title={e.title}
              desc={e.desc}
              image={e.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryLayout;
