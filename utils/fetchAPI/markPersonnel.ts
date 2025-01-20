import { baseURL } from "../baseURL";

export const markPersonnel = async ({ NIP, marker }: { NIP: string; marker: boolean }) => {
  const response = await fetch(`${baseURL}/mark`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ NIP, marker }),
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};
