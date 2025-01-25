"use client";

import { useState } from "react";
import { Navbar } from "../components/navbar";
import TableResult from "../components/tableResult";
import Toast from "../components/toast";
import Pagination from "../components/pagination";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { converterFieldToNameButton } from "@/utils/converter";
import { AppDispatch } from "../lib/store";
import { useDispatch } from "react-redux";
import { switchNIP, switchNIPEdit } from "../lib/features/uniqueIDSlicing";
import {
  deletePersonnelMultiple,
  editPersonnelMultiple,
  markPersonnelMultiple,
} from "../lib/features/personnel/multiplePersonnelSlicing";
import {
  deletePersonnelSingle,
  editPersonnelSingle,
  markPersonnelSingle,
} from "../lib/features/personnel/singlePersonnelSlicing";
import { markPersonnel } from "@/utils/fetchAPI/markPersonnel";
import Modal from "../components/modal";
import { exportToWord } from "@/utils/fetchAPI/exportFile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { deletePersonnel } from "@/utils/fetchAPI/deletePersonnel";

const ResultExport = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [downloadURL, setDownloadURL] = useState("");
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const offset = 5;
  const typeData = useSelector((state: RootState) => state.typeData);
  const arrayMultiple = useSelector((state: RootState) => state.multiplePersonnel.data);
  const singleData = useSelector((state: RootState) => state.singlePersonnel.data);
  const totalPageMultiple =
    useSelector((state: RootState) => state.multiplePersonnel.count) / offset;

  const statusMultiple = useSelector((state: RootState) => state.multiplePersonnel.status);
  const statusSingle = useSelector((state: RootState) => state.singlePersonnel.status);
  const { filterField: filterFieldMultiple, sortField: sortFieldMultiple } = useSelector(
    (state: RootState) => state.multiplePersonnel
  );
  const { filterField: filterFieldSingle, sortField: sortFieldSingle } = useSelector(
    (state: RootState) => state.singlePersonnel
  );
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");
  const NIP = useSelector((state: RootState) => state.NIP);
  const NIPEdit = useSelector((state: RootState) => state.NIPEdit);
  const cacheIdSingle = useSelector((state: RootState) => state.singlePersonnel.cacheId);
  const cacheIdMultiple = useSelector((state: RootState) => state.multiplePersonnel.cacheId);

  // router
  const router = useRouter();

  // for redux
  const dispatch: AppDispatch = useDispatch();

  function onCloseToast() {
    setIsVisible(false);
  }
  function showToast() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }
  function onOpenModal() {
    setIsOpenModal(true);
  }
  function onCloseModal() {
    setIsOpenModal(false);
  }

  function onSwitchNIP(NIP: string) {
    dispatch(switchNIP(NIP));
  }

  function onSwitchNIPEdit(NIP: string) {
    dispatch(switchNIPEdit(NIP));
  }

  function handlePageChange(page: number) {
    setPage(page);
  }

  async function onMarkPersonnel() {
    try {
      const multiplePersonnel = arrayMultiple.find((value) => value.NIP === NIP);
      if (typeData === "multiple" && statusMultiple === "success") {
        dispatch(markPersonnelMultiple(NIP));
      }
      if (typeData === "single" && statusSingle === "success") {
        dispatch(markPersonnelSingle());
      }
      const marker = multiplePersonnel ? (multiplePersonnel?.marker as boolean) : singleData.marker;
      const data = await markPersonnel({ NIP, marker: !marker });
      const { responseData, status } = data;

      if (status === 200) {
        setStatusToast("success");
      } else {
        setStatusToast("error");
      }
      setMessageToast(responseData.message);
      showToast();
    } catch (err) {
      console.log(err);
    }
  }

  async function onExportFile() {
    if (cacheIdSingle) {
      const fileBlob = await exportToWord(cacheIdSingle);
      const fileURL = URL.createObjectURL(fileBlob);
      setDownloadURL(fileURL);
      setIsDownloadVisible(true);
    } else if (cacheIdMultiple) {
      const fileBlob = await exportToWord(cacheIdMultiple);
      const fileURL = URL.createObjectURL(fileBlob);
      setDownloadURL(fileURL);
      setIsDownloadVisible(true);
    }
  }

  async function onEditPersonnel() {
    if (typeData === "multiple") {
      dispatch(editPersonnelMultiple(NIPEdit));
    } else {
      dispatch(editPersonnelSingle(NIPEdit));
    }
    router.push("/edit");
  }

  async function onDeletePersonnel() {
    try {
      const { responseData, status } = await deletePersonnel(NIP);
      if (typeData === "multiple" && statusMultiple === "success") {
        dispatch(deletePersonnelMultiple(NIP));
      }
      if (typeData === "single" && statusSingle === "success") {
        dispatch(deletePersonnelSingle());
      }
      if (status === 200) {
        setStatusToast("success");
      } else {
        setStatusToast("error");
      }
      setMessageToast(responseData.message as string);
      showToast();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mt-[7rem] py-[2rem] bg-navbarText">
        <div className="w-full flex flex-wrap items-center justify-center">
          <div className={`${isDownloadVisible ? "w-full" : "w-fit"} text-center`}>
            <button
              type="button"
              className="text-white font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
              onClick={onOpenModal}
            >
              Export Result to Word
            </button>
          </div>
          {isDownloadVisible && (
            <a href={downloadURL} download="report.docx">
              <button className="flex items-center justify-center gap-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Download Word File
                <Image
                  src={"/images/download.png"}
                  alt="downloadButton"
                  width={30}
                  height={30}
                ></Image>
              </button>
            </a>
          )}
        </div>
        <div className="flex mt-[1rem] py-[0.5rem] px-[2rem] justify-center">
          <div className="w-[40%] flex flex-col mx-[0.5rem]">
            <h2 className="w-full text-center text-lg font-bold">Filter By : </h2>

            <div className="flex flex-wrap items-center justify-start font-semibold">
              {Object.keys(filterFieldMultiple).length > 0 &&
              typeData === "multiple" &&
              statusMultiple === "success"
                ? Object.keys(filterFieldMultiple).map((value, idx) => {
                    return (
                      <p key={idx} className="m-[0.5rem]">
                        {`${converterFieldToNameButton(value)} : ${filterFieldMultiple[value]}`}
                      </p>
                    );
                  })
                : Object.keys(filterFieldSingle).length > 0 &&
                  typeData === "single" &&
                  statusSingle === "success"
                ? Object.keys(filterFieldSingle).map((value, idx) => {
                    return (
                      <p key={idx} className="m-[0.5rem]">
                        {`${converterFieldToNameButton(value)} : ${filterFieldSingle[value]}`}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>

          <div className="w-[40%] flex flex-col mx-[0.5rem]">
            <h2 className="w-full text-center text-lg font-bold">Sort By : </h2>
            <div className="flex flex-wrap items-center justify-evenly font-semibold">
              {Object.keys(sortFieldMultiple).length > 0 &&
              typeData === "multiple" &&
              statusMultiple === "success"
                ? Object.keys(sortFieldMultiple).map((value, idx) => {
                    return (
                      <p key={idx} className="m-[0.5rem]">
                        {`${converterFieldToNameButton(value)} : ${sortFieldMultiple[value]}`}
                      </p>
                    );
                  })
                : Object.keys(sortFieldSingle).length > 0 &&
                  typeData === "single" &&
                  statusSingle === "success"
                ? Object.keys(sortFieldSingle).map((value, idx) => {
                    return (
                      <p key={idx} className="m-[0.5rem]">
                        {`${converterFieldToNameButton(value)} : ${sortFieldSingle[value]}`}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        {typeData === "multiple" && statusMultiple === "error" ? (
          <TableResult
            page={page}
            offset={offset}
            data={[]}
            onSwitchNIP={onSwitchNIP}
            onSwitchNIPEdit={onSwitchNIPEdit}
          />
        ) : typeData === "multiple" && statusMultiple === "success" ? (
          <TableResult
            page={page}
            offset={offset}
            data={arrayMultiple}
            onSwitchNIP={onSwitchNIP}
            onSwitchNIPEdit={onSwitchNIPEdit}
            onMarkPersonnel={onMarkPersonnel}
            onEditPersonnel={onEditPersonnel}
            onDeletePersonnel={onDeletePersonnel}
          />
        ) : typeData === "single" && statusSingle === "error" ? (
          <TableResult
            page={page}
            offset={offset}
            data={[]}
            onSwitchNIP={onSwitchNIP}
            onSwitchNIPEdit={onSwitchNIPEdit}
          />
        ) : typeData === "single" && statusSingle === "success" ? (
          <TableResult
            page={page}
            offset={offset}
            data={[singleData]}
            onSwitchNIP={onSwitchNIP}
            onSwitchNIPEdit={onSwitchNIPEdit}
            onMarkPersonnel={onMarkPersonnel}
            onEditPersonnel={onEditPersonnel}
            onDeletePersonnel={onDeletePersonnel}
          />
        ) : (
          <TableResult
            page={page}
            offset={offset}
            data={[]}
            onSwitchNIP={onSwitchNIP}
            onSwitchNIPEdit={onSwitchNIPEdit}
          />
        )}
        <div className="flex items-center justify-center pt-[1rem]">
          {typeData === "multiple" ? (
            <Pagination
              currentPage={page}
              totalPage={totalPageMultiple}
              onPageChange={handlePageChange}
            />
          ) : (
            <Pagination currentPage={page} totalPage={1} onPageChange={handlePageChange} />
          )}
        </div>
      </div>
      <Toast
        isVisible={isVisible}
        message={messageToast}
        onClose={onCloseToast}
        type={statusToast}
      />
      <Modal
        isOpen={isOpenModal}
        message="Are you sure to download export file?"
        onClose={onCloseModal}
        onAction={onExportFile}
      />
    </div>
  );
};

export default ResultExport;
