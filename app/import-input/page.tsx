"use client";

import FileMultiple from "../components/formMultiple";
import FormsInput from "../components/formsInput";
import { Navbar } from "../components/navbar";

const ImportInput = () => {
  const fieldInput = [
    {
      field: "NIP",
      name: "NIP",
      type: "number",
      placeholder: "NIP. 197010111996031002",
      required: true,
    },
    { field: "NRP", name: "NRP", type: "number", placeholder: "NRP. 69670056", required: true },
    {
      field: "nama",
      name: "Nama",
      type: "text",
      placeholder: "Dr. Yono Hadi Pramono, M.Eng",
      required: true,
    },
    {
      field: "tempatLahir",
      name: "Tempat Lahir",
      type: "text",
      placeholder: "Pasuruan",
      required: true,
    },
    { field: "tanggalLahir", name: "Tanggal Lahir", type: "date", placeholder: "", required: true },
    {
      field: "originalRank",
      name: "Pangkat",
      type: "text",
      placeholder: "Jaksa Madya (IV/b)",
      required: true,
    },
    { field: "pangkatSejak", name: "Pangkat Sejak", type: "date", placeholder: "", required: true },
    {
      field: "namaJabatan",
      name: "Nama Jabatan",
      type: "text",
      placeholder: "Kepala Kejaksaan Tinggi Jambi",
      required: true,
    },
    { field: "jabatanSejak", name: "Jabatan Sejak", type: "date", placeholder: "", required: true },
    { field: "PNSSejak", name: "PNS Sejak", type: "date", placeholder: "", required: true },
    { field: "jaksaSejak", name: "Jaksa Sejak", type: "date", placeholder: "", required: true },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="mt-[5.5rem] p-[2rem] text-whiteText bg-foreground">
        <h1 className="text-whiteText text-center pb-[2rem] font-bold text-[1.2rem]">
          Input Multiple Personnel
        </h1>
        <FileMultiple />
      </div>
      <div className="mt-[5.5rem] p-[2rem] bg-foreground">
        <h1 className="text-whiteText text-center pb-[2rem] font-bold text-[1.2rem]">
          Input Single Personnel
        </h1>
        <FormsInput data={fieldInput} />
      </div>
    </div>
  );
};

export default ImportInput;
