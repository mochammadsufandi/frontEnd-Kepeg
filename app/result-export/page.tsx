"use client";

import { useState } from "react";
import { Navbar } from "../components/navbar";
import TableResult from "../components/tableResult";
import Toast from "../components/toast";
import Pagination from "../components/pagination";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { converterFieldToNameButton } from "@/utils/converter";

const ResultExport = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
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

  function onCloseToast() {
    setIsVisible(false);
  }
  function showToast() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  function handlePageChange(page: number) {
    setPage(page);
  }
  return (
    <div>
      <Navbar />
      <div className="mt-[7rem] py-[2rem] bg-navbarText">
        <div className="w-full flex flex-wrap items-center justify-center">
          <button
            type="button"
            className="text-white font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
            onClick={showToast}
          >
            Export Result to Word
          </button>
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
          <TableResult page={page} offset={offset} data={[]} />
        ) : typeData === "multiple" && statusMultiple === "success" ? (
          <TableResult page={page} offset={offset} data={arrayMultiple} />
        ) : typeData === "single" && statusSingle === "error" ? (
          <TableResult page={page} offset={offset} data={[]} />
        ) : typeData === "single" && statusSingle === "success" ? (
          <TableResult page={page} offset={offset} data={[singleData]} />
        ) : (
          <TableResult page={page} offset={offset} data={[]} />
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
        message="Action Successfully"
        onClose={onCloseToast}
        type="success"
      />
    </div>
  );
};

export default ResultExport;
