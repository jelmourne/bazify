import React from "react";

function SortButton(props: {
  value: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <li
      className="cursor-pointer"
      onClick={(e) => {
        props.setSelect(e.currentTarget.innerHTML);
      }}
    >
      {props.value}
    </li>
  );
}

export default SortButton;
