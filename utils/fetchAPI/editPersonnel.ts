import { DataEditParams } from "@/interface/propsInterface";
import { baseURL } from "../baseURL";

export const editPersonnel = async ({ data, NIP }: { data: DataEditParams; NIP: string }) => {
  const response = await fetch(`${baseURL}/edit?NIP=${NIP}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};
