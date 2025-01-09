import {
  CustomInputProps,
  DropDownFormInputProps,
  FormInputProps,
} from "@/interface/propsInterface";
import CustomInput from "./customInput";
import DropDown from "./dropdown";
import { converterFieldToNameButton } from "@/utils/converter";
import { useState } from "react";
import Modal from "./modal";

const FormsInput = ({ data }: FormInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function onCloseModal() {
    setIsOpen(false);
  }
  function onOpenModal() {
    setIsOpen(true);
  }
  function onSubmit() {
    window.alert("OIIII");
    console.log(dropDownField);
  }
  const dropDownField = [
    {
      data: [
        { name: "SMA", value: "SMA" },
        { name: "DIII", value: "DIII" },
        { name: "DIV", value: "DIV" },
        { name: "Sarjana", value: "S." },
        { name: "Magister", value: "M." },
        { name: "Doktor", value: "Dr." },
      ],
      disabled: false,
      name: "pendidikanTerakhir",
      required: true,
    },
    {
      data: [
        { name: "true", value: "true" },
        { name: "false", value: "false" },
      ],
      disabled: false,
      name: "jaksa",
      required: true,
    },
    {
      data: [
        { name: "Kejati Jambi", value: "1" },
        { name: "Kejari Jambi", value: "2" },
        { name: "Kejari Muaro Jambi", value: "3" },
      ],
      disabled: false,
      name: "unitId",
      required: true,
    },
  ];
  function onChangeGender() {}
  return (
    <form className=" flex  flex-wrap justify-evenly">
      <div className="w-[40%]">
        {data.map(({ name, field, placeholder, required, type }: CustomInputProps, idx: number) => {
          if (idx > 8) return;
          return (
            <CustomInput
              key={idx}
              field={field}
              name={name}
              type={type}
              placeholder={placeholder}
              required={required}
            />
          );
        })}
      </div>
      <div className="w-[40%]">
        {data.map(({ name, field, placeholder, required, type }: CustomInputProps, idx: number) => {
          if (idx <= 8) return;
          return (
            <CustomInput
              key={idx}
              field={field}
              name={name}
              type={type}
              placeholder={placeholder}
              required={required}
            />
          );
        })}
        <div className="w-full mb-5">
          {dropDownField.map(({ data, name, disabled, required }: DropDownFormInputProps, idx) => {
            return (
              <>
                <label
                  key={`label ${idx}`}
                  htmlFor={name}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[1.5rem]"
                >
                  {converterFieldToNameButton(name)}
                </label>

                <DropDown
                  key={`dropdown ${idx}`}
                  data={data}
                  disabled={disabled}
                  name={name}
                  onChange={onChangeGender}
                  required={required}
                />
              </>
            );
          })}
        </div>
      </div>

      <div className="w-full text-center mt-[3rem]">
        <div className="flex items-start justify-center mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onOpenModal}
        >
          Add Personnel
        </button>
        <Modal
          isOpen={isOpen}
          message="Are you sure to input personnel"
          onClose={onCloseModal}
          onAction={onSubmit}
        />
      </div>
    </form>
  );
};

export default FormsInput;
