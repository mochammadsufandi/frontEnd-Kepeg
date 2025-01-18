import { DropDownObject, FilterFields, SortFields } from "@/interface/propsInterface";
import FilterFieldDropDown from "./filterFieldDropDown";
import SortFieldDropDown from "./sortFieldDropDown";
import { useState } from "react";
import { renderFilterField } from "@/utils/converter";
import DropDown from "./dropdown";
import { dynamicFilter } from "@/utils/fetchAPI/filterSort";
import Toast from "./toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../lib/store";
import {
  filterSort,
  fetchStatusMultiple,
} from "../lib/features/personnel/multiplePersonnelSlicing";
import { fetchData } from "../lib/features/responseTypeDataSlicing";
import Link from "next/link";

const FilterSort = () => {
  const [filterFields, setFilterFields] = useState<FilterFields>({});
  const [sortFields, setSortFields] = useState<SortFields>({});
  const [filterFieldLock, setFilterFieldLock] = useState(false);
  const [sortFieldLock, setSortFieldLock] = useState(false);
  const [message, setMessage] = useState("");
  const [reqStatus, setReqStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // for redux
  const dispatch: AppDispatch = useDispatch();

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

  function onChangeFilterField({ name, value }: DropDownObject) {
    const updatedFilters = { ...filterFields, [name]: value };
    setFilterFields(updatedFilters);
  }

  function onChangeSortField({ name, value }: DropDownObject) {
    const updatedField = { ...sortFields, [name]: value };
    setSortFields(updatedField);
  }

  function onLockFilterField() {
    if (Object.keys(filterFields).length !== 0) {
      setFilterFieldLock((value) => value !== true);
    }
  }
  function onLockSortField() {
    if (Object.keys(sortFields).length !== 0) {
      setSortFieldLock((value) => value !== true);
    }
  }
  function showToast() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }
  function onCloseToast() {
    setIsVisible(false);
  }
  async function onFilterSortSubmit() {
    try {
      const data = await dynamicFilter({ filterFields, sortFields });
      const { responseData, status } = data;
      if (status === 200) {
        setReqStatus("success");
      } else {
        setReqStatus("error");
      }
      const statusForRedux = status === 200 ? "success" : "error";
      dispatch(filterSort(responseData));
      dispatch(fetchStatusMultiple(statusForRedux));
      dispatch(fetchData("multiple"));
      setMessage(responseData.message);
      showToast();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full bg-background px-[2rem] pb-[2rem]">
      <h1 className="w-[100%] pt-[2rem] pb-[1rem] text-center font-semibold text-[18px] text-foreground">
        Filter and Sort Personnel
      </h1>
      <div className="w-full bg-filterAndSortBox h-fit rounded-lg flex flex-wrap flex-col">
        <h2 className="w-full pt-[1rem] pb-[1rem] text-center text-whiteText text-[16px] font-semibold">
          Filter Fields
        </h2>
        <div className="w-full flex items-center justify-center">
          <FilterFieldDropDown onSelectField={toggleFilterField} filterFields={filterFields} />
        </div>
        <div className="flex flex-wrap items-center justify-stretch mt-[4rem] ">
          {Object.keys(filterFields).map((field) => (
            <div key={field} className="w-[20%] h-fit mb-2 mx-[2rem] flex flex-col">
              {renderFilterField({
                params: field,
                onChangeField: onChangeFilterField,
                disabled: filterFieldLock,
              })}
            </div>
          ))}
        </div>
        <div className="w-full mx-auto p-[1rem] flex justify-center">
          <button
            onClick={onLockFilterField}
            className={`w-[30%] h-[2rem] text-whiteText rounded-md ${
              filterFieldLock ? "opacity-70 bg-gray-500" : "bg-red-500 hover:bg-red-700"
            }`}
          >
            Lock Filter Field
          </button>
        </div>
      </div>
      <div className="w-full bg-filterAndSortBox h-fit rounded-lg mt-1">
        <h2 className="w-full pt-[1rem] pb-[1rem] text-center text-whiteText text-[16px] font-semibold">
          Sort Fields
        </h2>
        <div className="w-full flex items-center justify-center">
          <SortFieldDropDown onSelectField={toggleSortField} filterFields={sortFields} />
        </div>
        <div className="flex flex-wrap items-center justify-stretch mt-[4rem] ">
          {Object.keys(sortFields).map((field) => (
            <div key={field} className="w-[20%] h-fit mb-2 mx-[2rem] flex flex-col">
              <DropDown
                data={dropdownObj}
                name={field}
                onChange={onChangeSortField}
                disabled={sortFieldLock}
                required={false}
              />
            </div>
          ))}
        </div>
        <div className="w-full mx-auto p-[1rem] flex justify-center">
          <button
            onClick={onLockSortField}
            className={`w-[30%] h-[2rem] text-whiteText rounded-md ${
              sortFieldLock ? "opacity-70 bg-gray-500" : "bg-red-500 hover:bg-red-700"
            }`}
          >
            Lock Filter Field
          </button>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center mt-1 py-[2rem] font-bold bg-filterAndSortBox">
        <button
          className="w-[50%] h-[3rem] bg-resultButton rounded-md hover:bg-green-800"
          onClick={onFilterSortSubmit}
        >
          Filter & Sort Personnels
        </button>
        <button
          className="w-[50%] h-[3rem] mt-[1rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg  px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
        >
          <Link href={"/result-export"}>Lihat Hasil dan Export</Link>
        </button>
      </div>
      <Toast message={message} isVisible={isVisible} onClose={onCloseToast} type={reqStatus} />
    </div>
  );
};

export default FilterSort;
