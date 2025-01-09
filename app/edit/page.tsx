"use client";

import Forms from "../components/formsEdit";
import { Navbar } from "../components/navbar";

const Edit = () => {
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
    {
      field: "promotionYAD",
      name: "Kenaikan Pangkat Y.A.D",
      type: "date",
      placeholder: "",
      required: true,
    },
  ];

  return (
    <div className="bg-foreground">
      <Navbar />
      <div className="mt-[5.5rem] p-[2rem]">
        <Forms data={fieldInput} />
      </div>
    </div>
  );
};

export default Edit;
