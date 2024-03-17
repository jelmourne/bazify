import ShippingForm from "@/components/forms/ShippingForm";
import NavLayout from "@/layout/NavLayout";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CheckoutLayout from "@/layout/CheckoutLayout";

const formSchema = z.object({
  address: z.string(),
  address2: z.string(),
  country: z.string(),
  province_state: z.string(),
  postal_zip: z.string(),
});

const product = [
  {
    title: "test",
    price: "20",
    qty: 4,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
    options: [
      { key: "size", value: "12" },
      { key: "color", value: "Blue" },
    ],
  },
  {
    title: "test",
    price: "20",
    qty: 4,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
    options: [
      { key: "size", value: "12" },
      { key: "color", value: "Blue" },
    ],
  },
  {
    title: "test",
    price: "20",
    qty: 4,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
    options: [
      { key: "size", value: "12" },
      { key: "color", value: "Blue" },
    ],
  },
];

function CartScreen() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      address2: "",
      country: "",
      province_state: "",
      postal_zip: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <NavLayout />
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex m-5 gap-20">
        <div className="w-3/5">
          <CheckoutLayout title="Review & Place Order" products={product} />
          <p>Shipping</p>
          <ShippingForm form={form} />
        </div>
        <div className="relative">
          <div className="fixed">
            <CheckoutLayout title="In Your Bag" products={product} />
            <input type="submit" value={"Checkout"} />
          </div>
        </div>
      </form>
    </>
  );
}

export default CartScreen;
