"use client";

import { useState } from "react";
import { Navbar } from "../components/navbar";
import TableResult from "../components/tableResult";
import Toast from "../components/toast";
import Pagination from "../components/pagination";

const ResultExport = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const array = [
    {
      nama: "Dr. HERMON DEKRISTO, S.H., M.H.",
      NIP: "197010111996031002",
      NRP: "69670056",
      gender: "L",
      tempatLahir: "Padang",
      tanggalLahir: "11-10-1970",
      originalRank: "Jaksa Utama Madya (IV/d)",
      pangkatSejak: "01-10-2022",
      jabatanSejak: "04-07-2024",
      PNSSejak: "01-07-1997",
      pendidikanTerakhir: "Dr.S.H.M.H",
      promotionYAD: "01-04-2026",
      jaksa: "true",
      jaksaSejak: "01-07-1997",
      keterangan: "Jaksa",
      promotionChecking: "true",
      marker: "false",
      keteranganTambahan: "",
      namaJabatan: "Kepala Kejaksaan Tinggi Jambi",
      unitKerja: {
        id: 1,
        nama: "Kejaksaan Tinggi Jambi",
      },
    },
    {
      nama: "RIONO BUDISANTOSO, S.H., M.A.",
      NIP: "196901091996031001",
      NRP: "69669018",
      gender: "L",
      tempatLahir: "Jakarta",
      tanggalLahir: "09-01-1969",
      originalRank: "Jaksa Utama Muda / (IV/c)",
      pangkatSejak: "01-04-2023",
      jabatanSejak: "05-06-2024",
      PNSSejak: "01-08-1997",
      pendidikanTerakhir: "S.H.M.H.",
      promotionYAD: "01-04-2027",
      jaksa: "true",
      jaksaSejak: "01-04-2001",
      keterangan: "Jaksa",
      promotionChecking: "true",
      marker: "true",
      keteranganTambahan: "",
      namaJabatan: "Wakil Kepala Kejaksaan Tinggi Jambi",
      unitKerja: {
        id: 1,
        nama: "Kejaksaan Tinggi Jambi",
      },
    },
    {
      nama: "Hermon Dekristo",
      NIP: "",
      NRP: "",
      gender: "",
      tempatLahir: "",
      tanggalLahir: "",
      originalRank: "",
      pangkatSejak: "",
      jabatanSejak: "",
      PNSSejak: "",
      pendidikanTerakhir: "",
      promotionYAD: "",
      jaksa: "",
      jaksaSejak: "",
      keterangan: "",
      promotionChecking: "",
      marker: "",
      keteranganTambahan: "",
      namaJabatan: "",
      unitKerja: {
        id: 1,
        nama: "Kejaksaan Tinggi Jambi",
      },
    },
  ];

  function onCloseToast() {
    setIsVisible(false);
  }
  function showToast() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  function handlePageChange(page: number) {
    setPage(page);
    console.log(page);
  }
  return (
    <div>
      <Navbar />
      <div className="mt-[7rem] py-[2rem] bg-navbarText">
        <div className="w-full flex flex-wrap items-center justify-center">
          <button
            type="button"
            className="text-white font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
            onClick={showToast}
          >
            Export Result to Word
          </button>
        </div>
        <TableResult page={page} offset={2} data={array} />
        <div className="flex items-center justify-center pt-[1rem]">
          <Pagination currentPage={page} totalPage={3} onPageChange={handlePageChange} />
        </div>
      </div>
      <Toast
        isVisible={isVisible}
        message="Action Successfully"
        onClose={onCloseToast}
        type="success"
      />
    </div>
  );
};

export default ResultExport;
