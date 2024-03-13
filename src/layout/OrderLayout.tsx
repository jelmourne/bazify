import OrderCard from "@/components/OrderCard";
import { date } from "zod";

interface OrderLayoutProps {
  title?: string;
  orders: Array<string>;
}

function OrderLayout({ title, orders }: OrderLayoutProps) {
  return (
    <>
      <h1 className="text-xl font-semibold my-5">{title}</h1>
      <div className="flex flex-col gap-4">
        {orders.map((e, i) => {
          return <OrderCard key={i} title={e} date={new Date()} />;
        })}
      </div>
    </>
  );
}

export default OrderLayout;
