import { DropDownProps } from "@/interface/propsInterface";

const DropDown = ({ data, name, onChange }: DropDownProps) => {
  return (
    <div className="bg-background shadow-md rounded-md w-64 mt-2 p-4">
      <label>{`Select ${name}`}</label>
      <select name={name} onChange={(ev) => onChange({ name, value: ev.target.value })}>
        <option value={""} key={name}>
          {name}
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
