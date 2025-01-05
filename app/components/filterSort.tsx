import { DropDownObject, FilterFields, SortFields } from "@/interface/propsInterface";
import FilterFieldDropDown from "./filterFieldDropDown";
import SortFieldDropDown from "./sortFieldDropDown";
import { useEffect, useState } from "react";
import { renderFilterField } from "@/utils/converter";
import DropDown from "./dropdown";

const FilterSort = () => {
  const [filterFields, setFilterFields] = useState<FilterFields>({});
  const [sortFields, setSortFields] = useState<SortFields>({});

  const dropdownObj = [
    { name: "asc", value: "asc" },
    { name: "desc", value: "desc" },
  ];

  function toggleFilterField(field: keyof FilterFields) {
    setFilterFields((prevFilterFields) => {
      if (Object.keys(prevFilterFields).includes(field)) {
        const updatedFilters = { ...prevFilterFields };
        delete updatedFilters[field];
        return updatedFilters;
      }
      return { ...prevFilterFields, [field]: "" };
    });
  }
  function toggleSortField(field: keyof SortFields) {
    setSortFields((prevSortFields) => {
      if (Object.keys(prevSortFields).includes(field)) {
        const updatedFilters = { ...prevSortFields };
        delete updatedFilters[field];
        return updatedFilters;
      }
      return { ...prevSortFields, [field]: "" };
    });
  }

  function onChangeFilterField(params: string, value: string) {
    const updatedFilters = { ...filterFields, [params]: value };
    setFilterFields(updatedFilters);
  }

  function onChangeSortField({ name, value }: DropDownObject) {
    const updatedField = { ...sortFields, [name]: value };
    setSortFields(updatedField);
  }

  useEffect(() => {
    console.log(filterFields);
    console.log(sortFields);
  }, [filterFields, sortFields]);

  return (
    <div className="w-full bg-background px-[2rem] pb-[2rem]">
      <h1 className="w-[100%] pt-[2rem] pb-[1rem] text-center font-semibold text-[18px] text-foreground">
        Filter and Sort Personnel
      </h1>
      <div className="w-full bg-filterAndSortBox h-fit rounded-lg">
        <h2 className="w-full pt-[1rem] pb-[1rem] text-center text-whiteText text-[16px] font-semibold">
          Filter Fields
        </h2>
        <FilterFieldDropDown onSelectField={toggleFilterField} filterFields={filterFields} />
        <div className="flex flex-wrap">
          {Object.keys(filterFields).map((field) => (
            <div key={field} className="mb-2">
              {renderFilterField({ params: field, onChangeField: onChangeFilterField })}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-filterAndSortBox h-fit rounded-lg mt-1">
        <h2 className="w-full pt-[1rem] pb-[1rem] text-center text-whiteText text-[16px] font-semibold">
          Sort Fields
        </h2>
        <SortFieldDropDown onSelectField={toggleSortField} filterFields={sortFields} />
        <div className="flex flex-wrap">
          {Object.keys(sortFields).map((field) => (
            <DropDown key={field} data={dropdownObj} name={field} onChange={onChangeSortField} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
