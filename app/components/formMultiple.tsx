import { useState } from "react";
import Toast from "./toast";
import { inputMultiplePersonnel } from "@/utils/fetchAPI/inputPersonnel";

const FileMultiple = () => {
  const [file, setFile] = useState<File | null>(null);
  const [messageToast, setmessageToast] = useState("");
  const [isVisibleToast, setIsVisibleToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");

  function onChangeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    ev.preventDefault();
    const selectedFile = ev.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  function showToast() {
    setIsVisibleToast(true);
    setTimeout(() => {
      setIsVisibleToast(false);
    }, 3000);
  }
  function onCloseToast() {
    setIsVisibleToast(false);
  }
  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!file) {
      alert("Please Input A File");
      return;
    }
    const formData = new FormData();
    formData.append("InputFile", file);

    try {
      const { responseData, status } = await inputMultiplePersonnel(formData);
      if (status === 200) {
        setStatusToast("success");
      } else {
        setStatusToast("error");
      }
      setmessageToast(responseData.message as string);
      setFile(null);
      showToast();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form className="flex flex-col items-center justify-center" onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            htmlFor="fileMultiple"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Input File
          </label>
          <input
            type="file"
            id="fileMultiple"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Please Input .docx File"
            required={true}
            accept=".docx"
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Import Personnel
        </button>
      </form>
      <Toast
        message={messageToast}
        isVisible={isVisibleToast}
        onClose={onCloseToast}
        type={statusToast}
      />
    </>
  );
};

export default FileMultiple;
