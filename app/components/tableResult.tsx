import { useState } from "react";
import Modal from "./modal";
import { DataTableResult } from "@/interface/propsInterface";
import { converterToDate } from "@/utils/converter";

type TableResultProps = {
  page: number;
  offset: number;
  data: DataTableResult[];
};

const TableResult = ({ page, offset, data }: TableResultProps) => {
  const [isOpenMarker, setIsOpenMarker] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  function onOpenMarker() {
    setIsOpenMarker(true);
  }

  function onOpenEdit() {
    setIsOpenEdit(true);
  }

  function onOpenDelete() {
    setIsOpenDelete(true);
  }

  function onCloseModal() {
    setIsOpenMarker(false);
    setIsOpenEdit(false);
    setIsOpenDelete(false);
  }

  function onMarkPersonnel() {}
  function onEditPersonnel() {}
  function onDeletePersonnel() {}

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md mx-[2rem]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Nama, Tgl Lahir, NRP, NIP
            </th>
            <th scope="col" className="px-6 py-3">
              Pangkat Sejak
            </th>
            <th scope="col" className="px-6 py-3">
              Jabatan Sejak
            </th>
            <th scope="col" className="px-6 py-3">
              Pegawai Negeri Sejak
            </th>
            <th scope="col" className="px-6 py-3">
              Pendidikan Terakhir
            </th>
            <th scope="col" className="px-6 py-3">
              Kenaikan Pangkat Y.AD.
            </th>
            <th scope="col" className="px-6 py-3">
              Jaksa Sejak
            </th>
            <th scope="col" className="px-6 py-3">
              Keterangan
            </th>
            <th scope="col" className="px-6 py-3">
              Marker
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
            <th scope="col" className="px-6 py-3">
              Cek Masa Jabatan
            </th>
            <th scope="col" className="px-6 py-3">
              Hasil Masa Jabatan
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, idx) => {
            if (idx >= (page - 1) * offset && idx < page * offset) {
              return (
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {idx + 1}
                  </th>
                  <td scope="row" className="px-6 py-4 ">
                    <div className="font-semibold text-background">{value.nama}</div>
                    <div>{`${value.tempatLahir}, ${converterToDate(value.tanggalLahir)}`}</div>
                    <div>{`NRP. ${value.NRP}`}</div>
                    <div>{`NIP. ${value.NIP}`}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div>{value.originalRank}</div>
                    <div>{converterToDate(value.pangkatSejak)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div>{value.namaJabatan}</div>
                    <div>{converterToDate(value.jabatanSejak)}</div>
                  </td>
                  <td className="px-6 py-4">{converterToDate(value.PNSSejak)}</td>
                  <td className="px-6 py-4 text-right">
                    <div>{value.pendidikanTerakhir}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div>{converterToDate(value.promotionYAD)}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div>{converterToDate(value.jaksaSejak)}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div>{value.keterangan}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={onOpenMarker}
                    >
                      Lime
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={onOpenEdit}
                    >
                      Green
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={onOpenDelete}
                    >
                      Red
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Teal
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <Modal
        message="Are you sure to mark this personnel ?"
        isOpen={isOpenMarker}
        onClose={onCloseModal}
        onAction={onMarkPersonnel}
      />
      <Modal
        message="Are you sure to edit this personnel ?"
        isOpen={isOpenEdit}
        onClose={onCloseModal}
        onAction={onEditPersonnel}
      />
      <Modal
        message="Are you sure to delete this personnel ?"
        isOpen={isOpenDelete}
        onClose={onCloseModal}
        onAction={onDeletePersonnel}
      />
    </div>
  );
};

export default TableResult;
