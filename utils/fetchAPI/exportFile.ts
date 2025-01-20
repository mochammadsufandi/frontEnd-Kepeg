import { baseURL } from "../baseURL";

export const exportToWord = async (param: string): Promise<Blob> => {
  const response = await fetch(`${baseURL}/exportWord?cacheId=${param}`);
  const file = await response.blob();
  return file;
};
