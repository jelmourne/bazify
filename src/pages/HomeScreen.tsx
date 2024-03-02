import CategoryCard from "@/components/CategoryCard";
import NavLayout from "../layout/NavLayout";
import SubNavLayout from "../layout/SubNavLayout";
import CarouselLayout from "@/layout/CarouselLayout";
function HomePage() {
  return (
    <>
      <NavLayout />
      <SubNavLayout />
      <CarouselLayout />
      <CategoryCard />
    </>
  );
}

export default HomePage;
