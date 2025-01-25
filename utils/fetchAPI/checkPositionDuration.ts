import { baseURL } from "../baseURL";

export const checkPositionDuration = async (NIP: string) => {
  const response = await fetch(`${baseURL}/checkPositionDuration`, {
    headers: {
      NIP: NIP,
    },
  });
  const responseData = await response.json();
  const status = response.status;
  return { responseData, status };
};
