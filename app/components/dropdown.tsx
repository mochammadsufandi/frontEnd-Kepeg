import { DropDownProps } from "@/interface/propsInterface";
import { converterFieldToNameButton } from "@/utils/converter";

const DropDown = ({ data, name, disabled, onChange }: DropDownProps) => {
  return (
    <div
      className={`${
        disabled ? "bg-[#67595E]" : "bg-background"
      }  shadow-md rounded-md w-64 h-[2.4rem] flex items-center justify-center`}
    >
      <select
        name={name}
        disabled={disabled}
        onChange={(ev) => onChange({ name, value: ev.target.value })}
        className="w-[75%] h-[80%] border-black border-2 rounded-md"
      >
        <option value={""} key={name}>
          {converterFieldToNameButton(name)}
        </option>
        {data.map(({ name, value }) => {
          return (
            <option key={name} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
