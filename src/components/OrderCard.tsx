import {useState} from "react"

interface OrderCardProps {
  title: string;
  date: Date;
}

function OrderCard({ title, date }: OrderCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-neutral-100 p-3 rounded-md flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="bg-neutral-200 p-4 aspect-square rounded-md me-3"
          src="./truck.svg"
        ></img>
        <div className="flex flex-col">
          <p className="text-lg font-medium">Order #{title}</p>
          <p className="text-black/60">{date.toLocaleString().split(",")[0]}</p>
        </div>
      </div>
      <button onClick={()=> {setOpen(!open)}} >Button</button>
      {open && <div> fdsfds</div>}
    </div>
  );
}

export default OrderCard;
