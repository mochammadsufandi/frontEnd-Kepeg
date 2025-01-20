export type FilterFields = {
  gender?: string;
  tempatLahir?: string;
  tanggalLahir?: string;
  originalRank?: string;
  pangkatSejak?: string;
  jabatanSejak?: string;
  PNSSejak?: string;
  pendidikanTerakhir?: string;
  promotionYAD?: string;
  jaksa?: string;
  jaksaSejak?: string;
  keterangan?: string;
  promotionChecking?: string;
  marker?: string;
  keteranganTambahan?: string;
  unitId?: string;
};

export type SortFields = {
  nama?: string;
  tanggalLahir?: string;
  pangkatSejak?: string;
  jabatanSejak?: string;
  PNSSejak?: string;
  promotionYAD?: string;
  jaksaSejak?: string;
  unitId?: string;
};

export type DropDownSelectFilterField = {
  filterFields: FilterFields;
  onSelectField: (params: keyof FilterFields) => void;
};

export type DropDownSelectSortField = {
  filterFields: SortFields;
  onSelectField: (params: keyof SortFields) => void;
};

export type DropDownObject = {
  name: string;
  value: string;
};

export interface DropDownProps {
  data: DropDownObject[];
  disabled: boolean;
  required: boolean;
  name: string;
  onChange: ({ name, value }: DropDownObject) => void;
}

export type CustomInputProps = {
  field: string;
  type: string;
  name: string;
  required: boolean;
  placeholder: string;
};

export type FormInputProps = {
  data: CustomInputProps[];
};

export type DropDownFormInputProps = {
  name: string;
  data: DropDownObject[];
  disabled: boolean;
  required: boolean;
};

export type DataTableResult = {
  nama: string;
  NIP: string;
  NRP: string;
  gender: string;
  tempatLahir: string;
  tanggalLahir: string;
  originalRank: string;
  pangkatSejak: string;
  jabatanSejak: string;
  PNSSejak: string;
  pendidikanTerakhir: string;
  promotionYAD: string;
  jaksa: boolean;
  jaksaSejak: string;
  keterangan: string;
  promotionChecking: boolean;
  marker: boolean;
  keteranganTambahan: string;
  namaJabatan: string;
  unitKerja: {
    id?: number;
    nama: string;
  };
};
