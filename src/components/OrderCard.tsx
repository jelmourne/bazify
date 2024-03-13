interface OrderCardProps {
  title: string;
  date: Date;
}

function OrderCard({ title, date }: OrderCardProps) {
  return (
    <div className="bg-neutral-200 p-3 rounded-md flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="bg-neutral-300 p-4 aspect-square rounded-md me-3"
          src="./truck.svg"
        ></img>
        <div className="flex flex-col">
          <p className="text-lg font-medium">Order #{title}</p>
          <p className="text-black/60">{date.toLocaleString().split(",")[0]}</p>
        </div>
      </div>
      <p>dsads</p>
    </div>
  );
}

export default OrderCard;
