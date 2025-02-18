import DropDown from "@/app/components/dropdown";
import { DataEditParams, DataTableResult, DropDownObject } from "@/interface/propsInterface";

type RenderFieldParams = {
  params: string;
  disabled: boolean;
  onChangeField: ({ name, value }: DropDownObject) => void | (() => void);
};

export function renderFilterField({ params, onChangeField, disabled }: RenderFieldParams) {
  if (
    params === "tanggalLahir" ||
    params === "pangkatSejak" ||
    params === "pangkatSejak" ||
    params === "jabatanSejak" ||
    params === "PNSSejak" ||
    params === "promotionYAD" ||
    params === "jaksaSejak"
  ) {
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <input
          type="date"
          placeholder={`Select ${converterFieldToNameButton(params)}`}
          onChange={(ev) => {
            onChangeField({ name: params, value: ev.target.value });
          }}
          disabled={disabled}
          style={{ height: "2.4rem" }}
          className="text-center rounded-md"
        ></input>
      </>
    );
  }
  if (params === "gender") {
    const data = [
      { name: "Laki-Laki", value: "L" },
      { name: "Perempuan", value: "P" },
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        />
      </>
    );
  }
  if (params === "pendidikanTerakhir") {
    const data = [
      { name: "SMA", value: "SMA" },
      { name: "SMU", value: "SMU" },
      { name: "SMK", value: "SMK" },
      { name: "D.III", value: "D.III" },
      { name: "A.Md", value: "A.Md" },
      { name: "D.IV", value: "D.IV" },
      { name: "Sarjana", value: "S." },
      { name: "Magister", value: "M." },
      { name: "Doktor", value: "Dr." },
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        />
      </>
    );
  }
  if (params === "marker" || params === "promotionChecking" || params === "jaksa") {
    const data = [
      { name: "true", value: "true" },
      { name: "false", value: "false" },
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        />
      </>
    );
  }
  if (params === "numericRank") {
    const data = [
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
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        ></DropDown>
      </>
    );
  }
  if (params === "eselon") {
    const data = [
      { name: "I/a", value: "I/a" },
      { name: "I/b", value: "I/b" },
      { name: "II/a", value: "II/a" },
      { name: "II/b", value: "II/b" },
      { name: "III/a", value: "III/a" },
      { name: "III/b", value: "III/b" },
      { name: "IV/a", value: "IV/a" },
      { name: "IV/b", value: "IV/a" },
      { name: "V", value: "V" },
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        ></DropDown>
      </>
    );
  }
  if (params === "unitId") {
    const data = [
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
      { name: "Cabjari Tanjung Jabung Timur Nipah Panjang", value: "13" },
      { name: "PPPK", value: "14" },
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        />
      </>
    );
  }
  if (params === "keterangan") {
    const data = [
      { name: "Jaksa", value: "Jaksa" },
      { name: "TU", value: "TU" },
      { name: "CPNS", value: "CPNS" },
    ];
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <DropDown
          name={params}
          data={data}
          onChange={onChangeField}
          disabled={disabled}
          required={false}
        ></DropDown>
      </>
    );
  }

  if (params === "tempatLahir" || params === "keteranganTambahan" || "namaJabatan") {
    return (
      <>
        <label className="block text-sm font-medium text-whiteText">
          {converterFieldToNameButton(params)}
        </label>
        <input
          type="text"
          placeholder={`Select ${converterFieldToNameButton(params)}`}
          onChange={(ev) => {
            onChangeField({ name: params, value: ev.target.value });
          }}
          disabled={disabled}
          style={{ height: "2.4rem" }}
          className="text-center rounded-md"
        ></input>
      </>
    );
  }
}

export function converterFieldToNameButton(params: string): string {
  switch (params) {
    case "NIP":
      return "NIP";
    case "NRP":
      return "NRP";
    case "NIP/NRP":
      return "NIP/NRP";
    case "id":
      return "ID";
    case "nama":
      return "Nama";
    case "gender":
      return "Gender";
    case "tempatLahir":
      return "Tempat Lahir";
    case "tanggalLahir":
      return "Tanggal Lahir";
    case "numericRank":
      return "Pangkat";
    case "originalRank":
      return "Pangkat";
    case "eselon":
      return "Eselon";
    case "pangkatSejak":
      return "Pangkat Sejak";
    case "namaJabatan":
      return "Nama Jabatan";
    case "jabatanSejak":
      return "Jabatan Sejak";
    case "PNSSejak":
      return "PNS Sejak";
    case "pendidikanTerakhir":
      return "Pendidikan";
    case "promotionYAD":
      return "Promotion Y.A.D";
    case "jaksa":
      return "Jaksa";
    case "jaksaSejak":
      return "Jaksa Sejak";
    case "keterangan":
      return "Keterangan";
    case "promotionChecking":
      return "Promotion";
    case "marker":
      return "Marker";
    case "keteranganTambahan":
      return "Keterangan Tambahan";
    case "unitId":
      return "Satuan Kerja";
    default:
      return "";
  }
}

export function converterToDate(params: string) {
  if (params) {
    const date = new Date(params).toLocaleDateString().split("/");
    const monthString = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const [month, day, year] = date;
    return `${day}-${monthString[parseInt(month) - 1]}-${year}`;
  } else {
    return params;
  }
}

export function mappingToDataEditParams(params: DataTableResult): DataEditParams {
  const { unitKerja, jabatanId, jabatan, gender, jaksa, durasiJabatan, ...rest } = params;
  console.log(unitKerja, jabatan, jabatanId, gender, durasiJabatan);
  return {
    ...rest,
    jaksa,
    unitId: rest.unitId ?? null,
  };
}
