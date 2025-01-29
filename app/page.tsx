"use client";

import Image from "next/image";
import FilterSort from "./components/filterSort";
import { Navbar } from "./components/navbar";
import SearchBy from "./components/searchBy";
import TypeEffect from "./components/typeAnimation";

export default function Home() {
  const nowDay = new Date().toLocaleString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <Navbar />
      <div className="pt-[7rem] pb-[2rem] flex justify-evenly">
        <Image src={"/images/kejaksaan.svg"} alt="logo-kejaksaan" width={240} height={240}></Image>
        <div className="font-bold text-center w-[50%]">
          <TypeEffect
            strArray={["LAPTRI", 1000, nowDay, 1000]}
            className="text-6xl text-green-800"
          />
          <div className="mt-[2rem]">
            <h1 className="text-3xl font-extrabold text-foreground">BIRO KEPEGAWAIAN</h1>
            <h1 className="text-3xl font-extrabold text-foreground">KEJAKSAAN TINGGI JAMBI</h1>
          </div>
        </div>
      </div>
      <SearchBy />
      <FilterSort />
    </div>
  );
}
