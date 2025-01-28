"use client";

import { useState } from "react";
import FileMultiple from "../components/formMultiple";
import FormsInput from "../components/formsInput";
import { Navbar } from "../components/navbar";
import { DataTableResult, DropDownObject } from "@/interface/propsInterface";
import Toast from "../components/toast";
import { mappingToDataEditParams } from "@/utils/converter";
import { inputSinglePersonnel } from "@/utils/fetchAPI/inputPersonnel";

const ImportInput = () => {
  const [formData, setFormData] = useState<DataTableResult>({} as DataTableResult);
  const [messageToast, setMessageToast] = useState("");
  const [isVisibleToast, setIsVisibleToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");

  function formatDateInput(date: string | Date) {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  }

  function onCloseToast() {
    setIsVisibleToast(false);
  }
  function showToast() {
    setIsVisibleToast(true);
    setTimeout(() => {
      setIsVisibleToast(false);
    }, 3000);
  }

  function onChangeHandlerInput({ name, value }: { name: string; value: string | number }) {
    if (!value) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }
  function onChangeHandlerDropdown({ name, value }: DropDownObject) {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === "true" ? true : value === "false" ? false : value,
    }));
  }
  async function onSubmit(ev: React.FormEvent) {
    try {
      ev.preventDefault();
      const inputData = mappingToDataEditParams(formData);
      const { responseData, status } = await inputSinglePersonnel(inputData);
      if (status === 201) {
        setStatusToast("success");
      } else {
        setStatusToast("error");
      }
      setMessageToast(responseData.message as string);
      setFormData({} as DataTableResult);
      showToast();
    } catch (err) {
      console.log(err);
    }
  }
  const fieldInput = [
    {
      field: "NIP",
      name: "NIP",
      value: formData.NIP ?? "",
      type: "number",
      placeholder: "NIP. 197010111996031002",
      required: true,
      onChange: onChangeHandlerInput,
    },
    {
      field: "NRP",
      name: "NRP",
      value: formData.NRP ?? "",
      type: "number",
      placeholder: "NRP. 69670056",
      required: true,
      onChange: onChangeHandlerInput,
    },
    {
      field: "nama",
      name: "Nama",
      value: formData.nama ?? "",
      type: "text",
      placeholder: "Dr. Yono Hadi Pramono, M.Eng",
      required: true,
      onChange: onChangeHandlerInput,
    },
    {
      field: "tempatLahir",
      name: "Tempat Lahir",
      value: formData.tempatLahir ?? "",
      type: "text",
      placeholder: "Pasuruan",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "tanggalLahir",
      name: "Tanggal Lahir",
      value: formData.tanggalLahir ? formatDateInput(formData.tanggalLahir) : "",
      type: "date",
      placeholder: "",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "pangkatSejak",
      name: "Pangkat Sejak",
      value: formData.pangkatSejak ? formatDateInput(formData.pangkatSejak) : "",
      type: "date",
      placeholder: "",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "namaJabatan",
      name: "Nama Jabatan",
      value: formData.namaJabatan ?? "",
      type: "text",
      placeholder: "Kepala Kejaksaan Tinggi Jambi",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "keteranganTambahan",
      name: "Keterangan Tambahan",
      value: formData.keteranganTambahan ?? "",
      type: "text",
      placeholder: "Mutasi",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "jabatanSejak",
      name: "Jabatan Sejak",
      value: formData.jabatanSejak ? formatDateInput(formData.jabatanSejak) : "",
      type: "date",
      placeholder: "",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "PNSSejak",
      name: "PNS Sejak",
      value: formData.PNSSejak ? formatDateInput(formData.PNSSejak) : "",
      type: "date",
      placeholder: "",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "jaksaSejak",
      name: "Jaksa Sejak",
      value: formData.jaksaSejak ? formatDateInput(formData.jaksaSejak) : "",
      type: "date",
      placeholder: "",
      required: false,
      onChange: onChangeHandlerInput,
    },
    {
      field: "pendidikanTerakhir",
      name: "Pendidikan",
      value: formData.pendidikanTerakhir ?? "",
      type: "text",
      placeholder: "S.H, M.H",
      required: false,
      onChange: onChangeHandlerInput,
    },
  ];
  const dropDownField = [
    {
      data: [
        { name: "IV/e", value: "(IV/e)" },
        { name: "IV/d", value: "(IV/d)" },
        { name: "IV/c", value: "(IV/c)" },
        { name: "IV/b", value: "(IV/b)" },
        { name: "IV/a", value: "(IV/a)" },
        { name: "III/d", value: "(III/d)" },
        { name: "III/c", value: "(III/c)" },
        { name: "III/b", value: "(III/b)" },
        { name: "III/a", value: "(III/a)" },
        { name: "II/d", value: "(II/d)" },
        { name: "II/c", value: "(II/c)" },
        { name: "II/b", value: "(II/b)" },
        { name: "II/a", value: "(II/a)" },
        { name: "I/d", value: "(I/d)" },
        { name: "I/c", value: "(I/c)" },
        { name: "I/b", value: "(I/b)" },
        { name: "I/a", value: "(I/a)" },
      ],
      disabled: false,
      defaultValue: {
        name: "originalRank",
        value: formData.originalRank
          ? (formData.originalRank.match(/\(.*?\)/g)?.[0] as string)
          : "",
      },
      name: "originalRank",
      required: false,
      onChange: onChangeHandlerDropdown,
    },
    {
      data: [
        { name: "I/a", value: "I/a" },
        { name: "I/b", value: "I/b" },
        { name: "II/a", value: "II/a" },
        { name: "II/b", value: "II/b" },
        { name: "III/a", value: "III/a" },
        { name: "III/b", value: "III/b" },
        { name: "IV/a", value: "IV/a" },
        { name: "IV/b", value: "IV/a" },
        { name: "V/a", value: "V/a" },
        { name: "V/b", value: "V/b" },
      ],
      disabled: false,
      name: "eselon",
      defaultValue: {
        name: "eselon",
        value: formData.eselon ?? "",
      },
      required: false,
      onChange: onChangeHandlerDropdown,
    },
    {
      data: [
        { name: "true", value: "true" },
        { name: "false", value: "false" },
      ],
      disabled: false,
      defaultValue: {
        name: "jaksa",
        value: formData.jaksa ? "true" : "false",
      },
      name: "jaksa",
      required: false,
      onChange: onChangeHandlerDropdown,
    },
    {
      data: [
        { name: "Jaksa", value: "Jaksa" },
        { name: "TU", value: "TU" },
        { name: "CPNS", value: "CPNS" },
      ],
      disabled: false,
      defaultValue: {
        name: "keterangan",
        value: formData.keterangan ?? "",
      },
      name: "keterangan",
      required: false,
      onChange: onChangeHandlerDropdown,
    },
    {
      data: [
        { name: "Kejati Jambi", value: "1" },
        { name: "Kejari Jambi", value: "2" },
        { name: "Kejari Muaro Jambi", value: "3" },
      ],
      disabled: false,
      defaultValue: {
        name: "",
        value: formData.unitId ? (formData.unitId?.toString() as string) : "",
      },
      name: "unitId",
      required: false,
      onChange: onChangeHandlerDropdown,
    },
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
        <FormsInput dataInput={fieldInput} dataDropDown={dropDownField} onSubmit={onSubmit} />
      </div>
      <Toast
        message={messageToast}
        isVisible={isVisibleToast}
        onClose={onCloseToast}
        type={statusToast}
      />
    </div>
  );
};

export default ImportInput;
