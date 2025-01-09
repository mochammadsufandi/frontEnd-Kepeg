import { useState } from "react";
import CustomInput from "./customInput";
import Modal from "./modal";

const FileMultiple = () => {
  const [isOpen, setIsOpen] = useState(false);
  function onCloseModal() {
    setIsOpen(false);
  }
  function onOpenModal() {
    setIsOpen(true);
  }
  function onSubmit() {}

  return (
    <form className="flex flex-col items-center justify-center">
      <CustomInput
        field="fileInput"
        type="file"
        name="Personnels File"
        required={false}
        placeholder="Please Input .Word File"
      />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onOpenModal}
      >
        Import Personnel
      </button>
      <Modal
        isOpen={isOpen}
        onClose={onCloseModal}
        onAction={onSubmit}
        message="Are you sure to import this file?"
      />
    </form>
  );
};

export default FileMultiple;
