import Image from "next/image";
import { useState } from "react";
import DropDown from "./dropdown";
import { DropDownObject } from "@/interface/propsInterface";
import { searchByName, searchByNIPNRP } from "@/utils/fetchAPI/filterSort";
import Toast from "./toast";

type SearchByProps = {
  onSearchName: () => void;
  onSearchNIPNRP: () => void;
};

const SearchBy = () => {
  const [nip, setnip] = useState("");
  const [nrp, setnrp] = useState("");
  const [nama, setNama] = useState("");
  const [selectField, setSelectField] = useState("");
  const [isVisibleName, setIsVisibleName] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  const [reqStatus, setReqStatus] = useState("");

  const searchField = [
    { name: "NRP", value: "NRP" },
    { name: "NIP", value: "NIP" },
  ];
  async function handleSearchByName(nama: string) {
    try {
      const data = await searchByName(nama);
      setNama(nama);
      setReqStatus("success");
      setMessageToast(data.message);
      showToastName();
    } catch (err) {
      setReqStatus("error");
      showToastName();
      setMessageToast(err.message);
      console.log(err);
    }
  }
  async function handleSearchByNRPNIP() {
    try {
      const data = await searchByNIPNRP({ nip, nrp });
      setnip("");
      setnrp("");
      setReqStatus("success");
      setMessageToast(data.message);
      showToastName();
    } catch (err) {
      setReqStatus("error");
      // setMessageToast()
      showToastName();
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
    setIsVisibleName(true);
    setTimeout(() => {
      setIsVisibleName(false);
    }, 3000);
  }
  function onCloseToastName() {
    setIsVisibleName(false);
  }
  return (
    <>
      <div className="w-[100%] h-fit bg-searchByBox flex flex-wrap justify-evenly pb-[2rem]">
        <h1 className="w-[100%] pt-[1rem] pb-[2rem] text-center text-background font-semibold text-[18px]">
          Please Input NIP/NRP or Name
        </h1>
        <form
          className="flex flex-col flex-wrap w-[35%] bg-searchByDivPart p-[2rem] rounded-lg"
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
              className="bg-searchButton w-[20%] h-[2rem] rounded-md flex items-center justify-center"
              type="submit"
            >
              <Image alt="searchButton" src={"/images/search.png"} height={30} width={30}></Image>
            </button>
          </div>
          <div className="">
            <button className="w-[100%] h-[2rem] rounded-md bg-resultButton flex items-center justify-center gap-3">
              <span>See Result & Export</span>
              <Image
                src={"/images/download.png"}
                alt="downloadButton"
                width={30}
                height={30}
              ></Image>
            </button>
          </div>
        </form>
        <form
          className="flex flex-col flex-wrap justify-evenly w-[35%] bg-searchByDivPart p-[2rem] rounded-lg"
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
              className="bg-searchButton w-[20%] h-[2rem] rounded-md flex items-center justify-center"
              type="submit"
            >
              <Image alt="searchButton" src={"/images/search.png"} height={30} width={30}></Image>
            </button>
          </div>
          <div className="">
            <button
              className="w-[100%] h-[2rem] rounded-md bg-resultButton flex items-center justify-center gap-3"
              type="button"
            >
              <span>See Result & Export</span>
              <Image
                src={"/images/download.png"}
                alt="downloadButton"
                width={30}
                height={30}
              ></Image>
            </button>
          </div>
        </form>
      </div>
      <Toast
        message={messageToast}
        isVisible={isVisibleName}
        type={reqStatus}
        onClose={onCloseToastName}
      />
    </>
  );
};

export default SearchBy;
