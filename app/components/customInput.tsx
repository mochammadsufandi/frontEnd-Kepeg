import { CustomInputProps } from "@/interface/propsInterface";

const CustomInput = ({
  field,
  type,
  name,
  required,
  placeholder,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={field}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        type={type}
        id={field}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        required={required}
        value={value}
        minLength={field === "NIP" ? 18 : field === "NRP" ? 6 : 1}
        min={0}
        onChange={(ev) => {
          const inputValue = ev.target.value;
          if (type === "number") {
            const length = inputValue.length;
            if ((field === "NIP" && length !== 18) || (field === "NRP" && length < 6)) {
              ev.target.setCustomValidity(
                `The ${field} field must have  ${
                  field === "NIP" ? 18 : "minimum 6"
                } characters (you are currently using ${length})`
              );
            } else {
              ev.target.setCustomValidity("");
            }
          }
          onChange({ name: field, value: inputValue });
        }}
      />
    </div>
  );
};

export default CustomInput;
