import { baseURL } from "../baseURL";

export const deletePersonnel = async (NIP: string) => {
  const response = await fetch(`${baseURL}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      NIP: NIP,
    }),
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};
