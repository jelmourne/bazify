function FooterLayout() {
  return (
    <>
      <div
        className="flex items-center justify-center bg-neutral-800 text-white cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Top
      </div>
      <div className="bg-primary text-white flex justify-around">
        <div className="flex flex-col text-center">About Us</div>
        <div className="flex flex-col text-center">Docs</div>
        <div className="flex flex-col text-center">Pricing</div>
        <div className="flex flex-col text-center">Careers</div>
      </div>
    </>
  );
}

export default FooterLayout;
