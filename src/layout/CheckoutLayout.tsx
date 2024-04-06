import SmallProductCard from "@/components/SmallProductCard";

interface CheckoutLayoutProps {
  title: string;
  products: Array<object>;
}

function CheckoutLayout({ title, products }: CheckoutLayoutProps) {
  return (
    <>
      <p className="font-semibold text-2xl">{title}</p>
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
        <p className="flex justify-between text-black/50">
          Subtotal <span className="text-black">$120</span>
        </p>
        <p className="flex justify-between text-black/50">
          Estimated Total <span className="text-black">$120</span>
        </p>
        <p className="flex justify-between text-black/50">
          Estimated Tax <span className="text-black">$120</span>
        </p>
        <p className="flex justify-between text-black/50">
          Total <span className="text-black">$120</span>
        </p>
      </div>
    </>
  );
}

export default CheckoutLayout;
