import React, { useEffect } from "react";
import SearchConatiner from "../Containers/Search";

export default function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SearchConatiner />
    </>
  );
}
