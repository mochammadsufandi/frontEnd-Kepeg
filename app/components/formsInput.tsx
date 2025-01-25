import {
  CustomInputFormProps,
  DropDownFormInputProps,
  FormInputProps,
} from "@/interface/propsInterface";
import CustomInput from "./customInput";
import DropDown from "./dropdown";
import { converterFieldToNameButton } from "@/utils/converter";

const FormsInput = ({ dataInput, dataDropDown, onSubmit }: FormInputProps) => {
  return (
    <form className=" flex  flex-wrap justify-evenly" onSubmit={onSubmit}>
      <div className="w-[40%]">
        {dataInput.map(
          (
            { name, field, value, placeholder, required, type, onChange }: CustomInputFormProps,
            idx: number
          ) => {
            if (idx > 8) return;
            return (
              <CustomInput
                key={idx}
                field={field}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={(ev) => {
                  if (onChange) {
                    onChange(ev);
                  }
                }}
              />
            );
          }
        )}
      </div>
      <div className="w-[40%]">
        {dataInput.map(
          (
            { name, field, value, placeholder, required, type, onChange }: CustomInputFormProps,
            idx: number
          ) => {
            if (idx <= 8) return;
            return (
              <CustomInput
                key={idx}
                field={field}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={(ev) => {
                  if (onChange) {
                    onChange(ev);
                  }
                }}
              />
            );
          }
        )}
        <div className="w-full mb-5">
          {dataDropDown.map(
            (
              { data, name, defaultValue, disabled, required, onChange }: DropDownFormInputProps,
              idx
            ) => {
              return (
                <div key={`dropdown${idx}`}>
                  <label
                    htmlFor={name}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[1.5rem]"
                  >
                    {converterFieldToNameButton(name)}
                  </label>

                  <DropDown
                    data={data}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    name={name}
                    onChange={(ev) => {
                      if (onChange) {
                        onChange(ev);
                      }
                    }}
                    required={required}
                  />
                </div>
              );
            }
          )}
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
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Personnel
        </button>
      </div>
    </form>
  );
};

export default FormsInput;
