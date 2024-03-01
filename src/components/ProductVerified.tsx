function ProductVerified(props: { src: string }) {
  return (
    <div className="relative">
      <div className="absolute right-0 m-2">
        <img
          className="h-6 select-none"
          src="./verified.svg"
          title="Verified"
        ></img>{" "}
      </div>
      <img className="h-96 object-none" src={props.src}></img>
    </div>
  );
}

export default ProductVerified;
