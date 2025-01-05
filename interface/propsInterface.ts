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
  name: string;
  onChange: ({ name, value }: DropDownObject) => void;
}
