import NavLayout from "@/layout/NavLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderLayout from "@/layout/OrderLayout";

const test = ["1231", "321321", "34213213"];

function OrderScreen() {
  return (
    <>
      <NavLayout />
      <div className="m-10">
        <h1 className="text-3xl my-4 font-bold">Your Orders</h1>
        <Tabs defaultValue="order" className="flex flex-col overflow-x-hidden">
          <div className="w-full border-b">
            <TabsList className="w-fit flex justify-center">
              <TabsTrigger value="order">All Orders</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="order" className="w-full">
            <OrderLayout title="Upcoming orders" orders={test} />
            <OrderLayout title="Past orders" orders={test} />
          </TabsContent>
          <TabsContent value="upcoming" className="w-full">
            <OrderLayout orders={test} />
          </TabsContent>
          <TabsContent value="completed" className="w-full">
            <OrderLayout orders={test} />
          </TabsContent>
          <TabsContent value="cancelled" className="w-full">
            <OrderLayout orders={test} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default OrderScreen;
