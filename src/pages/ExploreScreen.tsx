import NavLayout from "@/layout/NavLayout";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function ExploreScreen() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  return (
    <>
      <NavLayout />
      {page}
    </>
  );
}

export default ExploreScreen;
