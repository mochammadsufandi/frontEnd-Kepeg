import { DataEditParams } from "@/interface/propsInterface";
import { baseURL } from "../baseURL";

export const inputSinglePersonnel = async (data: DataEditParams) => {
  const response = await fetch(`${baseURL}/inputSingle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};

export const inputMultiplePersonnel = async (data: FormData) => {
  const response = await fetch(`${baseURL}/inputFile`, {
    method: "POST",
    body: data,
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};
