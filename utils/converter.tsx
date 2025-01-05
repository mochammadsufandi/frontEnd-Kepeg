type RenderFieldParams = {
  params: string;
  onChangeField: (params: string, value: string) => void;
};

export function renderFilterField({ params, onChangeField }: RenderFieldParams) {
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
        <label className="block text-sm font-medium">{converterFieldToNameButton(params)}</label>
        <input
          type="date"
          placeholder={`Select ${converterFieldToNameButton(params)}`}
          onChange={(ev) => {
            onChangeField(params, ev.target.value);
          }}
        ></input>
      </>
    );
  }
  if (
    params === "gender" ||
    params === "pendidikanTerakhir" ||
    params === "promotionChecking" ||
    params === "marker" ||
    params === "jaksa" ||
    params === "unitId"
  ) {
    return (
      <>
        <label className="block text-sm font-medium">{converterFieldToNameButton(params)}</label>
        <input
          type="number"
          placeholder={`Select ${converterFieldToNameButton(params)}`}
          onChange={(ev) => {
            onChangeField(params, ev.target.value);
          }}
        ></input>
      </>
    );
  }
  if (
    params === "tempatLahir" ||
    params === "originalRank" ||
    params === "keterangan" ||
    params === "keteranganTambahan"
  ) {
    return (
      <>
        <label className="block text-sm font-medium">{converterFieldToNameButton(params)}</label>
        <input
          type="text"
          placeholder={`Select ${converterFieldToNameButton(params)}`}
          onChange={(ev) => {
            onChangeField(params, ev.target.value);
          }}
        ></input>
      </>
    );
  }
}

export function converterFieldToNameButton(params: string) {
  switch (params) {
    case "nama":
      return "Nama";
    case "gender":
      return "Gender";
    case "tempatLahir":
      return "Tempat Lahir";
    case "tanggalLahir":
      return "Tanggal Lahir";
    case "originalRank":
      return "Pangkat";
    case "pangkatSejak":
      return "Pangkat Sejak";
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
  }
}
