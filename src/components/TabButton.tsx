import { useEffect, useState } from "react";

function TabButton(props: {
  title: string;
  index: number;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle(
      props.select == props.index
        ? { background: "#000000", color: "#ffffff" }
        : {}
    );
  }, [props.select, props.setSelect, props.index]);
  return (
    <button
      style={style}
      className="text-black rounded-full m-2 px-3 p-1"
      onClick={() => props.setSelect(props.index)}
    >
      {props.title}
    </button>
  );
}

export default TabButton;
