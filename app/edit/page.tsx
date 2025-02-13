"use client";

import { useSelector } from "react-redux";
import Forms from "../components/formsEdit";
import { Navbar } from "../components/navbar";
import { AppDispatch, RootState } from "../lib/store";
import { DataTableResult, DropDownObject } from "@/interface/propsInterface";
import { useEffect, useState } from "react";
import { mappingToDataEditParams } from "@/utils/converter";
import { editPersonnel } from "@/utils/fetchAPI/editPersonnel";
import Toast from "../components/toast";
import { useDispatch } from "react-redux";
import {
  changePersonnelAfterEditMultiple,
  editPersonnelMultiple,
} from "../lib/features/personnel/multiplePersonnelSlicing";
import {
  changePersonnelAfterEditSingle,
  editPersonnelSingle,
} from "../lib/features/personnel/singlePersonnelSlicing";

const Edit = () => {
  const typeData = useSelector((state: RootState) => state.typeData);
  const NIP = useSelector((state: RootState) => state.NIPEdit);
  const [messageToast, setMessageToast] = useState("");
  const [isVisibleToast, setIsVisibleToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const editFieldMultiple: DataTableResult = useSelector(
    (state: RootState) => state.multiplePersonnel.editField
  );
  const editFieldSingle: DataTableResult = useSelector(
    (state: RootState) => state.singlePersonnel.editField
  );
  const [formData, setFormData] = useState<DataTableResult>({} as DataTableResult);

  // for redux
  const dispatch: AppDispatch = useDispatch();

  function handleInputChange({ name, value }: { name: string; value: string | number }) {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function onChangeHandlerInput({ name, value }: { name: string; value: string | number }) {
    if (!value) {
      handleInputChange({ name, value: "" });
    } else {
      handleInputChange({ name, value });
    }
  }
  function onChangeHandlerDropdown({ name, value }: DropDownObject) {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === "true" ? true : value === "false" ? false : value,
    }));
  }
  function formatDateInput(date: string | Date) {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  }
  function showToast() {
    setIsVisibleToast(true);
    setTimeout(() => {
      setIsVisibleToast(false);
    }, 3000);
  }
  function onCloseToast() {
    setIsVisibleToast(false);
  }
  async function onSubmit(ev: React.FormEvent) {
    try {
      ev.preventDefault();
      const dataEdit = mappingToDataEditParams(formData);
      const response = await editPersonnel({ NIP, data: dataEdit });
      const { responseData, status } = response;
      if (status === 200) {
        setStatusToast("success");
      } else {
        setStatusToast("error");
      }
      setMessageToast(responseData.message as string);
      setFormData({} as DataTableResult);
      if (typeData === "multiple") {
        dispatch(
          changePersonnelAfterEditMultiple({
            DataTableResult: formData,
            NIPEdit: NIP,
          })
        );
        dispatch(editPersonnelMultiple(""));
      }
      if (typeData === "single") {
        dispatch(changePersonnelAfterEditSingle(formData));
        dispatch(editPersonnelSingle(""));
      }
      showToast();
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const initialData = typeData === "multiple" ? editFieldMultiple : editFieldSingle;
    const sanitizedData = Object.fromEntries(
      Object.entries(initialData).map(([key, value]) => [key, value ?? ""])
    );
    setFormData((prevState) => ({
      ...prevState,
      ...sanitizedData,
    }));
  }, [typeData, editFieldMultiple, editFieldSingle]);

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
      placeholder: "Mutasi/Pensiun",
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
      field: "promotionYAD",
      name: "Kenaikan Pangkat Y.A.D",
      value: formData.promotionYAD ? formatDateInput(formData.promotionYAD) : "",
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
      name: "originalRank",
      defaultValue: {
        name: "originalRank",
        value: formData.originalRank
          ? (formData.originalRank.match(/\(.*?\)/g)?.[0] as string)
          : "",
      },
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
        { name: "Kejari Batanghari", value: "3" },
        { name: "Kejari Bungo", value: "4" },
        { name: "Kejari Sungai Penuh", value: "5" },
        { name: "Kejari Merangin", value: "6" },
        { name: "Kejari Tanjung Jabung Barat", value: "7" },
        { name: "Kejari Sarolangun", value: "8" },
        { name: "Kejari Tebo", value: "9" },
        { name: "Kejari Muaro Jambi", value: "10" },
        { name: "Kejari Tanjung Jabung Timur", value: "11" },
        { name: "Cabjari Batanghari Muara Tembesi", value: "12" },
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
    <div className="bg-foreground">
      <Navbar />
      <div className="mt-[5.5rem] p-[2rem]">
        <Forms dataInput={fieldInput} dataDropDown={dropDownField} onSubmit={onSubmit} />
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

export default Edit;
