import SmallProductCard from "@/components/SmallProductCard";

interface CheckoutLayoutProps {
  title: string;
  products: Array<object>;
}

function CheckoutLayout({ title, products }: CheckoutLayoutProps) {
  return (
    <>
      <p>{title}</p>
      <div className="flex flex-col gap-3">
        {products &&
          products.map((e, i) => {
            return (
              <SmallProductCard
                key={i}
                title={e.title}
                price={e.price}
                qty={e.qty}
                options={e.options}
                img={e.img}
              />
            );
          })}
      </div>
    </>
  );
}

export default CheckoutLayout;
