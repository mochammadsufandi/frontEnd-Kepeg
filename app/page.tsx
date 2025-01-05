"use client"

import FilterSort from "./components/filterSort";
import { Navbar } from "./components/navbar";
import SearchBy from "./components/searchBy";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="mt-[20rem]"></div>
      <SearchBy/>
      <FilterSort/>
    </div>
  );
}
