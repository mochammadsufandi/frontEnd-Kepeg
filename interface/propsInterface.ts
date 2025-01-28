export type FilterFields = {
  gender?: string;
  tempatLahir?: string;
  tanggalLahir?: string;
  originalRank?: string;
  eselon?: string;
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
  defaultValue?: DropDownObject;
  onChange: ({ name, value }: DropDownObject) => void;
}

export type CustomInputProps = {
  field: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
  placeholder: string;
  onChange: ({ name, value }: { name: string; value: string }) => void;
};

export type CustomInputFormProps = {
  field: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
  placeholder: string;
  onChange?: ({ name, value }: { name: string; value: string }) => void;
};

export type FormInputProps = {
  dataInput: CustomInputFormProps[];
  dataDropDown: DropDownFormInputProps[];
  onSubmit?: (ev: React.FormEvent) => void;
};

export type DropDownFormInputProps = {
  name: string;
  data: DropDownObject[];
  defaultValue?: DropDownObject;
  disabled: boolean;
  required: boolean;
  onChange?: ({ name, value }: DropDownObject) => void;
};

export type DataTableResult = {
  nama: string;
  NIP: string;
  NRP: string;
  gender: string;
  tempatLahir: string;
  tanggalLahir: string;
  originalRank: string;
  eselon: string;
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
  durasiJabatan?: string;
  unitId: number | null;
  jabatanId: number | null;
  jabatan: {
    id?: number;
    nama: string;
  } | null;
  unitKerja: {
    id?: number;
    nama: string;
  };
};

export interface DataEditParams
  extends Omit<DataTableResult, "unitKerja" | "gender" | "jabatan" | "jabatanId"> {}
