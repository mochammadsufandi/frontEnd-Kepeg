import Image from "next/image";
import { useState } from "react";
import DropDown from "./dropdown";
import { DropDownObject } from "@/interface/propsInterface";
import { searchByName, searchByNIPNRP } from "@/utils/fetchAPI/filterSort";
import Toast from "./toast";
import { AppDispatch } from "../lib/store";
import {
  filterSort,
  fetchStatusMultiple,
} from "../lib/features/personnel/multiplePersonnelSlicing";
import { searchBy, fetchStatusSingle } from "../lib/features/personnel/singlePersonnelSlicing";
import { fetchData } from "../lib/features/responseTypeDataSlicing";
import { useDispatch } from "react-redux";
import Link from "next/link";

// type SearchByProps = {
//   onSearchName: () => void;
//   onSearchNIPNRP: () => void;
// };

const SearchBy = () => {
  const [nip, setnip] = useState("");
  const [nrp, setnrp] = useState("");
  const [nama, setNama] = useState("");
  const [selectField, setSelectField] = useState("");
  const [isVisible, setisVisible] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  const [reqStatus, setReqStatus] = useState("");

  // for redux
  const dispatch: AppDispatch = useDispatch();

  const searchField = [
    { name: "NRP", value: "NRP" },
    { name: "NIP", value: "NIP" },
  ];
  async function handleSearchByName(nama: string) {
    try {
      const data = await searchByName(nama);
      const { responseData, status } = data;
      setNama("");
      if (status === 200) {
        setReqStatus("success");
      } else {
        setReqStatus("error");
      }
      const statusForRedux = status === 200 ? "success" : "error";
      dispatch(filterSort(responseData));
      dispatch(fetchStatusMultiple(statusForRedux));
      dispatch(fetchData("multiple"));
      setMessageToast(responseData.message);
      showToastName();
    } catch (err) {
      console.log(err);
    }
  }
  async function handleSearchByNRPNIP() {
    try {
      const data = await searchByNIPNRP({ nip, nrp });
      const { responseData, status } = data;
      setnip("");
      setnrp("");
      if (status === 200) {
        setReqStatus("success");
      } else {
        setReqStatus("error");
      }
      const statusForRedux = status === 200 ? "success" : "error";
      dispatch(searchBy(responseData));
      dispatch(fetchStatusSingle(statusForRedux));
      dispatch(fetchData("single"));
      setMessageToast(responseData.message);
      showToastName();
    } catch (err) {
      console.log(err);
    }
  }
  function onSelectDropdown({ value }: DropDownObject) {
    setSelectField(value);
  }
  function onChangeNRPNIP(params: string) {
    if (selectField === "NIP") {
      setnip(params);
    } else if (selectField === "NRP") {
      setnrp(params);
    }
  }
  function onChangeNama(params: string) {
    setNama(params);
  }
  function showToastName() {
    setisVisible(true);
    setTimeout(() => {
      setisVisible(false);
    }, 3000);
  }
  function onCloseToastName() {
    setisVisible(false);
  }

  return (
    <>
      <div className="w-[100%] h-fit bg-searchByBox flex flex-wrap justify-evenly pb-[2rem]">
        <h1 className="w-[100%] pt-[1rem] pb-[2rem] text-center text-background font-semibold text-[18px]">
          Please Input NIP/NRP or Name
        </h1>
        <div className=" w-[35%] bg-searchByDivPart p-[2rem] rounded-lg">
          <form
            className="flex flex-col flex-wrap"
            onSubmit={(ev) => {
              ev.preventDefault();
              handleSearchByNRPNIP();
            }}
          >
            <DropDown
              data={searchField}
              name="NIP/NRP"
              disabled={false}
              onChange={onSelectDropdown}
              required={true}
            />
            <div className="w-[100%] pb-[1rem] flex items-center mt-[1rem]">
              <input
                type="text"
                placeholder="Search By NIP/NRP"
                className="h-[2rem] w-[75%] rounded-md text-center p-[10px] mr-[1rem]"
                required={true}
                value={nip.length !== 0 ? nip : nrp}
                onChange={(ev) => {
                  onChangeNRPNIP(ev.target.value);
                }}
                disabled={selectField === "" ? true : false}
              ></input>
              <button
                className="bg-searchButton w-[20%] h-[2rem] rounded-md flex items-center justify-center hover:bg-blue-800"
                type="submit"
              >
                <Image alt="searchButton" src={"/images/search.png"} height={30} width={30}></Image>
              </button>
            </div>
          </form>
          <div className="">
            <button className="w-[100%] h-[2rem] rounded-md bg-resultButton flex items-center justify-center gap-3 hover:bg-green-800">
              <Link href={"/result-export"}>
                <span>See Result & Export</span>
              </Link>
              <Image
                src={"/images/download.png"}
                alt="downloadButton"
                width={30}
                height={30}
              ></Image>
            </button>
          </div>
        </div>
        <div className="w-[35%] bg-searchByDivPart p-[2rem] rounded-lg flex flex-col flex-wrap justify-evenly ">
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              handleSearchByName(nama);
            }}
          >
            <div className="w-[100%] pb-[1rem] flex items-center">
              <input
                type="text"
                placeholder="Search By Name"
                className="h-[2rem] w-[75%] rounded-md text-center p-[10px] mr-[1rem]"
                required={true}
                value={nama}
                onChange={(ev) => onChangeNama(ev.target.value)}
              ></input>
              <button
                className="bg-searchButton w-[20%] h-[2rem] rounded-md flex items-center justify-center hover:bg-blue-800"
                type="submit"
              >
                <Image alt="searchButton" src={"/images/search.png"} height={30} width={30}></Image>
              </button>
            </div>
          </form>
          <div className="">
            <button
              className="w-[100%] h-[2rem] rounded-md bg-resultButton flex items-center justify-center gap-3 hover:bg-green-800"
              type="button"
            >
              <Link href={"/result-export"}>
                <span>See Result & Export</span>
              </Link>
              <Image
                src={"/images/download.png"}
                alt="downloadButton"
                width={30}
                height={30}
              ></Image>
            </button>
          </div>
        </div>
      </div>
      <Toast
        message={messageToast}
        isVisible={isVisible}
        type={reqStatus}
        onClose={onCloseToastName}
      />
    </>
  );
};

export default SearchBy;
