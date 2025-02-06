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
        <Image
          src={"/images/Kejaksaan_Agung_Republik_Indonesia_new_logo.png"}
          alt="logo-kejaksaan"
          width={240}
          height={240}
        ></Image>
        <div className="font-bold text-center w-[50%]">
          <TypeEffect
            strArray={["LAPTRI DAFTAR NAMA PEGAWAI", 1000, nowDay, 1000]}
            className="text-4xl font-extrabold text-green-800"
          />
          <div className="mt-[3rem]">
            <h1 className="text-3xl font-extrabold text-foreground">SUBBAGIAN KEPEGAWAIAN</h1>
            <h1 className="text-3xl font-extrabold text-foreground">KEJAKSAAN TINGGI JAMBI</h1>
          </div>
        </div>
      </div>
      <SearchBy />
      <FilterSort />
    </div>
  );
}
