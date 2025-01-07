const TableResult = () => {
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
              Masa Jabatan
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {array.map((value, idx) => {
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
                  <div>{`${value.tempatLahir}, ${value.tanggalLahir}`}</div>
                  <div>{`NRP. ${value.NRP}`}</div>
                  <div>{`NIP. ${value.NIP}`}</div>
                </td>
                <td className="px-6 py-4">
                  <div>{value.originalRank}</div>
                  <div>{value.pangkatSejak}</div>
                </td>
                <td className="px-6 py-4">
                  <div>{value.namaJabatan}</div>
                  <div>{value.jabatanSejak}</div>
                </td>
                <td className="px-6 py-4">{value.PNSSejak}</td>
                <td className="px-6 py-4 text-right">
                  <div>{value.pendidikanTerakhir}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div>{value.promotionYAD}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div>{value.jaksaSejak}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div>{value.keterangan}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Lime
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
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Green
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Red
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableResult;
