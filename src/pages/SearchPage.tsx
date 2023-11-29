import NavLayout from "../layout/NavLayout";

function SearchPage() {
  const queryString = location.search;
  const param = new URLSearchParams(queryString);
  console.log(param.get("q"));
  return (
    <>
      <NavLayout />
      <div>test: {location.href}</div>
    </>
  );
}

export default SearchPage;
