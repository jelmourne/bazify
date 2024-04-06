import NavLayout from "../layout/NavLayout";
import SubNavLayout from "../layout/SubNavLayout";
import CarouselLayout from "@/layout/CarouselLayout";
import CategoryLayout from "@/layout/CategoryLayout";
import ProductLayout from "@/layout/ProductLayout";
const images = [
  "https://thumbs.dreamstime.com/b/oak-tree-26681040.jpg",
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
];

function HomePage() {
  return (
    <>
      <NavLayout />
      <SubNavLayout />
      <CarouselLayout img={images} />
      <CategoryLayout />
      <ProductLayout title="Recommended" />
    </>
  );
}

export default HomePage;
