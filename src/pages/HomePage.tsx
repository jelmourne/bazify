import CarouselLayout from "../layout/CarouselLayout";
import NavLayout from "../layout/NavLayout";
import ProductLayout from "../layout/ProductLayout";
import SubNavLayout from "../layout/SubNavLayout";
import TabLayout from "../layout/TabLayout";

const image = [
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKxd5Vmuj7lAPZh6zV47Xk3iIsS92ZIGDXb7Mu1g-Bg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx53GlNMrEtHJS1p3WFeMxsPM2s-U7FhxTdXfo_r15Vw&s",
];

function HomePage() {
  return (
    <>
      <NavLayout />
      <SubNavLayout />
      <CarouselLayout images={image} />
      <TabLayout
        tabs={[
          "Recommended",
          "Near You",
          "Categories",
          "Discover",
          "Software",
          "Services",
          "Products",
        ]}
      />
      <div className="flex justify-center bg-gray-100">
        <ProductLayout
          image="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          rating={4.5}
        />
        <ProductLayout
          image="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          rating={4.5}
        />
      </div>
    </>
  );
}

export default HomePage;
