import { baseURL } from "../baseURL";

type SortFields = {
  [key: string]: string;
};
type FilterFields = {
  [key: string]: string;
};
interface Headers {
  sortFields?: SortFields;
  filterFields?: FilterFields;
}
type SearchByNIPNRP = {
  nip: string;
  nrp: string;
};

export const dynamicFilter = async ({ sortFields, filterFields }: Headers) => {
  const response = await fetch(`${baseURL}/dynamicFilter`, {
    headers: {
      filterFields: JSON.stringify(filterFields),
      sortFields: JSON.stringify(sortFields),
    },
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};

export const searchByName = async (nama: string) => {
  const response = await fetch(`${baseURL}/searchByName`, {
    headers: {
      nama,
    },
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};

export const searchByNIPNRP = async ({ nip, nrp }: SearchByNIPNRP) => {
  const response = await fetch(`${baseURL}/getByNIP`, {
    headers: {
      nip,
      nrp,
    },
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};
