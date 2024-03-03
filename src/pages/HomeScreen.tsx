import FooterLayout from "@/layout/FooterLayout";
import NavLayout from "../layout/NavLayout";
import SubNavLayout from "../layout/SubNavLayout";
import CarouselLayout from "@/layout/CarouselLayout";
import CategoryLayout from "@/layout/CategoryLayout";
import ProductLayout from "@/layout/ProductLayout";
function HomePage() {
  return (
    <>
      <NavLayout />
      <SubNavLayout />
      <CarouselLayout />
      <CategoryLayout />
      <ProductLayout />
      <FooterLayout />
    </>
  );
}

export default HomePage;
