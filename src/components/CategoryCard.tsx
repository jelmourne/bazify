function CategoryCard(props: { category: object }) {
  console.log(props.category);
  return (
    <div className="flex flex-col bg-neutral-200 shadow-md rounded-lg p-3 w-[12rem] min-w-[12rem]">
      <img
        className="mb-2"
        height={25}
        width={25}
        src={props.category.image + ".svg"}
      ></img>
      <h1 className="whitespace-nowrap font-semibold">
        {props.category.title}
      </h1>
      <p className="text-black/60">{props.category.desc}</p>
    </div>
  );
}

export default CategoryCard;
